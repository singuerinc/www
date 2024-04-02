"use client";

import { IProject } from "@/lib/project";
import { getProjectImage } from "@/lib/utils";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";

export function Story({ post }: { post: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col gap-y-6 shrink-0 p-6 lg:p-12 w-full lg:w-[30rem]"
    >
      <h3 className="text-sm text-center text-[#FE84B5]">
        {format(post.date, "yyyy/MM/dd")}
      </h3>
      <h2 className="text-3xl font-semibold text-center text-[#FE84B5] font-inter">
        {post.title}
      </h2>
      {post.image && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
          className="w-full flex justify-center"
        >
          <Image
            alt={post.title}
            src={getProjectImage(post.image)}
            width={320}
            height={320}
            className="rounded-lg"
          />
        </motion.div>
      )}
      <p className="m-0 text-center">{post.content}</p>
    </motion.li>
  );
}
