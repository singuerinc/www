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
      className="bg-black aspect-[4/3] w-[40rem]"
    >
      <div
        className={`flex h-full items-center text-green-400 font-mono text-xl px-12 py-4 bg-green-900/30 rounded-3xl`}
      >
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
