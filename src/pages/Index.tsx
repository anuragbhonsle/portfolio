import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ScrollProgress />
      <ThemeToggle />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Footer />
      </main>

      {/* Parallax Background */}
      <ParallaxBackground />
      <BackToTop />
    </div>
  );
};

export default Index;
