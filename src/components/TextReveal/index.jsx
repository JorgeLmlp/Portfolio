import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/languageContext";
import "./style.css";

const messageClass = (baseClass, visible) =>
  `${baseClass}${visible ? " is-visible" : ""}`;

export const AboutText = () => {
  const { copy } = useLanguage();
  const stageRef = useRef(null);
  const chatWindowRef = useRef(null);
  const [chatStep, setChatStep] = useState(0);
  const about = copy.about;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChatStep(8);
      return undefined;
    }

    let frameId = null;

    const updateConversation = () => {
      frameId = null;
      const rect = stage.getBoundingClientRect();
      const travel = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      setChatStep(Math.min(8, Math.floor(progress * 9)));
    };

    const requestUpdate = () => {
      if (frameId === null)
        frameId = window.requestAnimationFrame(updateConversation);
    };

    updateConversation();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    if (
      !chatWindow ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return undefined;

    let frameId = null;
    let nextPointer = null;

    const renderTilt = () => {
      frameId = null;
      if (!nextPointer) return;

      const rect = chatWindow.getBoundingClientRect();
      const x = Math.min(Math.max((nextPointer.x - rect.left) / rect.width, 0), 1);
      const y = Math.min(Math.max((nextPointer.y - rect.top) / rect.height, 0), 1);

      chatWindow.style.setProperty("--chat-rotate-x", `${(0.5 - y) * 5}deg`);
      chatWindow.style.setProperty("--chat-rotate-y", `${(x - 0.5) * 7}deg`);
      chatWindow.style.setProperty("--chat-pointer-x", `${x * 100}%`);
      chatWindow.style.setProperty("--chat-pointer-y", `${y * 100}%`);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      nextPointer = { x: event.clientX, y: event.clientY };
      if (frameId === null)
        frameId = window.requestAnimationFrame(renderTilt);
    };

    const resetTilt = () => {
      nextPointer = null;
      chatWindow.style.setProperty("--chat-rotate-x", "0deg");
      chatWindow.style.setProperty("--chat-rotate-y", "0deg");
      chatWindow.style.setProperty("--chat-pointer-x", "50%");
      chatWindow.style.setProperty("--chat-pointer-y", "50%");
    };

    chatWindow.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    chatWindow.addEventListener("pointerleave", resetTilt);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      chatWindow.removeEventListener("pointermove", handlePointerMove);
      chatWindow.removeEventListener("pointerleave", resetTilt);
    };
  }, []);

  return (
    <section className="about-content">
      <div className="about-intro">
        <span className="about-kicker">{about.kicker}</span>
        <h2 className="about-main-title">{about.title}</h2>
        <p className="about-lead">{about.lead}</p>
      </div>

      <div className="chat-scroll-stage" ref={stageRef}>
        <div className="chat-window" ref={chatWindowRef}>
          <div className="chat-window-glow" aria-hidden="true" />
          <div className="chat-titlebar" aria-hidden="true">
            <div className="chat-window-controls">
              <i />
              <i />
              <i />
            </div>
            <span>{about.channel}</span>
            <strong>{String(chatStep).padStart(2, "0")} / 08</strong>
          </div>

          <header className="chat-header">
            <div className="chat-avatar-wrap">
              <div className="chat-avatar" aria-hidden="true">
                JM
              </div>
              <i aria-hidden="true" />
            </div>
            <div className="chat-profile">
              <strong>{about.chatName}</strong>
              <span>{about.chatRole}</span>
            </div>
            <div className="chat-online">
              <i /> {about.online}
            </div>
          </header>

          <div className="chat-body">
            <aside className="chat-context" aria-label={about.conversations}>
              <span className="chat-context-label">{about.conversations}</span>
              <div className="chat-topic-list">
                {about.topics.map((topic, index) => (
                  <article
                    className={
                      Math.min(Math.floor(chatStep / 3), 2) === index
                        ? "chat-topic is-active"
                        : "chat-topic"
                    }
                    key={topic.title}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{topic.title}</strong>
                      <p>{topic.preview}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="chat-step-list">
                {[2, 4, 6, 8].map((step) => (
                  <i
                    className={chatStep >= step ? "is-complete" : ""}
                    key={step}
                  />
                ))}
              </div>
              <small>{about.scrollHint}</small>
            </aside>

            <div className="chat-conversation">
              <div className="chat-date-divider">
                <span>{about.today}</span>
              </div>

              <div className="chat-thread" aria-live="polite">
                <article
                  className={messageClass(
                    "chat-message chat-message-incoming",
                    chatStep >= 1,
                  )}
                >
                  <div className="chat-bubble">
                    <p>{about.questionOne}</p>
                    <div className="chat-meta">
                      <span>{about.visitor}</span>
                      <time>{about.now}</time>
                    </div>
                  </div>
                </article>

                <div className={messageClass("chat-typing", chatStep === 2)}>
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <small>{about.typing}</small>
                </div>

                <article
                  className={messageClass(
                    "chat-message chat-message-outgoing",
                    chatStep >= 3,
                  )}
                >
                  <div className="chat-bubble">
                    <p>{about.answerOne}</p>
                    <div className="chat-meta">
                      <span>{about.chatName}</span>
                      <time>{about.now}</time>
                    </div>
                  </div>
                </article>

                <article
                  className={messageClass(
                    "chat-message chat-message-incoming",
                    chatStep >= 4,
                  )}
                >
                  <div className="chat-bubble">
                    <p>{about.questionTwo}</p>
                    <div className="chat-meta">
                      <span>{about.visitor}</span>
                      <time>{about.now}</time>
                    </div>
                  </div>
                </article>

                <div className={messageClass("chat-typing", chatStep === 5)}>
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <small>{about.typing}</small>
                </div>

                <article
                  className={messageClass(
                    "chat-message chat-message-outgoing",
                    chatStep >= 6,
                  )}
                >
                  <div className="chat-bubble">
                    <p>{about.answerTwo}</p>
                    <div className="chat-meta">
                      <span>{about.chatName}</span>
                      <time>{about.now}</time>
                    </div>
                  </div>
                </article>

                <article
                  className={messageClass(
                    "chat-message chat-message-outgoing chat-message-short",
                    chatStep >= 7,
                  )}
                >
                  <div className="chat-bubble">
                    <p>{about.closing}</p>
                    <div className="chat-meta">
                      <span>{about.chatName}</span>
                      <time>{about.now}</time>
                    </div>
                    <small className="chat-delivered">
                      ✓✓ {about.delivered}
                    </small>
                  </div>
                </article>
              </div>

              <div className="chat-composer" aria-hidden="true">
                <span>{about.messagePlaceholder}</span>
                <i>↗</i>
              </div>
            </div>
          </div>

          <div className="chat-progress" aria-hidden="true">
            <span style={{ width: `${(chatStep / 8) * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutText;
