"use client";
import { useIntermittent } from "@/hooks/useIntermittent";
import { IconBrandFacebook, IconBrandTypescript } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export function CurrentStack() {
  const [bool] = useIntermittent(500);
  const router = useRouter();

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/about");
    }
  };

  return (
    <div
      className={`font-mono flex flex-col aspect-[16/8] md:aspect-auto p-12 bg-blue-700 text-blue-200 xl:col-span-3`}
    >
      <h3 className="text-xl">c:\&gt; dir</h3>
      <ul className="grid grid-flow-row grid-cols-3 gap-2">
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js 13</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
