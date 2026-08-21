"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/portfolio";
import { Folder, ExternalLink } from "lucide-react";

export default function ProjectGrid() {
  // State untuk filter kategori proyek ('all', 'mobile', 'web', 'desktop')
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Logic memfilter array projectsData berdasarkan tab yang diklik
  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="font-mono text-sm text-[#39FF88] uppercase tracking-widest mb-2">
            // Featured Work
          </h2>
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
            Projects & Case Studies
          </h3>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {["all", "mobile", "web", "desktop"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl capitalize transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#39FF88] text-[#0B132B] font-bold shadow-[0_0_15px_rgba(57,255,136,0.3)]"
                  : "bg-[#1C2541] text-[#94A3B8] hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => (
          <article
            key={project.id}
            className="group relative bg-[#1C2541] rounded-2xl p-6 border border-white/5 hover:border-[#39FF88]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div>
              {/* Card Header Icons */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-[#0B132B] text-[#39FF88] border border-[#39FF88]/20">
                  <Folder className="w-6 h-6" />
                </div>
                
                {/* External Links */}
                <div className="flex items-center gap-3 text-[#94A3B8]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-[#39FF88] transition-colors"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="hover:text-[#39FF88] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Title & Description */}
              <h4 className="font-sans font-bold text-xl text-white group-hover:text-[#39FF88] transition-colors mb-3">
                {project.title}
              </h4>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed mb-6">
                {project.shortDesc}
              </p>
            </div>

            {/* Tech Stack Badges (JetBrains Mono) */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#0B132B] text-[#39FF88] border border-[#39FF88]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}