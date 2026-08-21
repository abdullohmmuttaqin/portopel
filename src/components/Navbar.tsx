import Link from "next/link";
import { profileData } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B132B]/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Monogram Logo "AMM" */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 font-mono font-bold text-xl tracking-wider text-white"
        >
          <span className="w-10 h-10 rounded-xl bg-[#1C2541] border border-[#39FF88]/30 flex items-center justify-center text-[#39FF88] group-hover:border-[#39FF88] group-hover:shadow-[0_0_15px_rgba(57,255,136,0.3)] transition-all duration-300">
            {profileData.initials}
          </span>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-[#94A3B8]">
          <a href="#about" className="hover:text-[#39FF88] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#39FF88] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#39FF88] transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-[#39FF88] transition-colors">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}