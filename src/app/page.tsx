import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Consequences } from "@/components/sections/Consequences";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Solutions } from "@/components/sections/Solutions";
import { Pricing } from "@/components/sections/Pricing";
import { Commitments } from "@/components/sections/Commitments";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Facilities } from "@/components/sections/Facilities";
import { Process } from "@/components/sections/Process";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white pt-20 md:pt-24 pb-20 md:pb-0">
      <Header />
      <Hero />
      <PainPoints />
      <Consequences />
      <BeforeAfter />
      <Solutions />
      <Pricing />
      <Commitments />
      <Team />
      <Testimonials />
      <Stats />
      <Facilities />
      <Process />
      <Comparison />
      <FAQ />
      <Footer />
      <FloatingActions />
    </main>
  );
}
