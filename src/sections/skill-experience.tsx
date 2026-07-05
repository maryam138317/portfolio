import SkillItem from "@/component/section-items/skill-item";
import ProSections from "@/component/sections";
import { skills, experiances } from "@/utils/data";

export default function SkillsExperience() {
  return (
    <ProSections id="skills-experience" title="Skills & Experience">
      <div className="w-full flex flex-col gap-16">
        {/* Skills */}
        <div>
          <h4 className="font-mono text-sm text-muted mb-5 tracking-wide">
            {"// skills"}
          </h4>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillItem skill={skill} key={skill.title} />
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h4 className="font-mono text-sm text-muted mb-5 tracking-wide">
            {"// experience"}
          </h4>
          <ul className="flex flex-col gap-8">
            {experiances.map((exp) => (
              <li key={exp.title} className="border-l-2 border-mint/30 pl-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h5 className="font-display text-lg md:text-xl font-bold text-text">
                    {exp.title}
                  </h5>
                  <span className="font-mono text-mint text-sm">{exp.company}</span>
                </div>
                <p className="font-mono text-muted text-xs mt-1 mb-3">
                  {exp.startDate} — {exp.endDate}
                </p>
                <p className="font-body text-muted text-base leading-relaxed max-w-2xl">
                  {exp.responsibility}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProSections>
  );
}