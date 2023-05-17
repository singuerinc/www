import { IProject } from "@/lib/project";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  normalizeTitle,
} from "@/lib/utils";
import { ProjectLink } from "./ProjectLink";

export function Website({ project }: { project: IProject }) {
  const id = dashify(project);
  const title = normalizeTitle(project);
  return (
    <li
      key={project.slug}
      id={id}
      itemScope
      itemType="http://schema.org/WebSite"
    >
      <meta itemProp="name" content={title} />
      <meta itemProp="contributor" content="Nahuel Scotti" />
      <meta itemProp="keywords" content={project.tech?.join(",")} />
      {project.awards?.map((a, idx) => (
        <meta key={idx} itemProp="award" content={a} />
      ))}
      <meta itemProp="image" content={getAbsoluteProjectImage(project.image)} />
      <meta itemProp="url" content={getAbsoluteProjectUrl(project.slug)} />

      <ProjectLink project={project} />
    </li>
  );
}
