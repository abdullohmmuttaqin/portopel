"use client";

import { useState, useEffect, useRef } from "react";
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
  role: "Informatics Student & Software Project Contributor",
  organization:
    "Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap",
  period: "2022 – Present",
  description:
    "Contributing to academic and collaborative software projects throughout the Informatics program, with hands-on experience in system analysis, database design, software development, testing, and version control.",
  skills: ["System Analysis", "System Architecture", "Database Design", "Git"],
},
];

export default function Experience() {
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Observer untuk judul Experience
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Listener kalkulasi tinggi garis sesuai scroll layar
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Garis mulai tumbuh ketika titik atas timeline menyentuh 70% tinggi viewport
      const startPoint = windowHeight * 0.7;
      const totalHeight = rect.height;

      const currentPosition = startPoint - rect.top;
      const progress = (currentPosition / totalHeight) * 100;

      // Pembatasan nilai antara 0% sampai 100%
      const clampedProgress = Math.min(Math.max(progress, 0), 100);
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan sekali di awal load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-6 bg-[#0B132B] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
            {"// CAREER & JOURNEY"}
          </p>
          
          <h2 className="relative inline-block font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white pb-2">
            Experience
            <span
              className={`absolute bottom-0 left-0 h-[3px] bg-[#39FF88] transition-all duration-500 ease-out shadow-[0_0_12px_#39FF88] ${
                isInView ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative ml-3 md:ml-6 space-y-8 pl-6 md:pl-8">
          
          {/* Garis Dasar (Track Abu-abu) */}
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-white/10" />

          {/* Garis Hijau Dynamic (Ikut Scroll) */}
          <div
            className="absolute left-0 top-2 w-[2px] bg-[#39FF88] shadow-[0_0_10px_#39FF88] transition-all duration-75 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Dot (Menyala Hijau saat terlewati garis) */}
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  scrollProgress > (index / (experiences.length - 1 || 1)) * 80
                    ? "bg-[#39FF88] border-[#39FF88] scale-110 shadow-[0_0_10px_#39FF88]"
                    : "bg-[#1C2541] border-[#39FF88]/40"
                }`}
              />

              {/* Card Experience */}
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

                {/* Skill Badges */}
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