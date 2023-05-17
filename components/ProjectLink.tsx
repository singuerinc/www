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
      className="w-[40rem] aspect-[16/8] bg-center bg-no-repeat bg-cover rounded bg-gray-800"
      style={{ backgroundImage: `url(${getProjectImage(project.image)})` }}
    >
      <div
        // href={getProjectUrl(project.slug)}
        className="w-[40rem] aspect-[16/8] relative flex flex-col h-full md:items-start md:hover:shadow-2xl transition-shadow"
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
          <div className="text-xs text-gray-500">
            {project.tech?.map((v) => `#${v}`).join(" ")}
          </div>
        </motion.div>
        <motion.div
          variants={{
            rest: { bottom: "-3rem", opacity: 0 },
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
