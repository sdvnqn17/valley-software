import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-neutral-400 ${className}`}
    >
      <span className="w-4 h-px bg-neutral-300" />
      {children}
    </span>
  );
}
