
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ProfessionalSummary } from "@/components/sections/ProfessionalSummary";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ProfessionalSummary />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
