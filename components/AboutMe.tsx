"use client";

import { IProject } from "@/lib/project";
import { motion } from "framer-motion";

export function AboutMe({ about }: { about: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="relative flex-col gap-y-6 text-lg text-gray-400 flex items-center justify-center shrink-0 w-[40rem]"
    >
      <div className="flex flex-col gap-y-2">
        <p className="m-0">
          I&apos;m Nahuel Scotti, a versatile professional with a strong focus
          on web development. With a background in graphic design, I&apos;ve
          worked with top companies like <b>DoubleYou</b> and{" "}
          <a
            className="hover:underline"
            href="https://www.b-reel.com/"
            target="_blank"
          >
            <b>B-REEL</b>
          </a>
          , contributing to projects for esteemed clients like Nike, Google,
          Facebook, and Spotify.
        </p>
        <p className="m-0">
          I specialize in leveraging cutting-edge technologies such as React,
          Typescript, Node.js.
        </p>
        <p className="m-0">
          Scroll (horizontally) and see some of my work and experiments.
        </p>
      </div>
    </motion.li>
  );
}
