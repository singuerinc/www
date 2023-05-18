"use client";
import { IProject } from "@/lib/project";
import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 z-50 py-6 h-screen w-screen flex flex-col items-center justify-start bg-black/90`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className={`flex flex-col w-2/3 overflow-y-scroll rounded-lg`}
      >
        <div className={`relative flex flex-col w-full bg-white`}>
          {/* <div
            onClick={onClose}
            className="absolute z-50 flex justify-end p-4 rounded-full top-4 right-4 hover:bg-white"
          >
            <IconX color="red" size={"2rem"} />
          </div> */}
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
