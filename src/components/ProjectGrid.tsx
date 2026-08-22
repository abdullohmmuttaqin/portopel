"use client";

import { useState } from "react";
import { ExternalLink, Smartphone, Globe, Monitor } from "lucide-react";

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

// Data Proyek Asli Abdullah dengan Path Gambar
const projectsData = [
  {
    id: "showroom-app",
    title: "ShowroomApp2 - Mobile Accounting System",
    category: "Mobile",
    categoryBadge: "Mobile App",
    icon: Smartphone,
    description:
      "Mobile-based vehicle bookkeeping system designed for showroom inventory and real-time cash flow management.",
    keyFeatures: [
      "Showroom inventory tracking",
      "Real-time cash flow records",
      "Vehicle bookkeeping system",
      "Offline-first mobile data sync",
    ],
    techStack: ["React Native", "Expo", "JavaScript", "AsyncStorage"],
    githubUrl: "https://github.com/abdullohmmuttaqin/ShowroomApp2",
    demoUrl: "#",
    image: "/projects/showroom.png", // Path gambar dari folder public/projects/
  },
  {
    id: "avanti-merch",
    title: "Avanti Merch & Admin Sales Dashboard",
    category: "Web",
    categoryBadge: "Web Application",
    icon: Globe,
    description:
      "Full-stack merchandise e-commerce platform integrated with an interactive admin analytics dashboard for inventory and sales.",
    keyFeatures: [
      "Interactive sales analytics",
      "Merchandise inventory management",
      "Integrated admin control panel",
      "Customer checkout flow",
    ],
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/Avanti-Merch",
    demoUrl: "#",
    image: "/projects/avanti.png",
  },
  {
    id: "toko-sarung",
    title: "Toko Sarung Inventory & Sales Manager",
    category: "Desktop",
    categoryBadge: "Desktop App",
    icon: Monitor,
    description:
      "Desktop bookkeeping and stock management application crafted specifically for retail stores and local inventory workflow.",
    keyFeatures: [
      "Retail stock management",
      "Sales transaction logging",
      "Automated receipt generation",
      "Local SQLite database storage",
    ],
    techStack: ["Java", "Java Swing", "SQLite"],
    githubUrl: "https://github.com/abdullohmmuttaqin/toko-sarung-app",
    demoUrl: "#",
    image: "/projects/tokosarung.png",
  },
];

const categories = ["All", "Mobile", "Web", "Desktop"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-[#0B132B]/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
              {"// FEATURED WORK"}
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
              Projects & Case Studies
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs px-4 py-2 rounded-xl border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#39FF88] text-[#0B132B] border-[#39FF88] font-bold shadow-[0_0_15px_rgba(57,255,136,0.3)]"
                    : "bg-[#1C2541]/50 text-[#94A3B8] border-white/5 hover:border-[#39FF88]/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_0_30px_rgba(57,255,136,0.1)]"
              >
                {/* Top Image Box */}
                <div className="relative w-full h-56 bg-[#0B132B] overflow-hidden border-b border-white/5">
                  {/* Gambar Demo Proyek / Fallback Icon jika gambar belum dipasang */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1C2541] to-[#0B132B] text-[#94A3B8]">
                      <IconComponent className="w-16 h-16 opacity-20 text-[#39FF88]" />
                    </div>
                  )}

                  {/* Dark Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2541] via-transparent to-black/30 pointer-events-none" />

                  {/* Badge Top Left */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B132B]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#39FF88] z-10">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{project.categoryBadge}</span>
                  </div>

                  {/* Quick Action Links Top Right */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#0B132B]/80 backdrop-blur-md text-[#94A3B8] hover:text-[#39FF88] border border-white/10 transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#0B132B]/80 backdrop-blur-md text-[#94A3B8] hover:text-[#39FF88] border border-white/10 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-mono text-xl font-bold text-white group-hover:text-[#39FF88] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="pt-2 space-y-2">
                      <p className="font-mono text-xs font-bold text-[#39FF88] uppercase tracking-wider">
                        Key Features:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#94A3B8] font-sans">
                        {project.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#39FF88] font-bold">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Badges at Bottom */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0B132B] text-[#94A3B8] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}