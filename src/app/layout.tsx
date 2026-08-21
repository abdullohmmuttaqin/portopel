import type { Metadata } from "next";
import { Playfair_Display, Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inisialisasi Font Playfair Display (Judul / Headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Inisialisasi Font Lato (Body Text / Deskripsi)
const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

// Inisialisasi Font JetBrains Mono (Tech Stack / Badges)
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
    // Memastikan atribut menggunakan className (BUKAN class)
    <html lang="en" className={`${playfair.variable} ${lato.variable} ${jetbrains.variable}`}>
      <body className="antialiased selection:bg-[#39FF88] selection:text-[#0B132B]">
        {children}
      </body>
    </html>
  );
}