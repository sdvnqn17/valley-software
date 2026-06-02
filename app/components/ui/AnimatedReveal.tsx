"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

export function AnimatedReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: AnimatedRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const initial = {
    up: { opacity: 0, y: 24 },
    left: { opacity: 0, x: -16 },
    none: { opacity: 0 },
  };

  const animate = {
    up: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    none: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={isInView ? animate[direction] : initial[direction]}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
