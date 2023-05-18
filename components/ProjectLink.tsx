"use client";
import { IProject } from "@/lib/project";
import { getProjectImage, getProjectUrl } from "@/lib/utils";
import formatRelative from "date-fns/formatRelative";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectLink({ project }: { project: IProject }) {
  return (
    <motion.div
      whileHover="hover"
      initial={{ opacity: 0 }}
      animate={"rest"}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="w-full aspect-square lg:w-[40rem] lg:aspect-[16/8] bg-center bg-no-repeat bg-cover rounded-lg bg-gray-800 border border-gray-800"
      style={{
        backgroundImage: project.image
          ? `url(${getProjectImage(project.image)})`
          : "none",
        backgroundColor: project.bg_color ?? "initial",
      }}
    >
      <div
        // href={getProjectUrl(project.slug)}
        className="w-full aspect-square lg:w-[40rem] lg:aspect-[16/8] relative flex flex-col h-full"
      >
        <motion.div
          variants={{
            rest: { top: "-1rem", opacity: 0 },
            hover: { top: "-2rem", opacity: 1 },
          }}
          className="absolute flex items-baseline gap-x-2"
        >
          <h4 className="text-sm font-semibold">{project.client}</h4>
        </motion.div>
        <motion.div
          variants={{
            rest: { scale: 0.95, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          className="absolute flex flex-col justify-between w-full h-full px-12 py-8 overflow-y-scroll text-gray-900 bg-white rounded-lg gap-y-2"
        >
          <time className="text-sm text-gray-700">
            {formatRelative(project.date, new Date())}
          </time>
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
          {/* <Link className="hover:underline" href={getProjectUrl(project.slug)}>
            Read more
          </Link> */}
          {project.www && (
            <Link
              className="text-sm text-gray-700 hover:underline"
              href={project.www}
              target="_blank"
            >
              Launch
            </Link>
          )}
          {!project.www && (
            <span className="text-sm text-gray-700">Currently offline</span>
          )}
        </motion.div>
        <motion.div
          variants={{
            rest: { bottom: "-1rem", opacity: 0 },
            hover: { top: "calc(100% + 0.5rem)", opacity: 1 },
          }}
          className="absolute flex flex-col"
        >
          <h2 className="text-lg">{project.title}</h2>
          <h3 className="text-sm font-semibold">{project.role}</h3>
          {/* <p dangerouslySetInnerHTML={{ __html: project.content ?? "" }} /> */}
        </motion.div>
      </div>
    </motion.div>
  );
}
