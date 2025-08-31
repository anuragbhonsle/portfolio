import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Layers,
  Moon,
  Sun,
} from "lucide-react"; // swapped Grid → Layers for cleaner look
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { icon: Home, section: "hero", label: "Home" },
  { icon: User, section: "about", label: "About" },
  { icon: FileText, section: "experience", label: "Experience" },
  { icon: Briefcase, section: "projects", label: "Projects" },
  { icon: Layers, section: "techstack", label: "Tech Stack" },
];

const Navbar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

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
              className="px-3 py-1 rounded-full 
  bg-gradient-to-r from-blue-600/80 to-indigo-600/80 
  text-white dark:text-white text-black 
  text-xs font-medium shadow-lg backdrop-blur-sm"
            >
              <motion.span
                key={hovered} // only text changes, not the whole box
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {hovered === navItems.length
                  ? "Theme"
                  : navItems[hovered].label}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dock */}
      <div
        className="flex items-center justify-center space-x-2 px-4 py-2 
        rounded-full shadow-lg border transition-colors
        bg-white text-black border-gray-200 
        dark:bg-black dark:text-white dark:border-gray-800"
      >
        {/* Section Buttons */}
        {navItems.map((item, index) => (
          <ScrollLink
            key={index}
            to={item.section}
            smooth={true}
            duration={500}
            offset={-70}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              animate={{
                scale: hovered === index ? 1.2 : 1,
                y: hovered === index ? -6 : 0,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer 
                bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 
                transition-colors"
            >
              <item.icon
                className={`w-5 h-5 ${
                  hovered === index ? "text-blue-500" : "text-inherit"
                }`}
              />
            </motion.div>
          </ScrollLink>
        ))}

        {/* Theme Toggle */}
        <motion.button
          type="button"
          onClick={toggleTheme}
          onMouseEnter={() => setHovered(navItems.length)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            scale: hovered === navItems.length ? 1.2 : 1,
            y: hovered === navItems.length ? -6 : 0,
          }}
          whileTap={{ rotate: 180 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer 
    bg-transparent hover:bg-blue-500/20 dark:hover:bg-blue-400/20 transition-colors"
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
