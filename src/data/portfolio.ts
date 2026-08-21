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

export const profileData: Profile = {
  name: "Abdullah Muhammad Muttaqim",
  initials: "AMM",
  role: "Software Engineer & Full-Stack Developer",
  location: "Indonesia",
  about: "Computer Science student specializing in Full-Stack Web Development, Mobile Applications (React Native), and Desktop Systems. Passionate about building end-to-end software solutions with clean, structured architecture.",
  socials: {
    github: "https://github.com/abdullohmmuttaqin",
    linkedin: "https://linkedin.com/in/abdullohmmuttaqin",
    email: "abdullah.22eo10034@mhs.unugha.ac.id"
  }
};

export const projectsData: Project[] = [
  {
    id: "showroom-app",
    title: "ShowroomApp2 - Mobile Accounting System",
    category: "mobile",
    shortDesc: "Mobile-based vehicle bookkeeping system for showroom inventory and cash flow management.",
    fullDesc: "Built with React Native and Expo. Empowers showroom owners to record cash flows, track vehicle inventory, and analyze daily financial reports in real-time.",
    techStack: ["React Native", "Expo", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/ShowroomApp2",
    featured: true
  },
  {
    id: "avanti-merch",
    title: "Avanti Merch & Admin Sales Dashboard",
    category: "web",
    shortDesc: "Full-stack merchandise e-commerce platform with integrated admin sales analytics.",
    fullDesc: "End-to-end web system for merchandise cataloging featuring a centralized admin panel to manage product stock, orders, and sales performance data.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/avanti-merch-dashboard",
    featured: true
  },
  {
    id: "toko-sarung",
    title: "Toko Sarung Inventory & Sales Manager",
    category: "desktop",
    shortDesc: "Desktop bookkeeping and stock management application for retail stores.",
    fullDesc: "Offline-first desktop application developed with Java Swing and SQLite for rapid, efficient transaction recording and inventory control.",
    techStack: ["Java", "Java Swing", "SQLite"],
    githubUrl: "https://github.com/abdullohmmuttaqin/toko-sarung-app",
    featured: false
  }
];