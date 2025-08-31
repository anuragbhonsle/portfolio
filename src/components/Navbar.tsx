import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Home, Sun, Moon, User, FileText, Briefcase } from "lucide-react";

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
  }, // new button
];

const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "dark"
  );

  const location = useLocation();
  const navigate = useNavigate();
  const onBlogPage = location.pathname.startsWith("/blogs");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleHomeClick = () => navigate("/");

  // Show only Home + Theme on blog page
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
              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/80 to-indigo-600/80 text-white text-xs font-medium shadow-lg backdrop-blur-sm"
            >
              {hovered === visibleNavItems.length
                ? "Theme"
                : visibleNavItems[hovered].label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dock */}
      <div className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full shadow-lg border transition-colors bg-white text-black border-gray-200 dark:bg-black dark:text-white dark:border-gray-800">
        {visibleNavItems.map((item, index) =>
          item.href ? (
            // For "View Resume" link
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
                      ? "text-blue-500"
                      : theme === "light"
                      ? "text-black"
                      : "text-white"
                  }`}
                />
              </motion.div>
            </a>
          ) : onBlogPage ? (
            <div
              key={index}
              onClick={item.onClick}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
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
                      ? "text-blue-500"
                      : theme === "light"
                      ? "text-black"
                      : "text-white"
                  }`}
                />
              </motion.div>
            </div>
          ) : (
            <ScrollLink
              key={index}
              to={item.section}
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
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
                      ? "text-blue-500"
                      : theme === "light"
                      ? "text-black"
                      : "text-white"
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
            <Moon className="w-5 h-5 text-black" />
          ) : (
            <Sun className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
