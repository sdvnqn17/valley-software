"use client";

import Image from "next/image";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionLabel } from "../ui/SectionLabel";

const problemas = [
  {
    label: "Procesos manuales",
    desc: "Tu equipo hace a mano lo que debería pasar solo.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Persona con papeles y formularios manuales",
  },
  {
    label: "Datos dispersos",
    desc: "La información está en planillas, emails y chats simultáneamente.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Múltiples pantallas con datos",
  },
  {
    label: "Herramientas desconectadas",
    desc: "Cada área usa su propio sistema y no hablan entre sí.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Cables y conexiones desorganizadas",
  },
  {
    label: "Tareas repetitivas",
    desc: "Se pierde tiempo en tareas que no generan valor.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Reloj y tareas acumuladas",
  },
  {
    label: "Falta de información",
    desc: "No hay visibilidad real de cómo está funcionando el negocio.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Dashboard sin datos claros",
  },
  {
    label: "Oportunidades perdidas",
    desc: "Los leads se enfrían porque el seguimiento es lento o inconsistente.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Oportunidad de negocio perdida",
  },
];

export function Problemas() {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-8">

        <AnimatedReveal className="mb-20">
          <SectionLabel className="mb-6 text-neutral-600">Lo que vemos</SectionLabel>
          <h2 className="text-display-lg font-bold text-white text-balance max-w-2xl tracking-tight">
            Problemas que vemos <span className="title-outline-white">todos los días.</span>
          </h2>
          <p className="mt-6 text-2xl text-neutral-500 max-w-xl text-balance">
            No son casos extraordinarios. Son el estado normal de la mayoría de las empresas antes de trabajar con nosotros.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemas.map((p, i) => (
            <AnimatedReveal key={p.label} delay={i * 0.08}>
              <div className="group flex flex-col overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors duration-300">

                {/* Banner imagen */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/50 group-hover:bg-neutral-950/30 transition-colors duration-300" />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-3 p-7 bg-neutral-950 group-hover:bg-neutral-900 transition-colors">
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {p.label}
                  </h3>
                  <p className="text-lg text-neutral-500 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-2">
                    <div className="w-4 h-px bg-valley-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.4} className="mt-16 flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
          <p className="text-neutral-400 text-base">
            Si reconocés alguno de estos problemas,{" "}
            <a
              href="#diagnostico"
              className="text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-colors"
            >
              hay una arquitectura para resolverlos
            </a>
            .
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
