import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ROLES = [
  'Computer Science Student',
    'Software Engineer',
    'Full-Stack Developer',
    'Frontend Specialist',
    'Data Analyst',
    'Tech Enthusiast',
    'Data Engineer',
];

const useTypewriter = (words: string[], typeMs = 90, eraseMs = 45, holdMs = 1400) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    const word = words[i % words.length];
    let t: number;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = window.setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = window.setTimeout(() => setPhase("erasing"), holdMs);
      }
    } else if (phase === "erasing") {
      if (text.length > 0) {
        t = window.setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
      } else {
        setI((n) => n + 1);
        setPhase("typing");
        return;
      }
    }
    return () => clearTimeout(t!);
  }, [text, phase, i, words, typeMs, eraseMs, holdMs]);

  return text;
};

export const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
>
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden scanlines"
    >
      {/* Pixel grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating pixel sprites */}
      <div aria-hidden className="absolute top-32 left-8 text-3xl animate-float">👾</div>
      <div aria-hidden className="absolute bottom-24 right-10 text-3xl animate-float" style={{ animationDelay: "1s" }}>🕹️</div>
      <div aria-hidden className="absolute top-40 right-1/4 text-2xl animate-float" style={{ animationDelay: "2s" }}>⭐</div>

      <div className="container relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-neon-cyan/40 bg-neon-cyan/5 px-3 py-1.5 mb-6">
            <span className="h-2 w-2 bg-neon-green rounded-full animate-pulse" />
            <span className="font-pixel text-[9px] sm:text-[10px] text-neon-cyan tracking-widest">
              PLAYER 1 READY
            </span>
          </div>

          <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl leading-[1.4] text-foreground">
            <span className="block text-neon-pink text-glow-pink">HI, I&apos;M</span>
            <span className="block mt-3 text-neon-yellow text-glow-yellow">SAHIL SHARMA</span>
          </h1>

          <p className="mt-6 font-mono-arcade text-2xl sm:text-3xl text-neon-cyan min-h-[2.25rem]">
            &gt; {role}
            <span className="animate-blink">_</span>
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Seeking full-time opportunities in software engineering to apply technical skills, solve real-world problems, and contribute to impactful, high-quality solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-neon-pink text-primary-foreground font-pixel text-[10px] sm:text-xs px-5 py-3 shadow-pixel-cyan hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              ▶ INSERT COIN
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-neon-cyan text-neon-cyan font-pixel text-[10px] sm:text-xs px-5 py-3 hover:bg-neon-cyan hover:text-secondary-foreground transition-colors"
            >
              VIEW HIGH SCORES
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            {[
              { icon: Github, href: "https://github.com/Sahil-Sharma-603", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/cs-sahil-sharma/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sasharma603@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 grid place-items-center border border-border text-foreground/70 hover:text-neon-pink hover:border-neon-pink hover:shadow-glow-pink transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Arcade cabinet card */}
        <div className="relative mx-auto max-w-sm w-full animate-flicker">
          <div className="bg-card border-2 border-neon-purple p-1 shadow-glow-pink">
            <div className="bg-background/80 border border-neon-purple/60 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-pixel text-[9px] text-neon-yellow">STATS</span>
                <span className="font-pixel text-[9px] text-neon-cyan animate-blink">●REC</span>
              </div>
              <dl className="space-y-3 font-mono-arcade text-xl">
                {[
                  ["LEVEL", "27"],
                  ["XP", "999,999"],
                  ["CLASS", "Engineer"],
                  ["LOCATION", "Earth"],
                  ["COFFEE/DAY", "∞"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-dashed border-border/60 pb-1">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-neon-green">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5">
                <div className="flex justify-between font-pixel text-[8px] mb-1">
                  <span className="text-muted-foreground">HP</span>
                  <span className="text-neon-pink">100/100</span>
                </div>
                <div className="h-3 bg-muted border border-border">
                  <div className="h-full w-full bg-gradient-to-r from-neon-pink via-neon-yellow to-neon-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.section>
  );
};
