import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  Home,
  Sun,
  Moon,
  User,
  FileText,
  Briefcase,
  Clipboard,
  Terminal,
} from "lucide-react";
import CLI from "./cli";

// Nav items with distinct icons
const navItems = [
  { icon: Home, section: "hero", label: "Home" },
  { icon: User, section: "about", label: "About" },
  { icon: Clipboard, section: "experience", label: "Experience" },
  { icon: Briefcase, section: "projects", label: "Projects" },
  {
    icon: FileText,
    section: "resume",
    label: "View Resume",
    href: "/resume.pdf",
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "light" || saved === "dark" ? saved : "light";
    }
    return "light";
  });

  const [cliOpen, setCliOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onBlogPage = location.pathname.startsWith("/blogs");

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const handleHomeClick = () => navigate("/");

  const visibleNavItems = onBlogPage
    ? [{ icon: Home, label: "Home", section: "hero", onClick: handleHomeClick }]
    : navItems;

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex justify-center w-full">
        <div className="flex flex-col items-center px-2 sm:px-4 md:px-6 lg:px-8">
          {/* Tooltip */}
          <div className="mb-2 min-h-[24px]">
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm bg-white/80 dark:bg-black/80 text-black dark:text-white"
                >
                  {hovered === visibleNavItems.length
                    ? "Theme"
                    : hovered === visibleNavItems.length + 1
                      ? "CLI"
                      : visibleNavItems[hovered].label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dock */}
          <div
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full shadow-lg border transition-colors 
  backdrop-blur-sm bg-white/70 dark:bg-black/70 text-black dark:text-white border-gray-200 dark:border-gray-800
  scale-[0.8] sm:scale-95 md:scale-100 transition-transform duration-300"
          >
            {visibleNavItems.map((item, index) => {
              const content = item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent transition-colors hover:bg-blue-500/20 dark:hover:bg-blue-400/20"
                >
                  <motion.div
                    animate={{
                      scale: hovered === index ? 1.2 : 1,
                      y: hovered === index ? -6 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        hovered === index
                          ? "text-blue-500 dark:text-blue-400"
                          : "text-black dark:text-white"
                      }`}
                    />
                  </motion.div>
                </a>
              ) : onBlogPage ? (
                <div
                  key={index}
                  onClick={item.onClick}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent transition-colors hover:bg-blue-500/20 dark:hover:bg-blue-400/20"
                >
                  <motion.div
                    animate={{
                      scale: hovered === index ? 1.2 : 1,
                      y: hovered === index ? -6 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        hovered === index
                          ? "text-blue-500 dark:text-blue-400"
                          : "text-black dark:text-white"
                      }`}
                    />
                  </motion.div>
                </div>
              ) : (
                <ScrollLink
                  key={index}
                  to={item.section}
                  smooth
                  duration={500}
                  offset={-50}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: hovered === index ? 1.2 : 1,
                      y: hovered === index ? -6 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent transition-colors hover:bg-blue-500/20 dark:hover:bg-blue-400/20"
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        hovered === index
                          ? "text-blue-500 dark:text-blue-400"
                          : "text-black dark:text-white"
                      }`}
                    />
                  </motion.div>
                </ScrollLink>
              );

              return content;
            })}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              onMouseEnter={() => setHovered(visibleNavItems.length)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent transition-colors hover:bg-blue-500/20 dark:hover:bg-blue-400/20"
            >
              <motion.div
                animate={{
                  scale: hovered === visibleNavItems.length ? 1.2 : 1,
                  y: hovered === visibleNavItems.length ? -6 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="flex items-center justify-center w-full h-full"
              >
                {theme === "light" ? (
                  <Moon
                    className={`w-5 h-5 ${
                      hovered === visibleNavItems.length
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-black dark:text-white"
                    }`}
                  />
                ) : (
                  <Sun
                    className={`w-5 h-5 ${
                      hovered === visibleNavItems.length
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-black dark:text-white"
                    }`}
                  />
                )}
              </motion.div>
            </motion.button>

            {/* CLI toggle */}
            <motion.button
              onClick={() => setCliOpen((prev) => !prev)}
              onMouseEnter={() => setHovered(visibleNavItems.length + 1)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent transition-colors"
            >
              <motion.div
                animate={{
                  scale: hovered === visibleNavItems.length + 1 ? 1.2 : 1,
                  y: hovered === visibleNavItems.length + 1 ? -6 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="flex items-center justify-center w-full h-full"
              >
                <Terminal
                  className={`w-5 h-5 ${
                    hovered === visibleNavItems.length + 1
                      ? "text-green-500 dark:text-green-400"
                      : "text-black dark:text-white"
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* CLI */}
      {cliOpen && (
        <div className="fixed inset-0 z-40 p-4">
          <CLI />
        </div>
      )}
    </>
  );
};

export default Navbar;
