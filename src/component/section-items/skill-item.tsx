import { Skill } from "@/utils/data-interface";

export default function SkillItem({ skill }: { skill: Skill }) {
  const { title, icon: Icon } = skill;
  return (
    <li
      className="group flex items-center gap-2 border border-muted/25 bg-muted/5 rounded-full px-4 py-2
        font-mono text-sm text-text shadow-sm
        transition-all duration-200 ease-out
        hover:border-mint hover:bg-mint/10 hover:text-mint hover:shadow-md hover:-translate-y-0.5
        cursor-default"
    >
      <Icon
        size={16}
        className="text-muted transition-colors duration-200 group-hover:text-mint"
      />
      <span>{title}</span>
    </li>
  );
}