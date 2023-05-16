import { About } from "@/components/About";
import { CurrentStack } from "@/components/CurrentStack";
import { ProjectLink } from "@/components/ProjectLink";
import { Title } from "@/components/Title";
import { getAll } from "@/lib/project";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  normalizeTitle,
} from "@/lib/utils";

export default async function Page() {
  const projects = getAll();

  return (
    <ul className="grid grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      <Title />
      {projects.map((p, idx) => {
        const id = dashify(p);
        const title = normalizeTitle(p);
        return (
          <>
            <li
              key={p.slug}
              id={id}
              className="relative w-full aspect-[16/8] bg-center bg-no-repeat bg-cover"
              itemScope
              itemType="http://schema.org/WebSite"
              style={{ backgroundImage: `url(${getProjectImage(p.image)})` }}
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
            {idx === 7 && <About />}
            {idx === 11 && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
