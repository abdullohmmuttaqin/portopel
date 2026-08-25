"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B132B]/80 backdrop-blur-md border-b border-[#39FF88]/30 shadow-[0_4px_20px_rgba(57,255,136,0.1)]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Monogram */}
        <a href="#home" className="flex items-center gap-2 active:scale-90 transition-transform duration-100">
          <div className="w-10 h-10 rounded-xl bg-[#1C2541] border border-[#39FF88]/30 flex items-center justify-center text-[#39FF88] font-mono font-bold text-lg shadow-[0_0_15px_rgba(57,255,136,0.15)]">
            AMM
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative font-mono text-xs tracking-wider text-[#94A3B8] hover:text-[#39FF88] active:scale-95 transition-all duration-100 py-2 group"
            >
              <span className="text-[#39FF88]/50 mr-1">//</span>
              {item.name}
              
              {/* Animasi Garis Bawah (Underline Hover + Glow) */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF88] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#39FF88]" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1C2541] text-[#94A3B8] hover:text-[#39FF88] active:scale-90 transition-transform duration-100"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B132B] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="relative font-mono text-sm tracking-wider text-[#94A3B8] hover:text-[#39FF88] active:scale-95 transition-all duration-100 py-2 flex items-center gap-2 border-b border-white/5 last:border-0 group"
            >
              <span className="text-[#39FF88] font-bold">//</span>
              {item.name}
              
              {/* Animasi Garis Bawah Mobile */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF88] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}