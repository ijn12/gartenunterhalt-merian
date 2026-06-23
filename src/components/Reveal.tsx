"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

const buildVariants = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay },
  },
});

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
