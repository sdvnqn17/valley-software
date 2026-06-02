import { Nav } from "./components/sections/Nav";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { Hero } from "./components/sections/Hero";
import { Arquitecturas } from "./components/sections/Arquitecturas";
import { Problemas } from "./components/sections/Problemas";
import { QueConstruimos } from "./components/sections/QueConstruimos";
import { Enfoque } from "./components/sections/Enfoque";
import { Diagnostico } from "./components/sections/Diagnostico";
import { CtaFinal } from "./components/sections/CtaFinal";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <QueConstruimos />
      <Arquitecturas />
      <Problemas />
      <Enfoque />
      <Diagnostico />
      <CtaFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
