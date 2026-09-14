'use client'
import ProjectItem from "@/component/section-items/project-item";
import ProSections from "@/component/sections";
import { projects } from "@/utils/data";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('sections');

  return (
    <ProSections id="projects" title={t('projects')}>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.title.en} />
        ))}
      </ul>
    </ProSections>
  );
}