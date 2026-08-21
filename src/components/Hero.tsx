import Image from "next/image";
import { profileData } from "@/data/portfolio";
import { ArrowUpRight, FileText, MapPin } from "lucide-react";

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

          {/* Nama Utama */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {profileData.name}
          </h1>

          {/* Role / Job Title */}
          <p className="font-mono text-lg sm:text-xl text-[#39FF88] font-medium">
            {profileData.role}
          </p>

          {/* Bio / About */}
          <p className="font-sans text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl">
            {profileData.about}
          </p>

          {/* Action Buttons & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#39FF88] text-[#0B132B] font-mono font-bold text-sm hover:bg-[#39FF88]/90 transition-all shadow-[0_0_20px_rgba(57,255,136,0.2)]"
            >
              Explore My Work
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1C2541] text-white font-mono text-sm border border-white/10 hover:border-[#39FF88]/50 transition-all"
            >
              <FileText className="w-4 h-4 text-[#39FF88]" />
              Download CV
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-auto sm:ml-2">
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

        {/* Kolom Kanan: Frame Foto Profil Mewah dengan Glow Effect */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-md">
            
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#39FF88] to-[#1C2541] rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Main Photo Card Container */}
            <div className="relative w-full aspect-[4/5] rounded-[2.2rem] bg-[#1C2541] border border-[#39FF88]/30 overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg"
                alt={profileData.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient Soft Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80"></div>

              {/* Floating Info Badge At Bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B132B]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-mono text-sm text-white font-bold">{profileData.name}</p>
                  <p className="font-sans text-xs text-[#39FF88] font-medium mt-0.5">{profileData.role}</p>
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-[#94A3B8] bg-[#1C2541] px-2.5 py-1 rounded-lg border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-[#39FF88]" />
                  {profileData.location}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}