"use client";

import { useState, useEffect, useRef } from "react";
import { Code2, Layout, Database, Wrench, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["HTML/CSS","JavaScript", "TypeScript", "PHP", "Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: ["Next.js", "React.js", "React Native", "Expo", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Databases & Architecture",
    icon: Database,
    skills: ["MySQL", "SQLite", "REST API", "Database Schema Design", "Clean Architecture"],
  },
  {
    title: "Design & Visual Computing",
    icon: Palette,
    skills: [
      "Figma",
      "CorelDRAW",
      "Canva",
      "UI/UX Wireframing",
      "Prototyping",
      "Computer Graphics Fundamentals",
    ],
  },
  {
    title: "Tools & Environment",
    icon: Wrench,
    skills: ["Git & GitHub", "VS Code", "Vercel", "Postman", "npm/pnpm"],
  },
];

export default function Skills() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-[#0B132B] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
            {"// SKILLS & TECHNOLOGIES"}
          </p>

          {/* Judul H2 dengan Garis Bawah Aktif Otomatis */}
          <h2 className="relative inline-block font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white pb-2">
            Technical Expertise
            <span
              className={`absolute bottom-0 left-0 h-[3px] bg-[#39FF88] transition-all duration-500 ease-out shadow-[0_0_12px_#39FF88] ${
                isInView ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#0B132B] text-[#94A3B8] border border-white/5 hover:text-[#39FF88] hover:border-[#39FF88]/30 active:scale-95 transition-all duration-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}