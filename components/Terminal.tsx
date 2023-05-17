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
      className="bg-black aspect-[4/3] w-[40rem] rounded-lg"
    >
      <div className="flex items-center h-full px-12 py-4 font-mono text-xl text-teal-400 bg-teal-900/10">
        <span>$</span>
        <input
          type={"text"}
          className="h-full px-4 bg-transparent outline-none shrink"
          defaultValue={"open 'about me'"}
          onKeyDown={onKeyDown}
        />
      </div>
    </motion.li>
  );
}
