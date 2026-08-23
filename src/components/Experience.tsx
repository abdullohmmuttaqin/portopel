import { Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack & Mobile Software Developer",
    organization: "Independent & Personal Projects",
    period: "2023 - Present",
    description:
      "Designing and developing cross-platform applications including mobile vehicle bookkeeping (React Native), web e-commerce management (PHP/MySQL), and desktop inventory software (Java Swing).",
    skills: ["React Native", "Next.js", "PHP", "Java", "SQLite"],
  },
  {
    role: "Computer Science Student & Project Lead",
    organization: "Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap",
    period: "2022 - Present",
    description:
      "Building robust software architecture for academic research and practical coursework. Collaborating on system analysis, database schema design, and full-stack integration.",
    skills: ["System Architecture", "Database Design", "Git Workflow"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#0B132B] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
            {"// CAREER & JOURNEY"}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-8 pl-6 md:pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#1C2541] border-2 border-[#39FF88] group-hover:scale-125 transition-transform" />

              {/* Card Experience dengan Efek Membal */}
              <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-mono text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#39FF88] bg-[#39FF88]/10 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm font-medium text-[#94A3B8]">
                  {exp.organization}
                </p>

                <p className="text-sm text-[#94A3B8]/80 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Skill Badges dengan Efek Membal */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0B132B] text-[#94A3B8] border border-white/5 active:scale-95 transition-transform duration-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}