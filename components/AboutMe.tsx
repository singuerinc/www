"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <motion.li
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="relative lg:mx-48 text-xl text-violet-400 flex items-center justify-center shrink-0 w-full aspect-square lg:w-[40rem] lg:aspect-video"
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
          I&apos;ve worked with top companies like{" "}
          <a
            className="hover:underline"
            href="https://www.b-reel.com/"
            target="_blank"
          >
            <b>B-REEL</b>
          </a>{" "}
          and <span className="font-semibold">DoubleYou</span>, contributing to
          projects for esteemed clients like Nike, Google, Facebook, and
          Spotify.
        </p>
        <p className="m-0">
          I specialize in leveraging cutting-edge technologies such as React,
          Typescript, and Node.js among others.
        </p>
        <p className="m-0">
          Keep scrolling and explore some of my writing, work and experiments.
        </p>
      </div>
    </motion.li>
  );
}
