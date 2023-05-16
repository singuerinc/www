"use client";

import { useParkinson } from "@/hooks/useParkinson";

export function Barcode({ title }: { title: string }) {
  const [bool1] = useParkinson(25);
  return (
    <h2
      className={`my-2 text-7xl font-barcode ${
        bool1 ? "opacity-10" : "opacity-0"
      }`}
    >
      {title}
    </h2>
  );
}
