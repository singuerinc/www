import { IProject } from "@/lib/project";
import { getProjectUrl, normalizeTitle } from "@/lib/utils";
import Link from "next/link";

export function ProjectLink({ project }: { project: IProject }) {
  const title = normalizeTitle(project);
  return (
    <Link
      href={getProjectUrl(project.slug)}
      className="absolute flex flex-col items-end w-full h-full transition-all w-link md:p-12 group md:justify-end md:items-start md:hover:shadow-2xl md:hover:z-50 md:bg-gradient-to-t md:hover:from-black md:hover:to-black/70"
    >
      <h3 className="hidden w-full pb-2 mb-2 text-lg font-normal text-white transition-all pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 md:border-b border-b-white/20">
        {title}
      </h3>
      <div className="hidden w-full pt-2 font-mono text-xs font-medium text-white transition-all pointer-events-none md:opacity-0 md:flex md:group-hover:opacity-100 text-white/70">
        {project.tech.join(" · ")}
      </div>
    </Link>
  );
}
