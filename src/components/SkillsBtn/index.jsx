import "./style.css";

export const SkillsBtn = ({ text, category, symbol, index }) => (
  <article
    className="skill-card cursor-target"
    data-cursor-label={text}
    style={{ "--card-index": index }}
  >
    <div className="skill-icon" aria-hidden="true">
      {symbol}
    </div>
    <div className="skill-copy">
      <span>{category}</span>
      <h4>{text}</h4>
    </div>
    <div className="skill-dot" aria-hidden="true" />
  </article>
);
