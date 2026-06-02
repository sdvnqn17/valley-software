"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionLabel } from "../ui/SectionLabel";

const arquitecturas = [
  {
    id: "captacion",
    code: "arch-001",
    title: "Captación de Leads",
    problem: "Los leads llegan de distintos canales y se pierden sin seguimiento.",
    result: "Cada lead entra al CRM automáticamente y recibe contacto en minutos.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Equipo de ventas trabajando",
    flow: ["Meta Ads", "Landing", "CRM", "WhatsApp", "Ventas"],
    accentIndex: 2,
  },
  {
    id: "atencion",
    code: "arch-002",
    title: "Atención Automática",
    problem: "El equipo pierde horas respondiendo preguntas repetitivas.",
    result: "La IA responde el 80% de las consultas sin intervención humana.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Atención al cliente digital",
    flow: ["Instagram", "WhatsApp", "IA", "Cliente"],
    accentIndex: 2,
  },
  {
    id: "gestion",
    code: "arch-003",
    title: "Gestión Interna",
    problem: "La información está dispersa en planillas, emails y chats.",
    result: "Un panel centralizado con datos en tiempo real para tomar decisiones.",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Dashboard de gestión empresarial",
    flow: ["Web", "Panel", "Base de Datos", "Reportes"],
    accentIndex: 1,
  },
];

export function Arquitecturas() {
  return (
    <section id="arquitecturas" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <AnimatedReveal className="mb-20">
          <SectionLabel className="mb-6">Arquitecturas</SectionLabel>
          <h2 className="text-display-lg font-bold text-neutral-950 text-balance max-w-3xl tracking-tight">
            Arquitecturas que <span className="title-outline">funcionan.</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-500 max-w-xl text-balance">
            No mostramos servicios. Mostramos sistemas reales, con sus entradas, procesos y resultados.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {arquitecturas.map((arch, i) => (
            <AnimatedReveal key={arch.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col border border-neutral-100 hover:border-neutral-300 hover:shadow-lg transition-all duration-400 overflow-hidden"
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden bg-neutral-100">
                  <Image
                    src={arch.image}
                    alt={arch.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/30 group-hover:bg-neutral-950/20 transition-colors duration-400" />
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-6 p-8 flex-1">
                  <h3 className="text-display-sm font-semibold text-neutral-950">
                    {arch.title}
                  </h3>

                  {/* Flow horizontal */}
                  <div className="flex flex-wrap items-center gap-1">
                    {arch.flow.map((step, j) => (
                      <div key={step} className="flex items-center gap-1">
                        <span
                          className={`text-sm font-medium px-2.5 py-1 border transition-colors duration-300 ${
                            j === arch.accentIndex
                              ? "border-valley-green/40 bg-valley-green-dim text-valley-green"
                              : "border-neutral-200 text-neutral-600 bg-neutral-50"
                          }`}
                        >
                          {step}
                        </span>
                        {j < arch.flow.length - 1 && (
                          <span className="text-neutral-300 text-xs">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Problema / Resultado */}
                  <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-neutral-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                        Problema
                      </span>
                      <p className="text-base text-neutral-500 mt-1 leading-relaxed">
                        {arch.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-valley-green">
                        Resultado
                      </span>
                      <p className="text-base text-neutral-800 mt-1 leading-relaxed font-medium">
                        {arch.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
