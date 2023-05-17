"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";

export function Navigation() {
  const { scrollX } = useScroll();

  useMotionValueEvent(scrollX, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return <nav className="fixed top-0 left-0">aaa</nav>;
}
