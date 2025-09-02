import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export const Footer = () => {
  // Debugging: Log the current theme
  if (typeof window !== "undefined") {
    console.log(
      `Footer rendered with theme: ${
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      }`
    );
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 px-4 lg:px-20 bg-transparent"
    >
      {/* Match the max-width with TechStack */}
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-2xl font-bold text-foreground mb-5 tracking-tight text-left"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-text-dim text-lg leading-relaxed text-left"
        >
          Always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <Button
            size="lg"
            className="bg-blue-500 text-foreground hover:bg-blue-600 transition-all duration-300 font-medium px-8 tracking-wide flex items-center justify-center gap-2"
            asChild
          >
            <a
              href="https://x.com/Anuraaaag7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-text-dim text-sm pt-4 mt-4"
        ></motion.p>
      </div>
    </motion.footer>
  );
};
