"use client";

import { IProject } from "@/lib/project";
import formatDistance from "date-fns/formatDistance";
import { motion } from "framer-motion";
import Link from "next/link";

export function BlogPost({ post }: { post: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col p-6 gap-y-2 shrink-0"
    >
      <h3 className="text-cyan-300">blog post</h3>
      <div className="flex flex-col justify-center items-center gap-y-2 p-4 w-[30rem] bg-cyan-300 text-gray-900 aspect-video shadow-xl rounded-lg">
        {/* <div
          className="w-full h-4"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #000 8px, #000 10px)",
          }}
        /> */}
        <Link href={post.www!} target="_blank">
          <h2 className="my-12 text-4xl text-center hover:underline">
            {post.title}
          </h2>
        </Link>
        {/* <div
          className="w-full h-4"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #000 8px, #000 10px)",
          }}
        /> */}
      </div>
      <h3 className="text-cyan-300">
        {formatDistance(post.date, new Date(), { addSuffix: true })}
      </h3>
    </motion.li>
  );
}
