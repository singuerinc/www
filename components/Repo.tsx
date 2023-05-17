"use client";

import { IProject } from "@/lib/project";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Repo({ repo }: { repo: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col gap-y-2"
    >
      <h3>open-source</h3>
      <Link
        className="flex flex-col justify-between p-6 text-black bg-gray-200 transition-colors hover:bg-white drop-shadow-xl aspect-video w-[20rem] shrink-0 rounded-lg"
        href={repo.www!}
      >
        <IconBrandGithubFilled />
        <h2>
          singuerinc/<span className="font-semibold">{repo.title}</span>
        </h2>
        <p
          className="m-0 text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: repo.content ?? "" }}
        />
      </Link>
    </motion.li>
  );
}
