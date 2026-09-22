import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import "./style.css";

export const TargetCursor = ({ scopeSelector, targetSelector }) => {
  const frameRef = useRef(null);
  const rotatorRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scope = document.querySelector(scopeSelector);
    const frame = frameRef.current;
    const rotator = rotatorRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;

    if (!scope || !frame || !rotator || !dot || !label) return undefined;

    let activeTarget = null;
    let activeCard = null;
    let cursorVisible = false;
    let pointerX = null;
    let pointerY = null;

    gsap.set([frame, dot], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    let spin;
    const startSpin = () => {
      spin?.kill();
      gsap.set(rotator, { rotation: 0 });
      if (reducedMotion) return;

      spin = gsap.to(rotator, {
        rotation: 360,
        duration: 3.5,
        ease: "none",
        repeat: -1,
      });
    };

    startSpin();

    const positionFrame = (target, immediate = false) => {
      if (target) {
        const rect = target.getBoundingClientRect();
        gsap.to(frame, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width + 8,
          height: rect.height + 8,
          duration: immediate || reducedMotion ? 0 : 0.28,
          ease: "power3.out",
          overwrite: "auto",
        });
        return;
      }

      gsap.to(frame, {
        x: pointerX,
        y: pointerY,
        width: 30,
        height: 30,
        duration: immediate || reducedMotion ? 0 : 0.22,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const showCursor = () => {
      if (cursorVisible) return;
      cursorVisible = true;
      scope.classList.add("skills-cursor-active");
      gsap.to([frame, dot], {
        autoAlpha: 1,
        duration: reducedMotion ? 0 : 0.18,
      });
      positionFrame(null, true);
    };

    const hideCursor = () => {
      if (!cursorVisible) return;
      cursorVisible = false;
      activeCard?.classList.remove("is-cursor-targeted");
      activeTarget = null;
      activeCard = null;
      frame.classList.remove("is-locked");
      label.textContent = "";
      startSpin();
      scope.classList.remove("skills-cursor-active");
      gsap.to([frame, dot], {
        autoAlpha: 0,
        duration: reducedMotion ? 0 : 0.18,
      });
    };

    const handleMove = (event) => {
      if (event.pointerType === "touch") return;

      pointerX = event.clientX;
      pointerY = event.clientY;

      const scopeRect = scope.getBoundingClientRect();
      const insideScope =
        pointerX >= scopeRect.left &&
        pointerX <= scopeRect.right &&
        pointerY >= scopeRect.top &&
        pointerY <= scopeRect.bottom;

      if (!insideScope) {
        hideCursor();
        return;
      }

      showCursor();
      gsap.to(dot, {
        x: pointerX,
        y: pointerY,
        duration: 0.1,
        ease: "power3.out",
        overwrite: "auto",
      });

      const nextTarget = document
        .elementsFromPoint(pointerX, pointerY)
        .map((element) => element.closest(targetSelector))
        .find((target) => target && scope.contains(target));
      if (nextTarget !== activeTarget) {
        activeCard?.classList.remove("is-cursor-targeted");
        activeTarget = nextTarget;
        activeCard = activeTarget?.closest(".skill-card") || null;
        if (activeTarget) {
          activeCard?.classList.add("is-cursor-targeted");
          label.textContent = activeTarget.dataset.cursorLabel || "";
          frame.classList.add("is-locked");
          spin?.kill();
          gsap.to(rotator, {
            rotation: 0,
            duration: reducedMotion ? 0 : 0.22,
            ease: "power2.out",
          });
        } else {
          label.textContent = "";
          frame.classList.remove("is-locked");
          startSpin();
        }
      }

      positionFrame(activeTarget);
    };

    const handleDown = () => cursorVisible && gsap.to(dot, { scale: 0.55, duration: 0.15 });
    const handleUp = () => cursorVisible && gsap.to(dot, { scale: 1, duration: 0.2 });
    const handleScroll = () => {
      if (pointerX === null || pointerY === null) return;

      handleMove({ clientX: pointerX, clientY: pointerY });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("blur", hideCursor);

    return () => {
      activeCard?.classList.remove("is-cursor-targeted");
      scope.classList.remove("skills-cursor-active");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("blur", hideCursor);
      spin?.kill();
      gsap.killTweensOf([frame, dot, rotator]);
    };
  }, [scopeSelector, targetSelector]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="skills-target-cursor" aria-hidden="true">
      <div className="skills-cursor-dot" ref={dotRef} />
      <div className="skills-cursor-frame" ref={frameRef}>
        <span className="skills-cursor-label" ref={labelRef} />
        <div className="skills-cursor-rotator" ref={rotatorRef}>
          <i className="cursor-corner corner-top-left" />
          <i className="cursor-corner corner-top-right" />
          <i className="cursor-corner corner-bottom-right" />
          <i className="cursor-corner corner-bottom-left" />
        </div>
      </div>
    </div>,
    document.body,
  );
};
