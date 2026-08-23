import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Soundtracks from "@/components/Soundtracks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B132B] text-white">
      <Navbar />
      <Hero />
      <About />
      <ProjectGrid />
      <Experience />
      <Skills />
      <Soundtracks />
      <Contact />
      <Footer />
    </main>
  );
}