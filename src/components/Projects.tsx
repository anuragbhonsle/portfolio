import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Project {
  title: string;
  tagline?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Eclipz",
    tagline: "Anonymous. Clean. Mysterious.",
    description:
      "Eclipz blends anonymity, a clean UI, and just a hint of mystery. A space where you can say anything while staying anonymous.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/anuragbhonsle/eclipz",
    demo: "https://eclipz.vercel.app/",
  },
  {
    title: "AnimeVerse",
    tagline: "Your anime world, neatly organized.",
    description:
      "Track what you watch, discover what's next, and dive deep into your anime universe — minimal, fast, and built for fans.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/animeverse",
    demo: "https://anime-verse-xi.vercel.app/",
  },
  {
    title: "LeetScape",
    tagline: "Your DSA mastery hub.",
    description:
      "A minimalist platform to help developers master algorithms and ace coding interviews — with smart tracking and note-taking.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/anuragbhonsle/leetscape",
    demo: "https://leetscape-app.vercel.app/",
  },
  {
    title: "Starune",
    tagline: "Stargazing, perfectly timed.",
    description:
      "Real-time stargazing forecasts based on cloud cover, visibility, humidity, and light pollution for your exact location.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    github: "https://github.com/anuragbhonsle/starune",
    demo: "https://starune.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const TiltCard = ({ project, index }: { project: Project; index: number }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)`,
      }}
      className="group relative overflow-hidden rounded-2xl shadow-lg border border-white/10 hover:border-primary/40 transition-all duration-500 backdrop-blur-xl bg-white/5 dark:bg-black/5 p-6"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        {project.tagline && (
          <p className="text-sm italic text-primary/70 mb-2">
            {project.tagline}
          </p>
        )}
        <p className="text-text-dim leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech badges */}
        <motion.div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-secondary/60 rounded-full text-xs border border-border/30"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.github && (
            <Button
              size="sm"
              variant="secondary"
              asChild
              className="transition-all duration-300 hover:scale-105"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" /> Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button
              size="sm"
              variant="default"
              asChild
              className="transition-all duration-300 hover:scale-105"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
