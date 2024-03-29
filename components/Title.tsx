"use client";

import { useIntermittent } from "@/hooks/useIntermittent";
import { useParkinson } from "@/hooks/useParkinson";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";

export function Title() {
  const [hasClicked, setClicked] = useState(false);
  const [bool1] = useParkinson(25);
  const [bool2] = useIntermittent(1000);

  const onClickOnArrow = useCallback(() => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setClicked(true);
  }, []);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="relative flex items-center justify-center w-full shrink-0"
    >
      <div className="relative flex flex-col flex-1">
        <div className={`relative w-full h-12`}>
          <h1
            className={`absolute top-0 z-10 text-4xl font-normal select-none ${
              !bool1 && "opacity-70 skew-x-6"
            }`}
          >
            <span>singuerinc</span>
            <span className={`text-cyan-300 px-2 ${bool2 && "opacity-0"}`}>
              |
            </span>
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
        <div className="flex flex-col">
          <div>
            <Link
              target="_blank"
              href="https://blog.singuerinc.com/"
              className="hover:underline"
            >
              blog
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href="https://github.com/singuerinc"
              className="hover:underline"
            >
              github
            </Link>
          </div>
        </div>
      </div>
      <IconArrowRight
        className={`hidden mx-12 text-gray-600 transition-colors cursor-pointer ${
          !hasClicked && "lg:block"
        } hover:text-white`}
        size={"4rem"}
        stroke={1}
        onClick={onClickOnArrow}
      />
    </motion.li>
  );
}
