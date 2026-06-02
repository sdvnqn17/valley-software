import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-900 py-16 px-8 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fondofooter.png"
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-neutral-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="text-base font-semibold text-white tracking-tight">
            Valley Software
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-valley-green status-dot" />
        </div>

        <div className="flex flex-wrap gap-8">
          {[
            { label: "Arquitecturas", href: "#arquitecturas" },
            { label: "Enfoque", href: "#enfoque" },
            { label: "Diagnóstico", href: "#diagnostico" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-neutral-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-neutral-600 font-mono">
          © {year} Valley Software
        </p>
      </div>
    </footer>
  );
}
