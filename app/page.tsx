import { CurrentStack } from "@/components/CurrentStack";
import { RandomColor } from "@/components/RandomColor";
import { Terminal } from "@/components/Terminal";
import { TicTacToe } from "@/components/TicTacToe";
import { Title } from "@/components/Title";
import { getAll } from "@/lib/project";
import {
  dashify,
  getAbsoluteProjectImage,
  getAbsoluteProjectUrl,
  getProjectImage,
  normalizeTitle,
} from "@/lib/utils";
import getYear from "date-fns/fp/getYear";

export default async function Page() {
  const projects = getAll();

  return (
    <ul className="flex gap-12 mx-auto">
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
              <time className="block my-2 font-mono text-gray-200">
                {getYear(p.date)}
              </time>
              <div
                className="w-[40rem] aspect-[16/8] bg-center bg-no-repeat bg-cover rounded bg-gray-800"
                style={{ backgroundImage: `url(${getProjectImage(p.image)})` }}
              >
                {/* <ProjectLink project={p} /> */}
              </div>
              {/* <h2 className="my-2 text-4xl font-semibold text-white">
                {p.title}
              </h2> */}
              <h2 className="flex mt-2 font-semibold gap-x-2">
                {p.client} • {p.title}
              </h2>
              <h3 className="text-sm">{p.role}</h3>
              {/* <p className="font-mono text-xs lowercase">{p.tech.join(", ")}</p> */}
            </li>
            {idx === 2 && <RandomColor />}
            {idx === 3 && <TicTacToe />}
            {idx === 7 && <Terminal />}
            {idx === 11 && <CurrentStack />}
          </>
        );
      })}
    </ul>
  );
}
