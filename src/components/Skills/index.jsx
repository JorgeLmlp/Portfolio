import "./style.css";
import { SkillsBtn } from "../SkillsBtn";
import { TargetCursor } from "../TargetCursor";
import { useLanguage } from "../../context/languageContext";

const skills = [
  ["Node.js", "backend", "ND"],
  ["Express.js", "backend", "EXP"],
  ["Flask", "backend", "FLASK"],
  ["Python", "language", "PY"],
  ["MySQL", "database", "SQL"],
  ["C#", "language", "C#"],
  ["Pandas", "dataAnalysis", "PD"],
  ["JavaScript", "language", "JS"],
  ["React", "frontend", "RE"],
  ["Swift", "mobile", "SWF"],
  ["Kotlin", "mobile", "KT"],
  ["Flutter", "mobile", "FLT"],
  ["Vite", "tooling", "VI"],
  ["Git", "versioning", "GT"],
  ["TypeScript", "language", "TS"],
  ["Javascript", "language", "JS"],
];

export const Skills = () => {
  const { copy } = useLanguage();
  const content = copy.skills;

  return (
    <div className="skills-panel">
      <TargetCursor
        scopeSelector=".skills-section"
        targetSelector=".skill-card.cursor-target"
      />
      <div className="skills-heading">
        <span className="skills-eyebrow">{content.kicker}</span>
        <h3 className="blackfuture3">{content.title}</h3>
        <p>{content.description}</p>
      </div>
      <div className="skills-grid">
        {skills.map(([text, category, symbol], index) => (
          <SkillsBtn
            key={text}
            text={text}
            category={content.categories[category]}
            symbol={symbol}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
