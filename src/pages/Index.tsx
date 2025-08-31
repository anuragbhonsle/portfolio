import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { BackToTop } from "@/components/BackToTop";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { Element } from "react-scroll";
import { Education } from "@/components/Education";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar /> {/* added hover-navbar */}
      <main className="relative z-10 overflow-hidden">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="education">
          <Education />
        </Element>
        <Element name="techstack">
          <TechStack />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </main>
      <ParallaxBackground />
      <BackToTop />
    </div>
  );
};

export default Index;
