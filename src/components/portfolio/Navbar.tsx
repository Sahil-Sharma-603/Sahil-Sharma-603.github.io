
import { Download, Gamepad2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Start" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#volunteer", label: "Volunteer" },
];

// Smooth scroll helper
const scrollToSection = (id: string) => {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-arcade-dark bg-opacity-80 backdrop-blur-sm text-arcade-text-light shadow-md border-b border-arcade-neon-green"
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <Gamepad2 className="h-6 w-6 text-neon-pink group-hover:rotate-12 transition-transform" />
            <span className="font-pixel text-xs sm:text-sm text-neon-pink text-glow-pink">
              Sahil.dev
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className="font-pixel text-[10px] px-3 py-2 rounded-sm text-foreground/80 hover:text-neon-cyan transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="/Sahil_Sharma_Resume.pdf"
              // download
              target="_blank"
              className="group inline-flex items-center gap-2 bg-neon-pink text-primary-foreground font-pixel text-[10px] sm:text-xs px-3 sm:px-4 py-2 sm:py-3 shadow-pixel-cyan hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:animate-bounce" />
              <span className="hidden sm:inline">RESUME</span>
              <span className="sm:hidden">CV</span>
            </a>

            {/* Mobile menu */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden font-pixel text-[10px] text-neon-cyan border border-neon-cyan/50 px-2 py-2"
            >
              {open ? "X" : "≡"}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <ul className="lg:hidden bg-background/95 backdrop-blur border-t border-border container py-3 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                    setOpen(false);
                  }}
                  className="block font-pixel text-[10px] px-3 py-3 text-foreground/80 hover:text-neon-cyan"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </motion.nav>
  );
};