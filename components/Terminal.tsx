"use client";
import { useIntermittent } from "@/hooks/useIntermittent";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export function Terminal() {
  const [bool] = useIntermittent(500);
  const router = useRouter();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/about");
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="bg-black border-4 shrink-0 border-gray-800 aspect-[4/3] w-full lg:w-[24rem] rounded-lg"
    >
      <div className="flex items-start h-full p-12 font-mono text-xl text-teal-400 bg-teal-900/10">
        <span>$</span>
        <input
          type={"text"}
          className="px-4 bg-transparent outline-none shrink"
          defaultValue={"open 'about me'"}
          onKeyDown={onKeyDown}
        />
      </div>
    </motion.li>
  );
}
