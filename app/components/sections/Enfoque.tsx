"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionLabel } from "../ui/SectionLabel";

const fases = [
  {
    id: "entender",
    code: "01",
    title: "Entender",
    desc: "Mapeamos el negocio: cómo fluye la información, dónde se pierde tiempo, qué decisiones dependen de qué datos.",
    duration: "1–2 días",
  },
  {
    id: "disenar",
    code: "02",
    title: "Diseñar",
    desc: "Proponemos una arquitectura. Qué sistemas, cómo se conectan, qué automatizamos y qué dejamos fuera.",
    duration: "2–3 días",
  },
  {
    id: "validar",
    code: "03",
    title: "Validar",
    desc: "Revisamos juntos la propuesta. Ajustamos antes de escribir una sola línea de código.",
    duration: "1 día",
  },
  {
    id: "construir",
    code: "04",
    title: "Construir",
    desc: "Desarrollo iterativo. Cada sprint entrega algo que ya funciona y podés ver.",
    duration: "Variable",
  },
  {
    id: "escalar",
    code: "05",
    title: "Escalar",
    desc: "El sistema queda diseñado para crecer. Nuevas integraciones, nuevos módulos, sin reescribir desde cero.",
    duration: "Continuo",
    accent: true,
  },
];

export function Enfoque() {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="enfoque" className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8">

        <AnimatedReveal className="mb-24">
          <SectionLabel className="mb-6 text-neutral-600">Metodología</SectionLabel>
          <h2 className="text-display-lg font-semibold text-white text-balance max-w-2xl">
            Nuestro enfoque.
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg text-balance">
            Más parecido a ingeniería que a marketing. Cada fase tiene un entregable claro.
          </p>
        </AnimatedReveal>

        <div className="relative">
          {/* Línea vertical */}
          <div ref={lineRef} className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 hidden lg:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="origin-top w-px h-full bg-gradient-to-b from-neutral-700 via-valley-green/40 to-transparent"
            />
          </div>

          <div className="flex flex-col gap-0">
            {fases.map((fase, i) => (
              <AnimatedReveal key={fase.id} delay={i * 0.1}>
                <div
                  className={`
                    grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12
                    border-t border-neutral-800 first:border-t-0
                    ${i % 2 === 0 ? "" : ""}
                  `}
                >
                  {/* Número + código — alterna lado */}
                  <div
                    className={`
                      flex flex-col gap-3
                      ${i % 2 === 0 ? "lg:pr-16 lg:text-right lg:items-end" : "lg:order-2 lg:pl-16"}
                    `}
                  >
                    <div className="flex items-center gap-3 lg:justify-end lg:[&:nth-child(odd)]:justify-start">
                      <span className="text-[10px] font-mono text-neutral-700 tracking-widest">
                        {fase.code}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-700 tracking-widest">
                        — {fase.duration}
                      </span>
                    </div>
                    <h3
                      className={`
                        text-display-md font-semibold
                        ${fase.accent ? "text-valley-green" : "text-white"}
                      `}
                    >
                      {fase.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <div
                    className={`
                      ${i % 2 === 0 ? "lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}
                    `}
                  >
                    <p className="text-neutral-400 leading-relaxed max-w-sm">
                      {fase.desc}
                    </p>
                  </div>

                  {/* Punto central */}
                  <motion.div
                    className="hidden lg:block absolute left-[calc(50%-4px)] w-2 h-2 rounded-full border border-neutral-700 bg-neutral-950"
                    whileInView={{
                      borderColor: fase.accent ? "#3a7d44" : "#525252",
                      backgroundColor: fase.accent ? "#3a7d44" : "#0a0a0a",
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                  />
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
