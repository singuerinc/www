"use client";
import { useTimer } from "@/hooks/useTimer";
import { IProject } from "@/lib/project";
import format from "date-fns/format";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export function Timer({ project }: { project: IProject }) {
  const { accumulated, isRunning, start, pause, stop, add5, add1, remove1 } =
    useTimer();

  useEffect(() => {
    [0, 0, 0, 0, 0].forEach(() => add5());
  }, [add5]);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className="flex flex-col justify-center gap-y-2 shrink-0 w-full lg:w-[20rem]"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-semibold">Pomodoro Timer</h3>
        <button
          className="px-3 py-1 hover:underline"
          onClick={() => {
            if (isRunning) {
              stop();
              [0, 0, 0, 0, 0].forEach(() => add5());
            } else {
              start();
            }
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-6 font-semibold border rounded-lg text-cyan-600 border-cyan-600 tabular-nums text-7xl">
        {format(accumulated, "mm:ss")}
      </div>
      <div className="text-gray-500">
        This straightforward timer may not have many features, but it gets the
        job done. It&apos;s perfect for quick time pomodoro tracking.
        <br />
        Find the standalone version{" "}
        <Link
          href="https://timer.singuerinc.com/"
          className="hover:underline text-cyan-300"
        >
          here
        </Link>
        .
      </div>
    </motion.li>
  );
}
