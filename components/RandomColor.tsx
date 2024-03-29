"use client";

import { useIntermittent } from "@/hooks/useIntermittent";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const getColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}000000`.substring(0, 7);

export function RandomColor() {
  const [color, setColor] = useState("#fff");
  const [bool] = useIntermittent(1800);
  // const [x, setX] = useState(0);

  // const onMouseMove = useCallback((e: React.MouseEvent) => {
  //   setX(e.clientX / 640 / (e.clientY / 412));
  // }, []);

  useEffect(() => {
    const oc = getColor();
    setColor(oc);
  }, [bool]);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      // onMouseMove={onMouseMove}
      className="flex flex-col gap-y-4 justify-between shrink-0 w-[10rem]"
    >
      <div
        className="flex items-center justify-center transition-colors rounded-full aspect-square"
        style={{
          backgroundColor: color,
        }}
      >
        <span className="font-mono text-xl text-center text-white tabular-nums">
          {color}
        </span>
      </div>
    </motion.li>
  );
}
