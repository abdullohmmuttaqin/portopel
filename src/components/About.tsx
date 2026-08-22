import { GraduationCap, Code2, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#0B132B]/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">// BIOGRAPHY</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* Grid Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Education</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Teknik Informatika / Computer Science student at <span className="text-white font-medium">Universitas Nahdlatul Ulama Al Ghazali (UNUGHA)</span>. Focus on software architecture & modern web technologies.
            </p>
          </div>

          {/* Card 2: Specialization */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Specialization</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Full-Stack Web Development (Next.js/React), Mobile Applications (React Native), and Desktop Systems. Passionate about building clean, scalable apps.
            </p>
          </div>

          {/* Card 3: Philosophy */}
          <div className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white">Approach</h3>
            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
              Writing maintainable code with clean architecture, fast UI performance, and seamless user experiences from frontend to database.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}