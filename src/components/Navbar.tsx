import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Home, Sun, Moon, User, FileText, Briefcase } from "lucide-react";

// Nav items
const navItems = [
  { icon: Home, section: "hero", label: "Home" },
  { icon: User, section: "about", label: "About" },
  { icon: FileText, section: "experience", label: "Experience" },
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

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  const location = useLocation();
  const navigate = useNavigate();
  const onBlogPage = location.pathname.startsWith("/blogs");

  // Apply theme class to html element
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    console.log(
      `Theme set to: ${theme}, document classes: ${document.documentElement.className}`
    );
  }, [theme]);

  // Sync with system theme if no preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log(`Toggling theme to: ${newTheme}`);
      return newTheme;
    });
  };

  const handleHomeClick = () => navigate("/");

  const visibleNavItems = onBlogPage
    ? [{ icon: Home, label: "Home", section: "hero", onClick: handleHomeClick }]
    : navItems;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
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
                : visibleNavItems[hovered].label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dock */}
      <div className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full shadow-lg border transition-colors backdrop-blur-sm bg-white/70 dark:bg-black/70 text-black dark:text-white border-gray-200 dark:border-gray-800">
        {visibleNavItems.map((item, index) =>
          item.href ? (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
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
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
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
          )
        )}

        {/* Theme toggle */}
        <motion.button
          onClick={toggleTheme}
          onMouseEnter={() => setHovered(visibleNavItems.length)}
          onMouseLeave={() => setHovered(null)}
          className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <Sun className="w-5 h-5 text-black dark:text-white" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
