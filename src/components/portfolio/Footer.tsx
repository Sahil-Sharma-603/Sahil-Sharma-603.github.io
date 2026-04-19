import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const handlePressStart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#hero")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container py-10 flex flex-col items-center gap-4 text-center">
        <p className="font-pixel text-[10px] text-neon-pink text-glow-pink animate-blink">
          ◆ GAME OVER ◆
        </p>
        <a
          href="#hero"
          onClick={handlePressStart}
          className="font-mono-arcade text-xl text-neon-cyan hover:text-neon-yellow transition-colors cursor-pointer"
        >
          &gt; PRESS START TO PLAY AGAIN
        </a>
        <div className="flex gap-3">
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
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} Sahil Sharma — Built with React, Tailwind & ❤
        </p>
      </div>
    </footer>
  );
};
