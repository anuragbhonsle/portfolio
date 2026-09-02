import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard"; // Ensure correct path
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

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
    title: "ComicsAI",
    tagline: "Find your next favorite webcomic.",
    description:
      "An AI-powered webcomic recommendation engine that analyzes genre, tone, length, custom prompts, to deliver comics using AI.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Gemini AI"],
    github: "https://github.com/anuragbhonsle/comics-ai",
    demo: "https://comicsai.vercel.app/",
    video: "https://ik.imagekit.io/anurag25102002/comicsas.mp4",
  },
  {
    title: "Clipz",
    tagline: "Short clips. Endless scroll.",
    description:
      "Clipz is a short-video sharing platform where you can explore an feed of reels or create and upload your own.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Auth.js", "Tailwind CSS"],
    github: "https://github.com/anuragbhonsle/clipz",
    demo: "https://clipzapp.vercel.app/",
    video: "https://ik.imagekit.io/anurag25102002/clipzapp.mp4",
  },

  {
    title: "AnimeVerse",
    tagline: "Your anime world, neatly organized.",
    description:
      "Track what you watch, discover what's next, and dive deep into your anime universe, minimal, fast, and built for fans.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/animeverse",
    demo: "https://anime-verse-xi.vercel.app/",
    video:
      "https://ik.imagekit.io/anurag25102002/animeverse.mp4?updatedAt=1788356646809",
  },
  {
    title: "Starune",
    tagline: "Stargazing, perfectly timed.",
    description:
      "Real-time stargazing forecasts based on cloud cover, visibility, humidity, and light pollution for your exact location.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/anuragbhonsle/starune",
    demo: "https://starune.vercel.app/",
    video:
      "https://ik.imagekit.io/anurag25102002/starune.mp4?updatedAt=1788361594762",
  },
  {
    title: "Taskly",
    tagline: "Keep your projects in check and crush your tasks daily.",
    description:
      "A vibe project manager app to organize your projects and tasks. Supports user authentication, project management.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/Taskly",
    demo: "https://tasklycloud.vercel.app/",
    video: "https://ik.imagekit.io/anurag25102002/taskly.mp4",
  },

  {
    title: "Skyly",
    tagline: "Real-time weather for any city, beautifully presented.",
    description:
      "Search any city and country to get real-time conditions. It generates a short summary of the day's conditions using Google Gemini.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "OpenWeather API",
      "Gemini AI",
    ],
    github: "https://github.com/anuragbhonsle/skyly",
    demo: "https://skyly-app.vercel.app/",
    video:
      "https://ik.imagekit.io/anurag25102002/skyly.mp4?updatedAt=1788362741731",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-2 sm:px-4 lg:px-20 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-12"
    >
      <div className="w-full sm:max-w-5xl mx-auto flex flex-col gap-6">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-5 sm:mb-7 tracking-tight text-left"
        >
          Featured Projects
        </motion.h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="w-full"
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
                className="w-full" // ensures full width on mobile
                links={[
                  {
                    icon: <ExternalLink className="w-4 h-4" />,
                    type: "Website",
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
        {projects.length > 6 && (
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setShowAll((prev) => !prev)}
            className="mx-auto mt-4 flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
          >
            {showAll ? "Show less" : "Show more projects"}
            <span
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </motion.button>
        )}
      </div>
    </motion.section>
  );
};
