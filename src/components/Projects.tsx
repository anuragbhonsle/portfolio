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
    video: "leetscape.mp4",
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
  {
    title: "Taskly",
    tagline: "Keep your projects in check and crush your tasks daily.",
    description:
      "A React + Supabase project manager app to organize your projects and tasks. Supports user authentication, project/task management, and user-specific data.",
    tech: ["React", "Node.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/anuragbhonsle/Taskly",
    demo: "https://tasklycloud.vercel.app/",
    video: "taskly.mp4",
  },
  {
    title: "ReactQuiz",
    tagline:
      "Test your React knowledge with multiple choice questions and have fun!",
    description:
      "A simple, clean, and interactive Quiz Application built with React to practice core React concepts like state, props, hooks, and component-driven UI.",
    tech: ["React", "Node.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/anuragbhonsle/Quiz",
    demo: "https://reactjsquizapp.vercel.app/",
    video: "quiz.mp4",
  },
  {
    title: "Countdown Game",
    tagline:
      "A timing-based reflex game where you have to stop the timer at a set time",
    description:
      "A fast-paced timing game built with React where precision matters. Players must rely on intuition and focus to stop the timer as close as possible to the target time, making it a fun way to practice state management, hooks, and component-driven UI architecture.",
    tech: ["React", "Node.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/anuragbhonsle/countdown_game",
    demo: "https://countdown-gamee.vercel.app/",
    video: "countdown.mp4",
  },
  {
    title: "InvestMate",
    tagline:
      "Visualize your money growth with compound interest and smart planning",
    description:
      "InvestMate is an interactive investment calculator built with React that helps users track how their initial and yearly contributions can grow over time. With customizable presets, detailed results, and a sleek UI, it makes financial planning simple and visually engaging.",
    tech: ["React", "Node.js", "Tailwind CSS", "Vite"],
    github: "https://github.com/anuragbhonsle/InvestMate",
    demo: "https://invest-matee.vercel.app/",
    video: "invest2.mp4",
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
        {projects.length > 2 && (
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
