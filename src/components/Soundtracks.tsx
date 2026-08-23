"use client";

import { useState, useEffect, useRef } from "react";
import { Disc2 } from "lucide-react";

const playlists = [
  {
    id: "1",
    title: "Calm🌻🌻",
    description:
      "Base on indie/folk. A quiet sanctuary for the restless minds. Melodies of nature, tales of the streets, and honest reflections to keep you grounded.🍀☘️🌹🌻🏴‍☠️☠️Ⓐ=",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/playlist/0JyjJwmsAwu3Ldz6CQ8EDj?utm_source=generator&theme=0",
  },
  {
    id: "2",
    title: "Lost(The fall & Rise) 🍀☘️🌹🌻🌱",
    description:
      "A soundtrack for the nights we lost ourselves, and the mornings we decided to rise again. From the dust of the working class to the celebration of life. Keep growing between your cracks🍀☘️🌹🌻🏴‍☠️☠️Ⓐ=",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/playlist/73GkAU8LMEJYP9Tobez91k?utm_source=generator&theme=0",
  },
  {
    id: "3",
    title: "Hard Refresh",
    description:
      "A pure shot of adrenaline fueled by heavy riffs and brutal vocals. When your logic hits a wall, press Hard Refresh on your brain and let the code flow wild. 🍀☘️🌹🌻🏴‍☠️☠️Ⓐ=",
    spotifyEmbedUrl:
      "https://open.spotify.com/embed/playlist/3PLhEYdH2NiQh0pfg56d1u?utm_source=generator&theme=0",
  },
];

export default function Soundtracks() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="soundtracks"
      className="py-20 px-6 bg-[#0B132B] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-[#39FF88] uppercase tracking-wider">
            {"// FOCUS & SOUNDTRACKS"}
          </p>

          {/* Judul H2 dengan Garis Bawah Aktif Otomatis (Scroll Trigger) */}
          <h2 className="relative inline-block font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white pb-2">
            Coding Soundtracks
            <span
              className={`absolute bottom-0 left-0 h-[3px] bg-[#39FF88] transition-all duration-500 ease-out shadow-[0_0_12px_#39FF88] ${
                isInView ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </h2>

          <p className="text-sm text-[#94A3B8] max-w-xl font-sans">
            Playlists that fuel my focus, logic, and creativity during long
            development sessions.
          </p>
        </div>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="p-6 rounded-2xl bg-[#1C2541] border border-white/5 hover:border-[#39FF88]/30 active:scale-[0.98] transition-all duration-150 space-y-4 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(57,255,136,0.08)]"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#39FF88]">
                  <Disc2 className="w-5 h-5" />
                  <h3 className="font-mono text-lg font-bold text-white">
                    {pl.title}
                  </h3>
                </div>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                  {pl.description}
                </p>
              </div>

              {/* Spotify Embed Player */}
              <div className="w-full rounded-xl overflow-hidden border border-white/5 bg-[#0B132B]">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={pl.spotifyEmbedUrl}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={pl.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}