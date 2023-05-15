"use client";
import { useParkinson } from "@/hooks/useParkinson";
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
    <div
      className={`aspect-[16/8] md:aspect-auto p-12 bg-blue-700 text-blue-200 xl:col-span-2 shadow-inner ${
        bool && "bg-opacity-[0.98]"
      }`}
    >
      <div className={`font-mono flex flex-col`}>
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
          <li>stripe-js</li>
          <li></li>
        </ul>
        <h3 className="mt-2 font-semibold h-7">c:\&gt; {text}</h3>
      </div>
    </div>
  );
}
