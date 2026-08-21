import { Code2, Database, Layout, Terminal } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-[#39FF88]" />,
      skills: ["TypeScript", "JavaScript", "PHP", "Java", "Python", "HTML/CSS"],
    },
    {
      title: "Frontend & Mobile",
      icon: <Layout className="w-5 h-5 text-[#39FF88]" />,
      skills: ["Next.js", "React", "React Native", "Tailwind CSS", "Expo", "Bootstrap"],
    },
    {
      title: "Backend & Frameworks",
      icon: <Code2 className="w-5 h-5 text-[#39FF88]" />,
      skills: ["Node.js", "Express.js", "REST APIs", "Java Swing"],
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-5 h-5 text-[#39FF88]" />,
      skills: ["MySQL", "SQLite", "Git & GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="font-mono text-sm text-[#39FF88] uppercase tracking-widest mb-2">
          {"// Technical Proficiency"}
        </h2>
        <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
          Skills & Tech Stack
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#1C2541] rounded-2xl p-6 border border-white/5 hover:border-[#39FF88]/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[#0B132B] border border-[#39FF88]/20">
                {category.icon}
              </div>
              <h4 className="font-sans font-bold text-lg text-white">
                {category.title}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#0B132B] text-[#94A3B8] border border-white/5 hover:text-[#39FF88] hover:border-[#39FF88]/30 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}