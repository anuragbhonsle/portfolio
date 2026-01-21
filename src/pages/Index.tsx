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
import Navbar from "@/components/Navbar";
import { Blogs } from "@/components/Blogs";
import { useEffect } from "react";
import { Element } from "react-scroll";

import { Education } from "@/components/Education";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-foreground relative overflow-x-hidden px-4 sm:px-6 md:px-8">
      <ScrollProgress />
      <Navbar /> {/* added hover-navbar */}
      <main className="relative z-10 overflow-hidden">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
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
          <Element name="blogs">
            <Blogs />
          </Element>
          <Element name="techstack">
            <TechStack />
          </Element>
          <Element name="footer">
            <Footer />
          </Element>
        </div>
      </main>
      <ParallaxBackground />
    </div>
  );
};

export default Index;
