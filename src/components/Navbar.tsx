"use client";

import { useState } from "react";
import Link from "next/link";
import { profileData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // State untuk mengontrol buka/tutup menu hamburger di HP
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B132B]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
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

        {/* Desktop Navigation Menu (Tampil di Layar Sedang & Besar) */}
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

        {/* Mobile Hamburger Button (Hanya Tampil di Layar HP / md:hidden) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-xl bg-[#1C2541] text-[#94A3B8] hover:text-[#39FF88] border border-white/10 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0B132B]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3 font-mono text-sm text-[#94A3B8]">
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-xl hover:bg-[#1C2541] hover:text-[#39FF88] transition-all"
            >
              {"// About"}
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-xl hover:bg-[#1C2541] hover:text-[#39FF88] transition-all"
            >
              {"// Projects"}
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-xl hover:bg-[#1C2541] hover:text-[#39FF88] transition-all"
            >
              {"// Skills"}
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="p-3 rounded-xl hover:bg-[#1C2541] hover:text-[#39FF88] transition-all"
            >
              {"// Contact"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}