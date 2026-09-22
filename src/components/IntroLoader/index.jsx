import { useEffect, useState } from "react";
import "./style.css";

export const IntroLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(
      () => {
        setVisible(false);
        document.body.style.overflow = previousOverflow;
      },
      reducedMotion ? 250 : 2500,
    );

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-grid" />
      <div className="intro-monogram">
        <span>J</span>
        <i />
        <span>L</span>
      </div>
      <div className="intro-caption">JORGE MORAES · PORTFOLIO</div>
      <div className="intro-progress">
        <span />
      </div>
    </div>
  );
};
