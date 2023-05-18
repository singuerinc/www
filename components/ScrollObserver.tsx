"use client";

import { useCallback, useEffect } from "react";

export function ScrollObserver() {
  const onScroll = useCallback((e: WheelEvent) => {
    document.body.scrollLeft += e.deltaY;
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  });
  return null;
}
