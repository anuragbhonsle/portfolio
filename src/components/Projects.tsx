import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Eclipz",
    description:
      "Eclipz was built to blend anonymity, a clean UI, and just a hint of mystery. It's a space where you can say anything while staying anonymous.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/anuragbhonsle/eclipz",
    demo: "https://eclipz.vercel.app/",
    color: "bg-primary",
  },
  {
    title: "AnimeVerse",
    description:
      "Animeverse is your personal anime sanctuary — built to track what you watch, discover what's next, and dive deep into your anime world. It's minimal, fast, and made by a fan, for fans.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/animeverse",
    demo: "https://anime-verse-xi.vercel.app/",
    color: "bg-accent",
  },
  {
    title: "LeetScape",
    description:
      "LeetScape was built to blend organization, progress tracking, and just a hint of consistency. It's a space where you can master coding interviews while staying focused.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    demo: "https://leetscape-app.vercel.app/",
    color: "bg-secondary",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src={`/${project.title}.png`}
                      alt={`${project.title} logo`}
                      className="w-8 h-8 object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="flex gap-2">
                      {project.github && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                                     <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                     {project.title}
                   </h3>

                   <p className="text-text-dim leading-relaxed mb-6 flex-grow text-base">
                     {project.description}
                   </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/80 hover:bg-secondary transition-colors duration-300 rounded-full text-sm text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
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
