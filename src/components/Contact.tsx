import { Mail, MapPin, ExternalLink, Send } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#0B132B]/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
            {"// GET IN TOUCH"}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
            Let's Build Something Together
          </h2>
          <p className="text-sm text-[#94A3B8] max-w-xl font-sans">
            I am open for full-stack, mobile, or desktop software development opportunities, freelance projects, and technical collaborations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Direct Email */}
          <a
            href="mailto:abdullah.22eo10034@mhs.unugha.ac.id"
            className="group p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/40 active:scale-95 transition-all duration-150 space-y-4 hover:shadow-[0_0_20px_rgba(57,255,136,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#39FF88]">DIRECT EMAIL</p>
              <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#39FF88] transition-colors truncate">
                abdullah.22eo10034@mhs.unugha.ac.id
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono group-hover:text-white">
              <span>Send a Message</span>
              <Send className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Repo */}
          <a
            href="https://github.com/abdullohmmuttaqin"
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/40 active:scale-95 transition-all duration-150 space-y-4 hover:shadow-[0_0_20px_rgba(57,255,136,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#39FF88]">GITHUB PROFILE</p>
              <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#39FF88] transition-colors">
                github.com/abdullohmmuttaqin
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono group-hover:text-white">
              <span>Explore Code</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://linkedin.com/in/abdullohmmuttaqin"
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/40 active:scale-95 transition-all duration-150 space-y-4 hover:shadow-[0_0_20px_rgba(57,255,136,0.1)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[#39FF88]/10 text-[#39FF88] flex items-center justify-center group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#39FF88]">PROFESSIONAL NETWORK</p>
              <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#39FF88] transition-colors">
                LinkedIn Profile
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-mono group-hover:text-white">
              <span>Connect with Me</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Location Footer Bar */}
        <div className="p-4 rounded-xl bg-[#1C2541]/50 border border-white/5 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#39FF88]" />
            <span>Based in Indonesia • Open for Remote Work Worldwide</span>
          </div>
          <span className="hidden sm:inline-block text-[#39FF88]">• GMT+7</span>
        </div>

      </div>
    </section>
  );
}