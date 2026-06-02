"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-sm border-b border-neutral-100"
    >
      <a href="/" className="flex items-center gap-2.5">
        <span className="text-base font-semibold tracking-tight text-neutral-950">
          Valley Software
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Arquitecturas", href: "#arquitecturas" },
          { label: "Enfoque", href: "#enfoque" },
          { label: "Nosotros", href: "#que-construimos" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-base text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <Button href="#diagnostico" size="sm">
        Solicitar diagnóstico
      </Button>
    </motion.nav>
  );
}
