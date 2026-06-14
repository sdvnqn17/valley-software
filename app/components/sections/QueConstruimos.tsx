"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionLabel } from "../ui/SectionLabel";

const items = [
  {
    code: "01",
    title: "Sistemas a medida",
    desc: "Diseñados desde cero para el flujo real de tu negocio. Sin plantillas, sin funciones innecesarias.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Código y desarrollo de software personalizado",
  },
  {
    code: "02",
    title: "Automatizaciones inteligentes",
    desc: "Procesos que corren solos. Notificaciones, asignaciones, actualizaciones y seguimientos automáticos.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Robot y automatización de procesos",
  },
  {
    code: "03",
    title: "Inteligencia artificial",
    desc: "IA aplicada a problemas concretos: atención al cliente, clasificación de leads, análisis de datos.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Inteligencia artificial y machine learning",
  },
  {
    code: "04",
    title: "Aplicaciones internas",
    desc: "Paneles, dashboards y herramientas para que tu equipo tenga visibilidad y control.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Dashboard analítico con métricas y gráficos",
  },
  {
    code: "05",
    title: "Integraciones y APIs",
    desc: "Conectamos las herramientas que ya usás: CRM, e-commerce, WhatsApp, redes sociales.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Servidores y conexiones de red",
  },
  {
    code: "06",
    title: "Landings de alto rendimiento",
    desc: "Páginas diseñadas para convertir, integradas al sistema de captación y seguimiento.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format&fit=crop",
    imageAlt: "Diseño de landing page en pantalla",
  },
];

export function QueConstruimos() {
  return (
    <section id="que-construimos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <AnimatedReveal className="mb-20">
          <SectionLabel className="mb-6">Capacidades</SectionLabel>
          <h2 className="text-display-lg font-bold text-neutral-950 text-balance max-w-2xl tracking-tight">
            Qué <span className="title-outline">construimos.</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-500 max-w-lg">
            Herramientas y sistemas que se integran en tu operación.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedReveal key={item.code} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col border border-neutral-100 hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors duration-300" />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-3 p-7">
                  <h3 className="text-lg font-semibold text-neutral-950 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-1">
                    <div className="w-4 h-px bg-valley-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
