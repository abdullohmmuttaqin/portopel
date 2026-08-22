"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B132B]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Monogram */}
        <a href="#home" className="flex items-center gap-2">
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
              className="text-sm font-sans text-[#94A3B8] hover:text-[#39FF88] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1C2541] text-[#94A3B8] hover:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B132B] border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-sans text-[#94A3B8] hover:text-[#39FF88] transition-colors py-1"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}