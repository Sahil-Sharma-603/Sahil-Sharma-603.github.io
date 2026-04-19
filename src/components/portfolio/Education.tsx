import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Systems",
  "Human Computer Interaction",
  "Artificial Intelligence",
  "Software Engineering",

];

export const Education = () => (
  <section id="education" className="py-24 relative">
    <div className="container">
      <SectionHeading level="STAGE 02" title="EDUCATION" color="cyan" />
      <div className="max-w-3xl mx-auto">
        <article className="group relative bg-card border-2 border-border hover:border-neon-cyan p-6 transition-all hover:-translate-y-1 hover:shadow-glow-cyan">
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-12 w-12 bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan shrink-0">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[9px] text-neon-yellow mb-2">Sept 2020 — Oct 2025</p>
              <h3 className="font-pixel text-xs sm:text-sm text-foreground leading-relaxed">
                Bachelor of Science in Computer Science
              </h3>
              <p className="mt-2 font-mono-arcade text-2xl text-neon-cyan">University of Manitoba</p>

              <p className="mt-4 font-pixel text-[10px] text-neon-pink">▸ MINOR</p>
              <p className="mt-1 text-sm text-muted-foreground">Statistics, Psychology</p>

              <p className="mt-4 font-pixel text-[10px] text-neon-pink">▸ RELEVANT COURSEWORK</p>
              <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {coursework.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-neon-cyan font-pixel text-[10px] mt-1">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);
