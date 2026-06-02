"use client";

import { motion } from "framer-motion";

interface FlowNodeProps {
  label: string;
  sublabel?: string;
  accent?: boolean;
  index?: number;
  isLast?: boolean;
}

export function FlowNode({
  label,
  sublabel,
  accent = false,
  index = 0,
  isLast = false,
}: FlowNodeProps) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className={`
          relative flex flex-col items-center justify-center
          px-4 py-3 min-w-[120px]
          border text-center
          ${
            accent
              ? "border-valley-green/40 bg-valley-green-dim"
              : "border-neutral-200 bg-white"
          }
        `}
      >
        {accent && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-valley-green status-dot" />
        )}
        <span
          className={`text-sm font-medium tracking-tight ${
            accent ? "text-valley-green" : "text-neutral-800"
          }`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-[10px] text-neutral-400 mt-0.5">{sublabel}</span>
        )}
      </motion.div>

      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="origin-top w-px h-6 bg-gradient-to-b from-neutral-300 to-neutral-100"
        />
      )}
    </div>
  );
}
