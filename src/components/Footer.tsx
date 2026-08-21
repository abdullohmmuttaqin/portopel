import { profileData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B132B] border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94A3B8]">
        
        {/* Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-lg bg-[#1C2541] border border-[#39FF88]/30 flex items-center justify-center text-[#39FF88] font-bold text-xs">
            {profileData.initials}
          </span>
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
        </div>

        {/* Tech Stack Note */}
        <p className="text-center sm:text-right">
          Built with <span className="text-white font-medium">Next.js 16</span>, <span className="text-white font-medium">TypeScript</span> & <span className="text-[#39FF88]">Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
}