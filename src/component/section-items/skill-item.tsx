import { Skill } from "@/utils/data-interface";

export default function SkillItem({ skill }: { skill: Skill }) {
  const { title, icon: Icon } = skill;
  return (
    <li className="flex items-center gap-2 border border-muted/30 rounded-full px-4 py-2 font-mono text-sm text-text hover:border-mint hover:text-mint transition-colors">
      <Icon size={16} />
      <span>{title}</span>
    </li>
  );
}