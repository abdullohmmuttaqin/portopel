// 1. Interface TypeScript (Kontrak bentuk data)
export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai-image';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  location: string;
  about: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

// 2. Data Profil Riil
export const profileData: Profile = {
  name: "Abdulloh Muhammad Muttaqin",
  initials: "AMM",
  role: "Software Engineer & Full-Stack Developer",
  location: "Indonesia",
  about: "Mahasiswa Informatika yang berfokus pada pengembangan aplikasi Web Full-Stack, Mobile (React Native), dan Sistem Desktop. Terbiasa membangun solusi software end-to-end dengan arsitektur terstruktur.",
  socials: {
    github: "https://github.com/abdullohmmuttaqin",
    linkedin: "https://linkedin.com/in/abdullohmmuttaqin",
    email: "abdullohmmuttaqin.09@gmail.com"
  }
};

// 3. Array Data Proyek Utama
export const projectsData: Project[] = [
  {
    id: "showroom-app",
    title: "ShowroomApp2 - Mobile Accounting System",
    category: "mobile",
    shortDesc: "Aplikasi pembukuan kendaraan berbasis mobile untuk manajemen transaksi showroom.",
    fullDesc: "Dikembangkan menggunakan React Native dan Expo. Memudahkan pemilik showroom mencatat arus kas, stok kendaraan, dan laporan keuangan harian secara real-time.",
    techStack: ["React Native", "Expo", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/ShowroomApp2",
    featured: true
  },
  {
    id: "avanti-merch",
    title: "Avanti Merch & Admin Sales Dashboard",
    category: "web",
    shortDesc: "Platform e-commerce merchandise lengkap dengan dashboard analitik penjualan.",
    fullDesc: "Sistem web full-stack untuk katalog produk merchandise serta panel admin untuk mengelola penjualan, stok, dan data transaksi secara terpusat.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/avanti-merch-dashboard",
    featured: true
  },
  {
    id: "toko-sarung",
    title: "Toko Sarung Inventory & Sales Manager",
    category: "desktop",
    shortDesc: "Aplikasi desktop pembukuan dan manajemen stok barang toko sarung.",
    fullDesc: "Aplikasi desktop berbasis Java Swing dan SQLite untuk pencatatan transaksi toko ritel secara cepat, efisien, dan offline-first.",
    techStack: ["Java", "Java Swing", "SQLite"],
    githubUrl: "https://github.com/abdullohmmuttaqin/toko-sarung-app",
    featured: false
  }
];