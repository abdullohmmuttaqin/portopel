"use client";

import { useState, useEffect, useRef } from "react";
import { GraduationCap, Code2, Rocket } from "lucide-react";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-[#0B132B]/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">// BIOGRAPHY</p>
          
          <h2 className="relative inline-block font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white pb-2">
            About Me
            <span
              className={`absolute bottom-0 left-0 h-[3px] bg-[#39FF88] transition-all duration-500 ease-out shadow-[0_0_12px_#39FF88] ${
                isInView ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </h2>
        </div>

        {/* Grid Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Education</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Informatics Student at <span className="text-white font-medium">Universitas Nahdlatul Ulama Al Ghazali (UNUGHA)</span>. Focus on software architecture & modern web technologies.
            </p>
          </div>

          {/* Card 2: Specialization */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Specialization</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Full-Stack Web Development, Mobile Applications, Desktop Systems, UI/UX Design, and IoT & Embedded Systems Integration. Dedicated to continuously learning best practices to build clean, well-structured, and scalable applications.
            </p>
          </div>

          {/* Card 3: Philosophy */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Approach</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Striving to write maintainable code, apply clean architecture principles, and deliver smooth user experiences across frontend and backend systems.            </p>
          </div>

        </div>

      </div>
    </section>
  );
}