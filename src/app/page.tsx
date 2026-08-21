import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B132B] text-white selection:bg-[#39FF88] selection:text-[#0B132B]">
      <Navbar />
      <Hero />
      <ProjectGrid />
    </main>
  );
}