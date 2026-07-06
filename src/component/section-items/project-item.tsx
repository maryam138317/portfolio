import { Projects } from "@/utils/data-interface";
import Image from "next/image";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

function TechItem({ item }: { item: string }) {
  return (
    <p className="font-mono text-xs text-gray-700 border border-gray-300 rounded-full px-3 py-1">
      {item}
    </p>
  );
}

export default function ProjectItem({ project }: { project: Projects }) {
  const { image, title, description, techs, links } = project;

  return (
    <li className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-gray-400 transition-all">
      {image && (
        <div className="rounded-xl overflow-hidden relative w-full aspect-video">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      )}

      <h6 className="font-display text-xl font-bold text-gray-900">{title}</h6>

      <p className="font-body text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {techs.map((t) => (
          <TechItem item={t} key={t} />
        ))}
      </div>

      <ul className="flex gap-4 pt-2 mt-auto">
        <li>
          <Link
            href={links.github}
            target="_blank"
            className="flex items-center gap-1 font-mono text-sm text-gray-800 hover:text-black transition-colors"
          >
            <IoIosLink />
            <span>Github</span>
          </Link>
        </li>
        {links.demo && (
          <li>
            <Link
              href={links.demo}
              target="_blank"
              className="flex items-center gap-1 font-mono text-sm text-gray-800 hover:text-black transition-colors"
            >
              <IoIosLink />
              <span>Demo</span>
            </Link>
          </li>
        )}
      </ul>
    </li>
  );
}