import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";



const projects = [
  {
    name: "BrainByte AI",
    tagline: "AI-powered quiz platform for law enforcement preparation",
    desc: "Built a full-stack AI quiz application that generates dynamic questions based on selected categories. Implemented secure authentication and real-time question delivery, enabling users to assess and track their preparation effectively.",
    stack: ["React (Vite)", "FastAPI", "Python", "Clerk Auth", "REST APIs"],
    score: "AI",
    color: "pink" as const,
    github: "https://github.com/Sahil-Sharma-603/BrainByte-AI",
    live: ""
  },
  {
    name: "Money Lens",
    tagline: "Full-stack personal finance tracker with real-time insights",
    desc: "Developed a financial tracking web app that integrates with Plaid APIs to securely import and analyze transactions. Features data visualization, expense categorization, and goal tracking, built using modern full-stack technologies and CI/CD practices.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Docker", "CI/CD"],
    score: "DATA",
    color: "cyan" as const,
    github: "https://github.com/Sahil-Sharma-603/Money-Lens-App",
    live: "",
  },
  {
    name: "NBA Database",
    tagline: "Relational database system for sports analytics",
    desc: "Designed and implemented a normalized SQL database from raw NBA datasets. Built data pipelines using Python and developed a Java-based interface to execute analytical queries and extract insights efficiently.",
    stack: ["SQL", "Python", "Java", "MySQL", "Data Modeling"],
    score: "DB",
    color: "yellow" as const,
    github: "https://github.com/Sahil-Sharma-603/NBA-Database",
    live: "https://www.youtube.com/watch?v=Q10w5O0aXE4",
  },
  {
    name: "Adventure Works Dashboard",
    tagline: "Power BI sales analytics dashboard",
    desc: "Created an interactive Power BI dashboard analyzing sales, customer segmentation, and revenue trends. Applied data modeling, DAX calculations, and visualization techniques to deliver actionable business insights.",
    stack: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    score: "BI",
    color: "green" as const,
    github: "https://github.com/Sahil-Sharma-603/Adventure_Work_PowerBI_Project",
    live: "",

  },
];


const accent = {
  pink: { border: "border-neon-pink", text: "text-neon-pink", shadow: "hover:shadow-glow-pink" },
  cyan: { border: "border-neon-cyan", text: "text-neon-cyan", shadow: "hover:shadow-glow-cyan" },
  yellow: { border: "border-neon-yellow", text: "text-neon-yellow", shadow: "hover:shadow-[0_0_24px_hsl(var(--neon-yellow)/0.5)]" },
  green: { border: "border-neon-green", text: "text-neon-green", shadow: "hover:shadow-[0_0_24px_hsl(var(--neon-green)/0.5)]" },
};

export const Projects = () => (
  <section id="projects" className="py-24 bg-muted/20 border-y border-border">
    <div className="container">
      <SectionHeading
        level="STAGE 05"
        title="PROJECTS"
        subtitle="Select a cartridge to load"
        color="green"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => {
          const a = accent[p.color];
          return (
            <article
              key={p.name}
              className={`group bg-card border-2 border-border p-6 transition-all hover:-translate-y-1 ${a.border.replace("border-", "hover:border-")} ${a.shadow}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className={`font-pixel text-sm ${a.text}`}>{p.name}</h3>
                <div className="text-right shrink-0">
                  <p className="font-pixel text-[8px] text-muted-foreground">HI-SCORE</p>
                  <p className="font-mono-arcade text-xl text-neon-yellow">{p.score}</p>
                </div>
              </div>
              <p className="font-mono-arcade text-lg text-foreground/80">{p.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="font-pixel text-[8px] px-2 py-1.5 bg-background border border-border text-foreground/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">

                {/* PLAY button (only if live exists and not empty) */}
                {p.live && p.live !== "" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-pixel text-[9px] px-3 py-2 border ${a.border} ${a.text} hover:bg-foreground/5`}
                  >
                    <ExternalLink className="h-3 w-3" /> PLAY
                  </a>
                )}

                {/* GitHub button */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-pixel text-[9px] px-3 py-2 border border-border text-foreground/70 hover:text-foreground"
                >
                  <Github className="h-3 w-3" /> CODE
                </a>

              </div>

            </article>
          );
        })}
      </div>
    </div>
  </section>
);
