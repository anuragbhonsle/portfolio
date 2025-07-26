import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/anuragbhonsle", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anurag-bhonsle-4b576524a/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Anuraaaag7", label: "Twitter" },
    { icon: Mail, href: "mailto:anuragkbhonsle@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 lg:px-20 border-t border-border"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's build something amazing together
            </h2>
            <p className="text-lg text-text-dim max-w-2xl mx-auto">
              Always excited to work on interesting projects. Feel free to reach
              out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-medium px-8"
              asChild
            >
              <a href="mailto:hello@anurag.dev">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:shadow-glow transition-all duration-300 font-medium px-8"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-card rounded-full border border-border hover:border-primary flex items-center justify-center hover:shadow-glow transition-all duration-300 group"
              >
                <link.icon className="w-5 h-5 text-text-dim group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <p className="text-text-dim text-sm">
              © 2024 Anurag. Built with React.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
