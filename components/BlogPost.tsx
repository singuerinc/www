"use client";

import { IProject } from "@/lib/project";
import { formatDistance } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";

export function BlogPost({ post }: { post: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col gap-y-2 shrink-0"
    >
      <div className="relative flex flex-col justify-center items-center gap-y-2 p-8 w-full aspect-video lg:w-[30rem] text-gray-800 bg-yellow-50 lg:aspect-[2/3] shadow-xl rounded-lg with-border">
        {/* <div
          className="w-full h-4"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #000 8px, #000 10px)",
          }}
        /> */}
        <Link
          href={post.www!}
          target="_blank"
          className="flex flex-col items-center justify-center group"
        >
          <h3 className="w-2/3 pb-6 text-sm text-center text-gray-700 border-b border-gray-900/10">
            Article
          </h3>
          <h2 className="my-6 text-3xl font-semibold text-center font-lora group-hover:underline">
            {post.title}
          </h2>
          <h3 className="w-2/3 pt-6 text-sm text-center text-gray-700 border-t border-gray-900/10">
            {formatDistance(post.date, new Date(), { addSuffix: true })}
          </h3>
        </Link>
        {/* <div
          className="w-full h-4"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #000 8px, #000 10px)",
          }}
        /> */}
      </div>
    </motion.li>
  );
}
