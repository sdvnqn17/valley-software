"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-none select-none";

  const sizes = {
    sm: "text-base px-4 py-2 gap-1.5",
    md: "text-base px-5 py-2.5 gap-2",
    lg: "text-lg px-7 py-3.5 gap-2",
  };

  const variants = {
    primary:
      "bg-neutral-950 text-white hover:bg-neutral-800 active:scale-[0.98]",
    secondary:
      "bg-transparent text-neutral-950 border border-neutral-300 hover:border-neutral-500 hover:bg-neutral-50 active:scale-[0.98]",
    ghost:
      "bg-transparent text-valley-green hover:text-valley-green-light underline underline-offset-4 decoration-valley-green/30 hover:decoration-valley-green",
    light:
      "bg-white text-neutral-950 hover:bg-[#3a7d44] hover:text-white active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-40 pointer-events-none" : ""} ${className}`;

  const motionProps = {
    whileTap: { scale: 0.97 },
    transition: { duration: 0.1 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
