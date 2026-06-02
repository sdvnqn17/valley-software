import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Valley Software — Arquitecturas digitales que hacen crecer empresas",
  description:
    "Diseñamos sistemas que conectan procesos, automatizaciones e inteligencia artificial para que las empresas operen mejor. No hacemos páginas web. Construimos infraestructura digital.",
  keywords: [
    "arquitectura digital",
    "automatización de procesos",
    "inteligencia artificial",
    "sistemas a medida",
    "software empresarial",
    "CRM",
    "integraciones API",
    "Valley Software",
  ],
  openGraph: {
    title: "Valley Software — Arquitecturas digitales que hacen crecer empresas",
    description:
      "Diseñamos sistemas que conectan procesos, automatizaciones e inteligencia artificial para que las empresas operen mejor.",
    type: "website",
    locale: "es_AR",
    siteName: "Valley Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley Software — Arquitecturas digitales",
    description:
      "Sistemas que conectan procesos, automatizaciones e IA para que las empresas operen al máximo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
