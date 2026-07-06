import ProjectItem from "@/component/section-items/project-item";
import ProSections from "@/component/sections";
import { projects } from "@/utils/data";

export default function Projects() {
  return (
    <ProSections id="projects" title="Projects">
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </ul>
    </ProSections>
  );
}