import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiPython,
  SiCplusplus,
  SiDocker,
  SiGit,
  SiFirebase,
  SiVercel,
  SiRender,
  SiAxios,
  SiPostman,
  SiReactrouter,
  SiGooglegemini,
} from "react-icons/si";

// Map tag names (case-insensitive) to their brand icons and colors
const TAG_ICONS: Record<
  string,
  {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color?: string;
  }
> = {
  react: { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  "next.js": { name: "Next.js", icon: SiNextdotjs },
  nextjs: { name: "Next.js", icon: SiNextdotjs },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  "node.js": { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  nodejs: { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  express: { name: "Express", icon: SiExpress },
  "tailwind css": {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-[#336791]",
  },
  postgres: { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
  mongodb: { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  supabase: { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  prisma: { name: "Prisma", icon: SiPrisma },
  python: { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  "c++": { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  docker: { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  git: { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  firebase: { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  vercel: { name: "Vercel", icon: SiVercel },
  render: { name: "Render", icon: SiRender, color: "text-[#46E3B7]" },
  axios: { name: "Axios", icon: SiAxios, color: "text-[#5A29E4]" },
  postman: { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  "react router": {
    name: "React Router",
    icon: SiReactrouter,
    color: "text-[#CA4245]",
  },
};

const SiShadcnui = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 256 256"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="208" y1="128" x2="128" y2="208" />
    <line x1="192" y1="40" x2="40" y2="192" />
  </svg>
);

TAG_ICONS["shadcn/ui"] = { name: "shadcn/ui", icon: SiShadcnui };
TAG_ICONS["shadcn"] = { name: "shadcn/ui", icon: SiShadcnui };
TAG_ICONS["gemini"] = {
  name: "Gemini AI",
  icon: SiGooglegemini,
  color: "text-[#8E75FF]",
};
TAG_ICONS["google gemini"] = {
  name: "Gemini AI",
  icon: SiGooglegemini,
  color: "text-[#8E75FF]",
};
TAG_ICONS["gemini ai"] = {
  name: "Gemini AI",
  icon: SiGooglegemini,
  color: "text-[#8E75FF]",
};
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: string[];
  image?: string;
  video?: string;
  links?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  return (
    <Card
      className={cn(
        "w-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 ease-out h-full relative group",
        className,
      )}
    >
      {/* Media Section */}
      <a
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer shrink-0"
      >
        <div className="w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-medium">
                No Media
              </span>
            </div>
          )}
        </div>
      </a>

      {/* Header Area */}
      <CardHeader className="px-4 pt-3 pb-2 flex-grow flex flex-col gap-1.5">
        <CardTitle className="text-sm sm:text-base font-semibold line-clamp-2 tracking-tight">
          {title}
        </CardTitle>
        <time className="font-sans text-[10px] sm:text-xs text-muted-foreground block">
          {dates}
        </time>
        <p className="text-[11px] sm:text-xs text-muted-foreground/90 line-clamp-3 mt-0.5 leading-relaxed">
          {description}
        </p>
      </CardHeader>

      {/* Tags Section (Icons Only with Hover Tooltips) */}
      <CardContent className="px-4 py-2 flex-grow-0 mt-auto">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((tag) => {
              const tagKey = tag.toLowerCase().trim();
              const tagMeta = TAG_ICONS[tagKey];
              const Icon = tagMeta?.icon;
              const displayName = tagMeta?.name || tag;

              if (!Icon) return null;

              return (
                <div
                  key={tag}
                  className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8"
                  onMouseEnter={() => setHoveredTag(tag)}
                  onMouseLeave={() => setHoveredTag(null)}
                >
                  {/* Tooltip on Hover */}
                  <AnimatePresence>
                    {hoveredTag === tag && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                        exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className="absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap
                          px-2 py-0.5 rounded-full text-[10px] font-medium
                          bg-zinc-900 text-white dark:bg-white dark:text-zinc-900
                          shadow-md pointer-events-none z-20"
                      >
                        {displayName}
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
                            border-l-4 border-r-4 border-t-4 border-transparent
                            border-t-zinc-900 dark:border-t-white"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Scalable Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex items-center justify-center p-1 rounded-lg  hover:bg-muted transition-colors cursor-pointer"
                  >
                    <Icon
                      className={cn("w-4 h-4 sm:w-5 sm:h-5", tagMeta.color)}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-4" />
        )}
      </CardContent>

      {/* Footer Links */}
      {links && links.length > 0 && (
        <CardFooter className="px-4 pt-2 pb-4 flex flex-wrap gap-2 mt-auto">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="inline-flex"
            >
              <Badge
                className={cn(
                  "flex items-center px-2.5 py-1.5 text-[10px] sm:text-[11px] font-medium rounded-full border transition-all cursor-pointer",
                  "bg-transparent text-foreground border-border hover:bg-muted",
                  "dark:bg-transparent dark:text-secondary-foreground dark:hover:bg-secondary/80",
                )}
              >
                <span className="shrink-0">{link.icon}</span>
                <motion.span
                  variants={{
                    rest: { width: 0, opacity: 0, marginLeft: 0 },
                    hover: { width: "auto", opacity: 1, marginLeft: 6 },
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden whitespace-nowrap block"
                >
                  {link.type}
                </motion.span>
              </Badge>
            </motion.a>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
