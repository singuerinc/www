"use client";

import { IProject } from "@/lib/project";
import format from "date-fns/format";
import { motion } from "framer-motion";

export function Story({ post }: { post: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col gap-y-2 shrink-0 p-6 lg:p-12 w-full lg:w-[30rem]"
    >
      <h3 className="text-sm text-center text-teal-800">
        {format(post.date, "yyyy/MM/dd")}
      </h3>
      <h2 className="text-3xl text-center text-teal-600 font-lora">
        {post.title}
      </h2>
      <p className="m-0 text-center">{post.content}</p>
    </motion.li>
  );
}
