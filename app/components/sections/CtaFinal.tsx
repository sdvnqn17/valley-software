"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { AnimatedReveal } from "../ui/AnimatedReveal";

export function CtaFinal() {
  return (
    <section className="py-40 bg-neutral-950 relative overflow-hidden">
      {/* Grilla de fondo */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" />

      {/* Línea decorativa */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-valley-green/50 to-transparent"
      />

      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <AnimatedReveal>
          <span className="inline-flex items-center gap-2 text-sm font-mono text-neutral-600 tracking-widest uppercase mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
            Valley Software
          </span>

          <h2 className="text-display-xl font-bold text-white text-balance leading-[1.04] mb-8 tracking-tight">
            Tu negocio <span className="title-outline-white">ya funciona.</span>
            <br />
            <span className="text-neutral-600">La pregunta es si está</span>
            <br />
            <span className="title-outline">funcionando al máximo.</span>
          </h2>

          <p className="text-neutral-500 text-xl max-w-xl mx-auto mb-12 text-balance">
            Un diagnóstico sin costo puede mostrarte exactamente dónde están las oportunidades.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#diagnostico" variant="light" size="lg">
              Hablemos
            </Button>
            <Button href="#arquitecturas" variant="ghost" size="lg" className="text-neutral-500 hover:text-white decoration-neutral-700">
              Ver arquitecturas →
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
