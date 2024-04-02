"use client";
import { IProject } from "@/lib/project";
import { getProjectImage } from "@/lib/utils";
import { formatRelative } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProjectLink({ project }: { project: IProject }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="w-full group relative lg:w-[40rem] lg:aspect-[2.11] bg-center rounded-lg bg-gray-800 lg:border lg:border-gray-800"
    >
      <Image
        alt={project.title}
        src={getProjectImage(project.image)}
        width={1632}
        height={772}
        className="lg:absolute lg:z-10 lg:top-0 lg:left-0 lg:rounded-lg"
      />
      <div
        // href={getProjectUrl(project.slug)}
        className="w-full lg:w-[40rem] lg:aspect-[2.11] relative flex flex-col h-full"
      >
        <div className="absolute flex items-baseline transition-all gap-x-2 lg:-top-4 lg:opacity-0 group-hover:-top-8 group-hover:opacity-100">
          <h4 className="text-sm font-semibold">{project.client}</h4>
        </div>
        <div className="z-20 flex flex-col justify-between w-full px-8 py-8 text-gray-900 transition-all bg-white border border-white rounded-b-lg lg:scale-95 lg:opacity-0 group-hover:scale-100 group-hover:opacity-100 lg:absolute lg:top-0 lg:left-0 lg:px-12 lg:h-full lg:overflow-y-scroll lg:rounded-lg gap-y-2">
          <time className="text-sm text-gray-700">
            {formatRelative(project.date, new Date())}
          </time>
          <p className="m-0">{project.excerpt}</p>
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
        </div>
        <div className="absolute flex flex-col group-hover:top-[100%] mt-4 group-hover:opacity-100 lg:opacity-0 lg:top-[90%] transition-all">
          <h2 className="text-lg">{project.title}</h2>
          <h3 className="text-sm font-semibold">{project.role}</h3>
        </div>
      </div>
    </motion.div>
  );
}
