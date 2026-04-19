import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    title: "LANGUAGES & FRAMEWORKS",
    color: "pink" as const,
    skills: ["Java", "JavaScript", "ReactJS", "Node.js", "Next.js", "C", "C++", "R", "SQL", "Python", "Processing", "CSS"],
  },
  {
    title: "TOOLS",
    color: "cyan" as const,
    skills: ["Git","Github", "Azure DevOps", "AWS", "Google Cloud", "Docker", "Postman", "CI/CD", "Agile Methodologies"],
  },
  {
    title: "SOFTWARE & ANALYTICS",
    color: "yellow" as const,
    skills: ["IntelliJ IDEA", "VS Code", "Android Studio", "RStudio", "CLion", "Power BI", "REST APIs", "Data Visualization", "Web Scrapping", "Data Analysis", "Power Automate"],
  },
  {
    title: "DATABASES",
    color: "green" as const,
    skills: ["MongoDB", "DynamoDB", "SQLite", "Neo4j"],
  },
];

const colorText = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  yellow: "text-neon-yellow",
  green: "text-neon-green",
};

const colorBorder = {
  pink: "border-neon-pink/40 hover:border-neon-pink hover:shadow-glow-pink",
  cyan: "border-neon-cyan/40 hover:border-neon-cyan hover:shadow-glow-cyan",
  yellow: "border-neon-yellow/40 hover:border-neon-yellow hover:shadow-glow-yellow" ,
  green: "border-neon-green/40 hover:border-neon-green hover:shadow-glow-green",
};

const colorChipBg = {
  pink: "bg-neon-pink/5 border-neon-pink/30 text-neon-pink hover:bg-neon-pink/10",
  cyan: "bg-neon-cyan/5 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10",
  yellow: "bg-neon-yellow/5 border-neon-yellow/30 text-neon-yellow hover:bg-neon-yellow/10",
  green: "bg-neon-green/5 border-neon-green/30 text-neon-green hover:bg-neon-green/10",
};

export const Skills = () => (
  <section id="skills" className="py-24 bg-muted/20 border-y border-border">
    <div className="container">
      <SectionHeading level="STAGE 03" title="TECHNICAL SKILLS" color="yellow" />
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className={`bg-card border-2 p-6 transition-all ${colorBorder[g.color]}`}
          >
            <h3 className={`font-pixel text-xs mb-5 ${colorText[g.color]}`}>
              ▸ {g.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className={`font-mono-arcade text-lg px-3 py-1 border transition-colors ${colorChipBg[g.color]}`}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
