"use client";
import { IProject } from "@/lib/project";
import { getProjectImage, getProjectUrl, normalizeTitle } from "@/lib/utils";
import { getYear } from "date-fns/fp";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectLink({ project }: { project: IProject }) {
  const title = normalizeTitle(project);
  return (
    <motion.div
      whileHover="hover"
      initial={{ opacity: 0 }}
      animate={"rest"}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="w-[20rem] aspect-square lg:w-[40rem] lg:aspect-[16/8] bg-center bg-no-repeat bg-cover rounded-lg bg-gray-800 border border-gray-800"
      style={{ backgroundImage: `url(${getProjectImage(project.image)})` }}
    >
      <div
        // href={getProjectUrl(project.slug)}
        className="w-[20rem] aspect-square lg:w-[40rem] lg:aspect-[16/8] relative flex flex-col h-full"
      >
        <motion.div
          variants={{
            rest: { top: "-1rem", opacity: 0 },
            hover: { top: "-2rem", opacity: 1 },
          }}
          className="absolute flex items-baseline gap-x-2"
        >
          <time className="font-mono font-semibold">
            {getYear(project.date)}
          </time>
        </motion.div>
        <motion.div
          variants={{
            rest: { scale: 0.95, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          className="absolute flex flex-col justify-between w-full h-full p-12 text-gray-900 bg-white rounded-lg gap-y-2"
        >
          <p className="m-0">{project.excerpt}</p>
          {/* <table className="text-sm">
            <tbody>
              <tr>
                <td>Client</td>
                <td className="font-semibold">{project.client}</td>
              </tr>
              <tr>
                <td>Agency</td>
                <td className="font-semibold">{project.agency}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td className="font-semibold">
                  {project.www ? (
                    <Link
                      className="hover:underline"
                      href={project.www}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.www}
                    </Link>
                  ) : (
                    <del>Unavailable</del>
                  )}
                </td>
              </tr>
              {project.more && (
                <tr>
                  <td className="info-title">More info</td>
                  <td className="font-semibold">
                    <Link
                      className="hover:underline"
                      href={project.more}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.more}
                    </Link>
                  </td>
                </tr>
              )}
              <tr>
                <td>Tech</td>
                <td className="font-semibold">
                  {project.tech?.map((v) => `#${v}`).join(" ")}
                </td>
              </tr>
              {project.awards && (
                <tr>
                  <td>Awards</td>
                  <td className="font-semibold">
                    {project.awards.map((award, idx) => (
                      <div key={idx} className={`award ${award}`} />
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          </table> */}
          <Link className="hover:underline" href={getProjectUrl(project.slug)}>
            Read more
          </Link>
        </motion.div>
        <motion.div
          variants={{
            rest: { bottom: "-1rem", opacity: 0 },
            hover: { top: "calc(100% + 0.5rem)", opacity: 1 },
          }}
          className="absolute flex flex-col"
        >
          <h2 className="text-lg">{title}</h2>
          <h3 className="text-sm font-semibold">{project.role}</h3>
          {/* <p dangerouslySetInnerHTML={{ __html: project.content ?? "" }} /> */}
        </motion.div>
      </div>
    </motion.div>
  );
}
