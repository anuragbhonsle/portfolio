import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Eclipz",
    description:
      "Eclipz was built to blend anonymity, a clean UI, and just a hint of mystery. It's a space where you can say anything while staying anonymous.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/anuragbhonsle/eclipz",
    demo: "https://eclipz.vercel.app/",
  },
  {
    title: "AnimeVerse",
    description:
      "Animeverse is your personal anime sanctuary — built to track what you watch, discover what's next, and dive deep into your anime world. It's minimal, fast, and made by a fan, for fans.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/animeverse",
    demo: "https://anime-verse-xi.vercel.app/",
  },
  {
    title: "LeetScape",
    description:
      "LeetScape is a focused, minimalist platform built to help developers master algorithms and ace coding interviews. It combines smart organization, progress tracking, and note-taking—all in a clean, distraction-free workspace designed for consistency and growth.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    demo: "https://leetscape-app.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 lg:px-20"
    >
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
              }}
              className="group"
            >
              <div className="bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card flex flex-col relative overflow-hidden w-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 tracking-tight text-foreground group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="text-text-dim leading-relaxed text-lg mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-2 ml-4">
                      {project.github && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-10 w-10 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-secondary/80 hover:bg-secondary transition-colors duration-300 rounded-full text-sm text-secondary-foreground border border-border/50"
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
