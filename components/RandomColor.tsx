"use client";

import { useParkinson } from "@/hooks/useParkinson";
import Color from "colorjs.io";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const getColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}000000`.substring(0, 7);

export function RandomColor() {
  const [color, setColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#fff");
  const [bool] = useParkinson(250);
  const [x, setX] = useState(0);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setX(e.clientX / 640 / (e.clientY / 412));
  }, []);

  useEffect(() => {
    const oc = getColor();
    const tc = new Color(oc);
    tc.lch.l = 50;
    tc.lch.c = 50;
    setTextColor(tc.toString({ format: "hex" }));
    setColor(oc);
  }, [x, bool]);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
      onMouseMove={onMouseMove}
      className="flex flex-col justify-between aspect-video mx-48 p-12 shrink-0 w-[40rem] rounded transition-colors"
      style={{
        backgroundColor: color,
      }}
    >
      <h2 className="text-white" style={{ color: textColor }}>
        One of 16.777.215 colors you can see in this screen.
      </h2>
      <span
        className="text-6xl leading-4 font-barcode"
        style={{ color: textColor }}
      >
        {color.substring(1)}
      </span>
      <span
        className="font-mono text-xl tabular-nums"
        style={{ color: textColor }}
      >
        {color}
      </span>
    </motion.li>
  );
}
