"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_c9ektxg";
const TEMPLATE_ID = "template_oc30x9o";
const PUBLIC_KEY = "KOow0e0sM_Mfbrz4V";

export function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message, title: "Nueva consulta desde Valley Software", reply_to: email },
        PUBLIC_KEY
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondo1.png"
          alt="Valley Software — oficina de operaciones con IA"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-neutral-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
      </div>

      {/* Layout mobile: columna — desktop: fila con form a la derecha */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-end lg:items-center min-h-screen pt-28 pb-16 lg:py-0 gap-10 lg:gap-0">

        {/* Título — mobile: arriba, desktop: absolute bottom-left */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="w-4 h-px bg-valley-green" />
            <span className="text-sm font-medium tracking-widest uppercase text-valley-green">
              Arquitecturas digitales
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2.4rem, 10vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
            className="font-bold text-white"
          >
            Sistemas que hacen{" "}
            <span style={{ color: "#3a7d44" }}>crecer</span>
            <br />empresas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-base text-white/60 leading-relaxed"
          >
            Arquitecturas digitales que conectan procesos, automatizaciones e IA
            para que las empresas operen mejor.
          </motion.p>
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs lg:ml-auto"
        >
          <div className="bg-white border border-neutral-200 shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                consulta gratuita
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
                <span className="text-[10px] font-mono text-neutral-400">disponible</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-neutral-950 mb-1 leading-snug">
              Agendá tu consulta gratis
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Te respondemos en menos de 24 horas.
            </p>

            {status === "success" ? (
              <div className="py-8 text-center">
                <div className="w-8 h-8 rounded-full bg-valley-green/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-valley-green text-lg">✓</span>
                </div>
                <p className="text-sm font-medium text-neutral-950">¡Consulta enviada!</p>
                <p className="text-xs text-neutral-400 mt-1">Te contactamos pronto.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-300 focus:outline-none focus:border-valley-green transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@empresa.com"
                    className="w-full border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-300 focus:outline-none focus:border-valley-green transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                    ¿Qué necesitás?
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contanos brevemente tu situación..."
                    className="w-full border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-300 focus:outline-none focus:border-valley-green transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500">Hubo un error. Intentá de nuevo.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-neutral-950 text-white text-sm font-medium py-3 px-6 hover:bg-valley-green transition-colors duration-200 mt-1 disabled:opacity-50"
                >
                  {status === "sending" ? "Enviando..." : "Enviar consulta →"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Título — bottom left (solo desktop) */}
      <div className="hidden lg:block absolute bottom-0 left-0 z-10 px-8 pb-14 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <span className="w-4 h-px bg-valley-green" />
          <span className="text-sm font-medium tracking-widest uppercase text-valley-green">
            Arquitecturas digitales
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.8rem, 4.5vw, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.03em" }}
          className="font-bold text-white"
        >
          Sistemas que hacen{" "}
          <span style={{ color: "#3a7d44" }}>crecer</span>
          <br />empresas.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 text-lg text-white/60 max-w-md leading-relaxed"
        >
          Arquitecturas digitales que conectan procesos, automatizaciones e IA
          para que las empresas operen mejor.
        </motion.p>
      </div>
    </section>
  );
}
