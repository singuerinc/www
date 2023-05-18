"use client";

import { IProject } from "@/lib/project";
import { motion } from "framer-motion";

export function AboutMe({ about }: { about: IProject }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="relative gap-6 text-lg text-cyan-300 flex items-center justify-center shrink-0 w-[40rem]"
    >
      {/* <Image
        alt="Nahuel"
        width={300}
        height={300}
        src="/images/Nahuel_1x1.jpg"
      /> */}
      <div className="flex flex-col gap-y-2">
        <p className="m-0">
          Hi. I&apos;m Nahuel Scotti, a versatile professional with a strong
          focus on web development. With a background in graphic design,
          I&apos;ve worked with top companies like <b>DoubleYou</b> and{" "}
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
          Typescript, and Node.js among others.
        </p>
        <p className="m-0">
          Scroll (horizontally) and see some of my work and experiments.
        </p>
      </div>
    </motion.li>
  );
}
