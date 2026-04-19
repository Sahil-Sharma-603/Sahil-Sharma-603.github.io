import { Heart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    role: "Tour Guide",
    org: "Science Rendezvous",
    period: "May 2024",
    desc: "Led guided tours for middle school students, explaining scientific concepts in an engaging and accessible manner.",
  },
  {
    role: "Tax Filing Volunteer",
    org: "UMSU",
    period: "Apr 2025",
    desc: "Assisted individuals with preparing and filing tax returns, ensuring accuracy and compliance.",
  },
  {
    role: "Volunteer",
    org: "Sikh Community Kitchen",
    period: "Apr 2026",
    desc: "Collaborated with volunteers to prepare and serve meals, supporting community members in a fast-paced environment.",
  },
];

export const Volunteer = () => (
  <section id="volunteer" className="py-24">
    <div className="container">
      <SectionHeading level="BONUS STAGE" title="VOLUNTEER EXPERIENCE" color="pink" />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.role}
            className="group bg-card border-2 border-border hover:border-neon-purple p-6 transition-all hover:-translate-y-1"
          >
            <div className="grid place-items-center h-12 w-12 bg-neon-pink/10 border border-neon-pink/40 text-neon-pink mb-4 group-hover:animate-pulse">
              <Heart className="h-5 w-5" />
            </div>
            <p className="font-pixel text-[9px] text-neon-yellow mb-2">{it.period}</p>
            <h3 className="font-pixel text-xs text-foreground leading-relaxed">{it.role}</h3>
            <p className="mt-1 font-mono-arcade text-lg text-neon-cyan">{it.org}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
