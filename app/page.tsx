import { BlogPost } from "@/components/BlogPost";
import { CurrentStack } from "@/components/CurrentStack";
import { ProjectLink } from "@/components/ProjectLink";
import { RandomColor } from "@/components/RandomColor";
import { Repo } from "@/components/Repo";
import { Terminal } from "@/components/Terminal";
import { TicTacToe } from "@/components/TicTacToe";
import { Title } from "@/components/Title";
import { getAll } from "@/lib/project";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  normalizeTitle,
} from "@/lib/utils";

export default async function Page() {
  const projects = getAll();

  return (
    <ul className="flex items-center gap-12 mx-12">
      <Title />
      {projects.map((project) => {
        const id = dashify(project);
        const title = normalizeTitle(project);
        return (
          <>
            {project.type === "website" && (
              <li
                key={project.slug}
                id={id}
                itemScope
                itemType="http://schema.org/WebSite"
                className=""
              >
                <meta itemProp="name" content={title} />
                <meta itemProp="contributor" content="Nahuel Scotti" />
                <meta itemProp="keywords" content={project.tech?.join(",")} />
                {project.awards?.map((a, idx) => (
                  <meta key={idx} itemProp="award" content={a} />
                ))}
                <meta
                  itemProp="image"
                  content={getAbsoluteProjectImage(project.image)}
                />
                <meta
                  itemProp="url"
                  content={getAbsoluteProjectUrl(project.slug)}
                />

                <ProjectLink project={project} />
              </li>
            )}
            {project.type === "blog-post" && <BlogPost post={project} />}
            {project.type === "repo" && <Repo repo={project} />}
            {project.type === "random-colors" && <RandomColor />}
            {project.type === "tic-tac-toe" && <TicTacToe />}
            {project.type === "terminal" && <Terminal />}
            {project.type === "current-stack" && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
