import { profileData } from "@/data/portfolio";
import { ArrowUpRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Kolom Kiri: Teks & Bio */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C2541] border border-[#39FF88]/20 font-mono text-xs text-[#39FF88]">
            <span className="w-2 h-2 rounded-full bg-[#39FF88] animate-pulse"></span>
            Available for Opportunities
          </div>

          {/* Nama Utama (Playfair Display Font) */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {profileData.name}
          </h1>

          {/* Role / Job Title (JetBrains Mono) */}
          <p className="font-mono text-lg sm:text-xl text-[#39FF88] font-medium">
            {profileData.role}
          </p>

          {/* Bio / About (Lato Font) */}
          <p className="font-sans text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl">
            {profileData.about}
          </p>

          {/* Action Buttons & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            
            {/* CTA Button 1: Explore Work */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#39FF88] text-[#0B132B] font-mono font-bold text-sm hover:bg-[#39FF88]/90 transition-all shadow-[0_0_20px_rgba(57,255,136,0.2)]"
            >
              Explore My Work
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* CTA Button 2: Download CV */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1C2541] text-white font-mono text-sm border border-white/10 hover:border-[#39FF88]/50 transition-all"
            >
              <FileText className="w-4 h-4 text-[#39FF88]" />
              Download CV
            </a>

            {/* Social Icons (Pakai Inline SVG Biar Aman & Bebas Error Versi) */}
            <div className="flex items-center gap-3 ml-auto sm:ml-2">
              {/* GitHub SVG */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-[#1C2541] text-[#94A3B8] hover:text-[#39FF88] hover:border-[#39FF88]/40 border border-transparent transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-[#1C2541] text-[#94A3B8] hover:text-[#39FF88] hover:border-[#39FF88]/40 border border-transparent transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 1.45 1.45 1.45 1.45 0 0 0-1.45-1.45z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* Kolom Kanan: Visual Card / Avatar Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-[2.5rem] bg-[#1C2541] border border-[#39FF88]/20 p-4 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(57,255,136,0.05)]">
            <div className="w-28 h-28 rounded-full bg-[#0B132B] border-2 border-[#39FF88] flex items-center justify-center font-mono text-3xl font-bold text-[#39FF88] mb-4 shadow-[0_0_20px_rgba(57,255,136,0.3)]">
              {profileData.initials}
            </div>
            <p className="font-mono text-sm text-white font-semibold">{profileData.name}</p>
            <p className="font-sans text-xs text-[#94A3B8] mt-1">📍 {profileData.location}</p>
          </div>
        </div>

      </div>
    </section>
  );
}