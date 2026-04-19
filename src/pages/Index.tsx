import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Volunteer } from "@/components/portfolio/Volunteer";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground crt-vignette">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Volunteer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
