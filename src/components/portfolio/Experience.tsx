
import { useState } from "react";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const professional = [
  
  {
    role: "Full-Stack Developer",
    company: "Freelancing",
    period: "2025 — Present",
    points: [
      "Engaged with clients to gather requirements and identify business needs using a consultative approach.",
      "Designed, developed, and iterated on full-stack applications based on client feedback, ensuring alignment with expectations.",
      "Built and deployed a production-ready website for Panda Towing Ltd., managing the project from concept to launch.",
      "Troubleshot and resolved technical issues across frontend and backend systems, ensuring reliable performance.",
      "Integrated third-party APIs and services to enhance functionality and improve user experience.",
      "Maintained clear communication with clients throughout the development lifecycle, providing updates and technical guidance.",
    ],
  }
];


const otherWork = [
  {
    role: "Protection Services Officer",
    company: "Winnipeg Regional Health Authority",
    period: "Dec 2025 — Jan 2026",
    points: [
      "Delivered front-line support to staff and visitors, resolving inquiries in a professional and timely manner.",
      "Managed access control by issuing photo IDs and provisioning system access using internal ticketing systems.",
      "Monitored security and operational systems, ensuring compliance and accurate reporting.",
      "Responded to incidents and troubleshot issues to ensure timely resolution and safety.",
    ],
  },
  {
    role: "Front Desk Representative",
    company: "Manitoba Hydro",
    period: "May 2023 — Dec 2025",
    points: [
      "Provided high-volume customer support across in-person, phone, and email channels.",
      "Maintained accurate records across multiple systems with strong attention to detail.",
      "Resolved customer concerns efficiently, improving overall service experience.",
    ],
  },
  {
    role: "Peer Mentor",
    company: "University of Manitoba",
    period: "Jan 2023 — May 2023",
    points: [
      "Guided students by explaining complex information clearly and effectively.",
      "Built strong relationships through active listening and communication.",
    ],
  },
  {
    role: "Security Team Leader",
    company: "Winnipeg Art Gallery",
    period: "Aug 2020 — May 2023",
    points: [
      "Led team operations while maintaining high standards of service and safety.",
      "Resolved issues in high-pressure situations using strong problem-solving skills.",
      "Maintained logs and reports to support operational consistency.",
    ],
  },
];

const Timeline = ({ data }: any) => (
  <ol className="relative max-w-3xl mx-auto">
    <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-[2px] bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan" />

    {data.map((j: any, i: number) => (
      <li key={i} className="relative pl-12 sm:pl-16 pb-10 last:pb-0">
        <span className="absolute left-0 sm:left-2 top-1 grid place-items-center h-8 w-8 bg-background border-2 border-neon-pink text-neon-pink shadow-glow-pink">
          <Briefcase className="h-4 w-4" />
        </span>

        <div className="bg-card border-2 border-border hover:border-neon-pink hover:shadow-glow-pink p-5 transition-all duration-300">
          <p className="font-pixel text-[9px] text-neon-yellow mb-2">
            {j.period}
          </p>

          <h3 className="font-pixel text-xs sm:text-sm">{j.role}</h3>

          <p className="mt-1 font-mono-arcade text-xl text-neon-cyan">
            @ {j.company}
          </p>

          <ul className="mt-4 space-y-2">
            {j.points.map((p: string) => (
              <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-neon-pink font-pixel text-[10px] mt-1">
                  ▸
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ol>
);

export const Experience = () => {
  const [activeTab, setActiveTab] = useState<"pro" | "other">("pro");

  return (
    <section id="experience" className="py-24">
      <div className="container">

        <SectionHeading
          level="STAGE 04"
          title="WORK EXPERIENCE"
          color="pink"
        />

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("pro")}
            className={`px-4 py-2 border-2 transition-all font-pixel text-xs
              ${
                activeTab === "pro"
                  ? "border-neon-pink text-neon-pink shadow-glow-pink"
                  : "border-border text-muted-foreground"
              }`}
          >
            Professional
          </button>

          <button
            onClick={() => setActiveTab("other")}
            className={`px-4 py-2 border-2 transition-all font-pixel text-xs
              ${
                activeTab === "other"
                  ? "border-neon-cyan text-neon-cyan shadow-glow-cyan"
                  : "border-border text-muted-foreground"
              }`}
          >
            Other Work
          </button>
        </div>

        {/* CONDITIONAL RENDERING */}
        {activeTab === "pro" && <Timeline data={professional} />}
        {activeTab === "other" && <Timeline data={otherWork} />}

      </div>
    </section>
  );
};