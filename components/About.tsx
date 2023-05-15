"use client";
import { useIntermittent } from "@/hooks/useIntermittent";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export function About() {
  const [bool] = useIntermittent(500);
  const router = useRouter();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/about");
    }
  };

  return (
    <div className="bg-black aspect-[16/8] md:aspect-auto xl:col-span-2">
      <div
        className={`flex h-full items-center text-green-400 font-mono text-2xl px-12 py-4 bg-green-900/30`}
      >
        <span>$</span>
        <input
          type={"text"}
          className="h-full px-4 bg-transparent outline-none shrink"
          defaultValue={"open 'about me'"}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}
