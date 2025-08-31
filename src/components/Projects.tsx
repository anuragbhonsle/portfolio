import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard"; // Ensure correct path
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tagline?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  video?: string;
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
    video: "eclipzvideo.mp4",
  },
  {
    title: "AnimeVerse",
    tagline: "Your anime world, neatly organized.",
    description:
      "Track what you watch, discover what's next, and dive deep into your anime universe — minimal, fast, and built for fans.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/animeverse",
    demo: "https://anime-verse-xi.vercel.app/",
    video: "animeversevideo.mp4",
  },
  {
    title: "LeetScape",
    tagline: "Your DSA mastery hub.",
    description:
      "A minimalist platform to help developers master algorithms and ace coding interviews — with smart tracking and note-taking.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/anuragbhonsle/leetscape",
    demo: "https://leetscape-app.vercel.app/",
    video: "leetscapevideo.mp4",
  },
  {
    title: "Starune",
    tagline: "Stargazing, perfectly timed.",
    description:
      "Real-time stargazing forecasts based on cloud cover, visibility, humidity, and light pollution for your exact location.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    github: "https://github.com/anuragbhonsle/starune",
    demo: "https://starune.vercel.app/",
    video: "starunevideo.mp4",
  },
];

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 lg:px-20 pt-2 lg:pt-4 pb-6 lg:pb-8"
    >
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-l sm:text-2xl font-bold text-foreground mb-7 tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                href={project.demo}
                description={project.description}
                dates={project.tagline || ""}
                tags={project.tech}
                image={project.image}
                video={project.video}
                links={[
                  {
                    icon: <ExternalLink className="w-4 h-4" />,
                    type: "Website", // Changed from "Demo" to "Website"
                    href: project.demo || "#",
                  },
                  {
                    icon: <Github className="w-4 h-4" />,
                    type: "Source",
                    href: project.github || "#",
                  },
                ]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
