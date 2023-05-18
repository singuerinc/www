"use client";
import { useParkinson } from "@/hooks/useParkinson";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const prompt = "stack";

export function CurrentStack() {
  const [bool] = useParkinson(50);
  const [i, setIdx] = useState(1);
  const [text, setText] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => ++i % 48);
      setText(i < 6 ? prompt.substring(0, i) : "");
    }, 250);
    return () => clearInterval(id);
  }, [i]);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      className={`p-12 rounded-lg shrink-0 w-full lg:w-[40rem] aspect-[4/3] bg-blue-700 text-blue-200 shadow-inner ${
        bool && "bg-opacity-[0.98]"
      }`}
    >
      <div className={`font-mono text-xl flex flex-col`}>
        <ul
          className={`grid grid-flow-row grid-cols-3 ${
            i <= prompt.length + 1 && "hidden"
          }`}
        >
          <li className="font-semibold">typescript</li>
          <li className="font-semibold">react</li>
          <li className="font-semibold">next.js</li>
          <li className="font-semibold">javascript</li>
          <li>node.js</li>
          <li>zod</li>
          <li>xstate</li>
          <li>graphql</li>
          <li>tailwind.css</li>
          <li></li>
        </ul>
        <h3 className="mt-2 font-semibold h-7">c:\&gt; {text}</h3>
      </div>
    </motion.li>
  );
}
