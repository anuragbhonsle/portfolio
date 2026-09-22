import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Blogs } from "@/components/Blogs";
import { Element } from "react-scroll";
import { Education } from "@/components/Education";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent text-foreground">
      <ScrollProgress />

      <main className="relative z-10 w-full overflow-hidden">
        <div
          className="
            mx-auto w-full max-w-5xl
            px-4
            min-[400px]:px-5
            sm:px-6
            md:px-8
            lg:px-10
          "
        >
          <Element name="hero">
            <Hero />
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element name="techstack">
            <TechStack />
          </Element>

          <Element name="projects">
            <Projects />
          </Element>

          <Element name="experience">
            <Experience />
          </Element>

          <Element name="education">
            <Education />
          </Element>

          <Element name="blogs">
            <Blogs />
          </Element>

          <Element name="footer">
            <Footer />
          </Element>
        </div>
      </main>
    </div>
  );
};

export default Index;
