"use client";
import { IProject } from "@/lib/project";
import { IconX } from "@tabler/icons-react";
import { animate, cubicBezier, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function ProjectModal({
  children,
  project,
}: {
  children: React.ReactNode;
  project: IProject;
}) {
  const router = useRouter();
  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);

  const [font, setFont] = useState("font-barcode");

  useEffect(() => {
    animate(0, 100, {
      delay: 1,
      duration: 1.6,
      onUpdate: (latest) => {
        if (latest === 100) {
          setFont("");
        } else {
          setFont(Math.random() > 0.8 ? "" : "font-barcode");
        }
      },
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: easing, duration: 0.3 }}
      className={`my-12 py-12 min-h-screen flex flex-col items-center justify-center w-full h-full bg-black/90`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className={`flex flex-col w-2/3`}
      >
        <h1 className="text-white text-7xl font-barcode opacity-10">
          {project.title}
        </h1>
        <div className={`flex flex-col p-12 bg-white ${font}`}>
          <div className="flex justify-end">
            <IconX onClick={onClose} />
          </div>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
