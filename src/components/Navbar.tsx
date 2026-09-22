import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink, scroller } from "react-scroll";

import {
  Home,
  Sun,
  Moon,
  User,
  FileText,
  Briefcase,
  Terminal,
  BookOpen,
  FolderKanban,
  Mail,
  Code,
  Search,
  CornerDownLeft,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

import CLI from "./cli";

const RESUME_URL = "/Anurag_Bhonsle_Full_Stack_Developer.pdf";

const barLinks = [
  { section: "hero", label: "Home" },
  { section: "projects", label: "Projects" },
  { section: "blogs", label: "Blogs" },
  { section: "footer", label: "Contact" },
];

const isMac =
  typeof navigator !== "undefined" && /mac/i.test(navigator.userAgent);

const modKey = isMac ? "⌘" : "Ctrl";

/* ---------------- Command palette ---------------- */

type PaletteItem = {
  id: string;
  group: string;
  label: string;
  icon: LucideIcon;
  hint?: string;
  run: () => void;
};

const CommandPalette = ({
  items,
  onClose,
}: {
  items: PaletteItem[];
  onClose: () => void;
}) => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);

  const q = query.trim().toLowerCase();

  const filtered = q
    ? items.filter(
        (i) =>
          i.label.toLowerCase().includes(q) ||
          i.group.toLowerCase().includes(q),
      )
    : items;

  const select = (item?: PaletteItem) => {
    if (!item) return;

    onClose();
    item.run();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();

        setActive((a) => (filtered.length ? (a + 1) % filtered.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();

        setActive((a) =>
          filtered.length ? (a - 1 + filtered.length) % filtered.length : 0,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        select(filtered[active]);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [filtered, active]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const groups: Record<string, { item: PaletteItem; index: number }[]> = {};

  filtered.forEach((item, index) => {
    (groups[item.group] ||= []).push({ item, index });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-background/60 px-3 pt-[12vh] backdrop-blur-md sm:pt-[15vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
          <Search className="h-4 w-4 shrink-0 text-text-dim" />

          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Search pages and sections..."
            className="w-full bg-transparent text-sm sm:text-base text-foreground outline-none placeholder:text-text-dim"
          />

          <kbd className="shrink-0 rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-text-dim">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-text-dim">
              No results for “{query}”
            </p>
          )}

          {Object.entries(groups).map(([group, rows]) => (
            <div key={group} className="mb-1">
              <p className="px-3 pb-1 pt-3 text-[0.65rem] font-semibold uppercase tracking-widest text-text-dim">
                {group}
              </p>

              {rows.map(({ item, index }) => {
                const isActive = index === active;

                return (
                  <button
                    key={item.id}
                    type="button"
                    data-index={index}
                    onMouseMove={() => setActive(index)}
                    onClick={() => select(item)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isActive
                        ? "bg-foreground/5 text-foreground"
                        : "text-text-dim"
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />

                    <span className="flex-1">{item.label}</span>

                    {item.hint && (
                      <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[0.6rem] text-text-dim">
                        {item.hint}
                      </span>
                    )}

                    {isActive && !item.hint && (
                      <CornerDownLeft className="h-3.5 w-3.5 text-text-dim" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------- Navbar ---------------- */

const linkClass =
  "cursor-pointer px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-medium text-text-dim transition-colors hover:text-foreground select-none whitespace-nowrap";

const iconButtonClass =
  "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-text-dim transition-colors hover:text-foreground";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [cliOpen, setCliOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");

      return saved === "light" || saved === "dark" ? saved : "light";
    }

    return "light";
  });

  const location = useLocation();
  const navigate = useNavigate();

  const onBlogPage = location.pathname.startsWith("/blogs");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  /* Close mobile menu when route changes */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Command palette shortcut */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* CLI Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && cliOpen) {
        setCliOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [cliOpen]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const scrollToSection = (section: string) => {
    const scroll = () =>
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });

    if (onBlogPage) {
      navigate("/");
      setTimeout(scroll, 300);
    } else {
      scroll();
    }
  };

  const handleMobileNavigation = (section: string) => {
    setMobileOpen(false);
    scrollToSection(section);
  };

  const paletteItems: PaletteItem[] = [
    {
      id: "home",
      group: "Go to",
      label: "Home",
      icon: Home,
      run: () => {
        navigate("/");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },

    {
      id: "resume",
      group: "Go to",
      label: "Resume",
      icon: FileText,
      run: () => window.open(RESUME_URL, "_blank", "noopener,noreferrer"),
    },

    ...(
      [
        {
          section: "about",
          label: "About",
          icon: User,
        },
        {
          section: "techstack",
          label: "Skills",
          icon: Code,
        },
        {
          section: "projects",
          label: "Projects",
          icon: FolderKanban,
        },
        {
          section: "experience",
          label: "Experience",
          icon: Briefcase,
        },
        {
          section: "blogs",
          label: "Blogs",
          icon: BookOpen,
        },
        {
          section: "footer",
          label: "Contact",
          icon: Mail,
        },
      ] as const
    ).map(({ section, label, icon }) => ({
      id: `section-${section}`,
      group: "Jump to section",
      label,
      icon,
      hint: "on home",
      run: () => scrollToSection(section),
    })),

    {
      id: "theme",
      group: "Actions",
      label:
        theme === "light" ? "Switch to dark theme" : "Switch to light theme",
      icon: theme === "light" ? Moon : Sun,
      run: toggleTheme,
    },

    {
      id: "cli",
      group: "Actions",
      label: cliOpen ? "Close CLI" : "Open CLI",
      icon: Terminal,
      run: () => setCliOpen((prev) => !prev),
    },
  ];

  if (!mounted) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 ">
        {/* YOUR ORIGINAL WIDTHS — UNTOUCHED */}
        <div className="mx-auto w-full sm:max-w-5xl px-[2rem] sm:[5rem] md:6rem lg:px-[11.5rem]">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="pointer-events-auto flex w-full items-center justify-between gap-3"
          >
            {/* LEFT GROUP */}
            <div className="flex items-center">
              {/* DESKTOP NAV */}
              <div className="hidden sm:flex items-center gap-0.5 sm:gap-1 rounded-full border border-border bg-background/80 px-2.5 py-1.5 shadow-sm backdrop-blur-xl overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {barLinks.map((item) =>
                  onBlogPage ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToSection(item.section)}
                      className={linkClass}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <ScrollLink
                      key={item.label}
                      to={item.section}
                      smooth
                      duration={500}
                      offset={-80}
                      className={linkClass}
                    >
                      {item.label}
                    </ScrollLink>
                  ),
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-text-dim shadow-sm backdrop-blur-xl transition-colors hover:text-foreground sm:hidden"
              >
                {mobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* RIGHT GROUP */}
            <div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-background/80 px-2.5 py-1 shadow-sm backdrop-blur-xl">
              {/* CLI */}
              <button
                type="button"
                onClick={() => setCliOpen((prev) => !prev)}
                aria-label="Toggle CLI"
                title="CLI Terminal"
                className="px-1 font-mono text-xs sm:text-sm font-semibold text-text-dim transition-colors hover:text-foreground"
              >
                &gt;_
              </button>

              <span className="h-4 w-px bg-border/60 shrink-0" />

              {/* THEME */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title="Theme"
                className={iconButtonClass}
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </button>

              {/* COMMAND PALETTE */}
              <button
                type="button"
                onClick={() => setPaletteOpen(true)}
                aria-label="Open command menu"
                className="hidden sm:flex h-8 cursor-pointer items-center gap-1 rounded-full px-2 font-mono text-xs text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                <Search className="h-3.5 w-3.5" />

                <span>{modKey} K</span>
              </button>
            </div>
          </motion.nav>

          {/* MOBILE DROPDOWN */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.18,
                  ease: "easeOut",
                }}
                className="pointer-events-auto mt-2 overflow-hidden rounded-2xl border border-border bg-background/90 p-2 shadow-xl backdrop-blur-xl sm:hidden"
              >
                {/* HOME */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Home className="h-4 w-4" />
                  Home
                </button>

                {/* RESUME */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);

                    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </button>

                <div className="my-1 h-px bg-border/60" />

                {/* PROJECTS */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigation("projects")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <FolderKanban className="h-4 w-4" />
                  Projects
                </button>

                {/* EXPERIENCE */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigation("experience")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Briefcase className="h-4 w-4" />
                  Experience
                </button>

                {/* BLOGS */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigation("blogs")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <BookOpen className="h-4 w-4" />
                  Blogs
                </button>

                {/* CONTACT */}
                <button
                  type="button"
                  onClick={() => handleMobileNavigation("footer")}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </button>

                <div className="my-1 h-px bg-border/60" />

                {/* COMMAND MENU */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-text-dim transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  <Search className="h-4 w-4" />
                  Command Menu
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* COMMAND PALETTE */}
      <AnimatePresence>
        {paletteOpen && (
          <CommandPalette
            key="palette"
            items={paletteItems}
            onClose={() => setPaletteOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* CLI MODAL */}
      <AnimatePresence>
        {cliOpen && (
          <motion.div
            key="cli"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setCliOpen(false);
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 8,
              }}
              transition={{ duration: 0.2 }}
              onMouseDown={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <CLI />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
