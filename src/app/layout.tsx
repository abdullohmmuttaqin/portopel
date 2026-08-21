import type { Metadata } from "next";
import { Playfair_Display, Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// 1. Inisialisasi Font Playfair Display (Judul / Headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// 2. Inisialisasi Font Lato (Body Text / Deskripsi)
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

// 3. Inisialisasi Font JetBrains Mono (Tech Stack / Badges)
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulloh Muhammad Muttaqin | Portfolio",
  description: "Software Engineer & Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" class={`${playfair.variable} ${lato.variable} ${jetbrains.variable}`}>
      <body class="antialiased selection:bg-[#39FF88] selection:text-[#0B132B]">
        {children}
      </body>
    </html>
  );
}