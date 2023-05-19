"use client";

import { useMotionValueEvent, useSpring } from "framer-motion";
import { useCallback, useEffect } from "react";

export function ScrollObserver() {
  const x = useSpring(0, { stiffness: 250 });

  const onScroll = useCallback(
    (e: WheelEvent) => {
      x.set(document.body.scrollLeft + e.deltaY);
    },
    [x]
  );

  useMotionValueEvent(x, "change", (latest) => {
    document.body.scrollLeft = latest;
  });

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  });
  return null;
}
