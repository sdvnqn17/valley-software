"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionLabel } from "../ui/SectionLabel";

const beneficios = [
  "Diagnóstico sin costo",
  "Propuesta personalizada en 48h",
  "Sin compromiso",
  "Sin plantillas genéricas",
];

export function Diagnostico() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    whatsapp: "",
    mejorar: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="diagnostico" className="py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[780px]">

          {/* Imagen lateral izquierda */}
          <AnimatedReveal direction="left" className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop"
              alt="Reunión de equipo profesional"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-neutral-950/40" />
            {/* Overlay con copy */}
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
                <span className="text-sm font-mono text-white/50 tracking-widest uppercase">Valley Software</span>
              </div>
              <p className="text-white text-2xl font-semibold leading-snug max-w-sm text-balance">
                &ldquo;No vendemos servicios. Construimos la infraestructura digital que tu negocio necesita.&rdquo;
              </p>
              <div className="mt-8 flex flex-col gap-2">
                {beneficios.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <span className="w-3 h-px bg-valley-green" />
                    <span className="text-base text-white/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Formulario derecha */}
          <AnimatedReveal delay={0.15} className="flex flex-col justify-center px-10 lg:px-16 py-20">
            <SectionLabel className="mb-8">Diagnóstico</SectionLabel>
            <h2 className="text-display-md font-semibold text-neutral-950 text-balance mb-4">
              Solicitá tu diagnóstico.
            </h2>
            <p className="text-xl text-neutral-500 mb-10 text-balance leading-relaxed">
              Analizamos cómo funciona tu negocio y te proponemos una arquitectura que resuelva los problemas reales.
            </p>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-5 p-10 border border-valley-green/30 bg-valley-green-dim"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-valley-green status-dot" />
                    <span className="text-sm font-mono text-valley-green tracking-widest uppercase">Recibido</span>
                  </div>
                  <h3 className="text-display-sm font-semibold text-neutral-950">
                    Perfecto. Lo revisamos en las próximas horas.
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Te contactamos por WhatsApp para coordinar el diagnóstico sin costo.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {[
                    { id: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
                    { id: "empresa", label: "Empresa", type: "text", placeholder: "Nombre de la empresa" },
                    { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "+54 9 11 0000 0000" },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label
                        htmlFor={field.id}
                        className="text-sm font-medium text-neutral-400 tracking-wider uppercase"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={form[field.id as keyof typeof form]}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [field.id]: e.target.value }))
                        }
                        className="w-full px-4 py-3.5 text-lg text-neutral-900 bg-white border border-neutral-200 focus:border-neutral-950 focus:outline-none transition-colors placeholder:text-neutral-300"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="mejorar"
                      className="text-sm font-medium text-neutral-400 tracking-wider uppercase"
                    >
                      ¿Qué querés mejorar?
                    </label>
                    <textarea
                      id="mejorar"
                      required
                      placeholder="Contanos brevemente el problema o proceso que querés optimizar…"
                      rows={4}
                      value={form.mejorar}
                      onChange={(e) => setForm((f) => ({ ...f, mejorar: e.target.value }))}
                      className="w-full px-4 py-3.5 text-lg text-neutral-900 bg-white border border-neutral-200 focus:border-neutral-950 focus:outline-none transition-colors resize-none placeholder:text-neutral-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full justify-center mt-2"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-3.5 h-3.5 border border-white/30 border-t-white rounded-full inline-block"
                        />
                        Enviando…
                      </span>
                    ) : (
                      "Solicitar diagnóstico"
                    )}
                  </Button>

                  <p className="text-base text-neutral-400 text-center">
                    Sin compromiso. Respondemos en menos de 24h.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
