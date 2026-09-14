'use client'
import SkillItem from "@/component/section-items/skill-item";
import ProSections from "@/component/sections";
import { skills, experiances } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";
import { pickLocalized } from "@/lib/localized";

export default function SkillsExperience() {
  const locale = useLocale();
  const t = useTranslations('sections');

  return (
    <ProSections id="skills-experience" title={t('skillsExperience')}>
      <div className="w-full flex flex-col gap-16">
        {/* Skills */}
        <div>
          <h4 className="font-mono text-sm text-muted mb-5 tracking-wide">
            {`// ${t('skills')}`}
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
            {`// ${t('experience')}`}
          </h4>
          <ul className="flex flex-col gap-10">
            {experiances.map((exp) => (
              <li
                key={exp.company}
                className="relative pl-6 border-l-2 border-mint/25
                  before:content-[''] before:absolute before:-left-1.75 before:top-1.5
                  before:w-3 before:h-3 before:rounded-full
                  before:bg-mint before:shadow-[0_0_0_4px_var(--mint-glow,rgba(52,211,153,0.15))]"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h5 className="font-display text-lg md:text-xl font-bold text-text">
                    {pickLocalized(exp.title, locale)}
                  </h5>
                  <span className="font-mono text-mint text-sm px-2 py-0.5 rounded-full bg-mint/10">
                    {exp.company}
                  </span>
                </div>
                <p className="font-mono text-muted text-xs mt-1.5 mb-3 tracking-wide">
                  {exp.startDate} —{" "}
                  {exp.endDate === "present" ? t('present') : exp.endDate}
                </p>
                <p className="font-body text-muted text-base leading-relaxed max-w-2xl">
                  {pickLocalized(exp.responsibility, locale)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProSections>
  );
}