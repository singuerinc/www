"use client";

import { useIntermittent } from "@/hooks/useIntermittent";
import { useParkinson } from "@/hooks/useParkinson";
import { motion } from "framer-motion";
import Link from "next/link";

export function Title() {
  const [bool1] = useParkinson(25);
  const [bool2] = useIntermittent(1000);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="relative flex flex-col justify-center shrink-0 w-[24rem] rounded"
    >
      <div className="relative h-12">
        <h1
          className={`absolute top-0 z-10 text-4xl font-normal select-none ${
            !bool1 && "opacity-70 skew-x-6"
          }`}
        >
          <span>singuerinc</span>
          <span className={`px-2 ${bool2 && "opacity-0"}`}>|</span>
          <span>dev</span>
        </h1>
        <h2
          className={`absolute top-0 select-none bottom-24 text-4xl text-red-600`}
        >
          <span>singuerinc</span>
          <span className={`px-2 ${bool2 && "opacity-0"}`}>|</span>
          <span>dev</span>
        </h2>
      </div>
      <div className="flex flex-col gap-x-2">
        <Link href="/blog" className="hover:underline">
          <span>blog</span>
        </Link>
        <Link href="/blog" className="hover:underline">
          <span>github</span>
        </Link>
      </div>
    </motion.li>
  );
}
