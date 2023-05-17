import { CurrentStack } from "@/components/CurrentStack";
import { ProjectLink } from "@/components/ProjectLink";
import { RandomColor } from "@/components/RandomColor";
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
      {projects.map((p, idx) => {
        const id = dashify(p);
        const title = normalizeTitle(p);
        return (
          <>
            <li
              key={p.slug}
              id={id}
              itemScope
              itemType="http://schema.org/WebSite"
              className=""
            >
              <meta itemProp="name" content={title} />
              <meta itemProp="contributor" content="Nahuel Scotti" />
              <meta itemProp="keywords" content={p.tech.join(",")} />
              {p.awards?.map((a, idx) => (
                <meta key={idx} itemProp="award" content={a} />
              ))}
              <meta
                itemProp="image"
                content={getAbsoluteProjectImage(p.image)}
              />
              <meta itemProp="url" content={getAbsoluteProjectUrl(p.slug)} />

              <ProjectLink project={p} />
            </li>
            {idx === 2 && <RandomColor />}
            {idx === 4 && <TicTacToe />}
            {idx === 7 && <Terminal />}
            {idx === 11 && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
