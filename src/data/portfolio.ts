export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Desktop' | 'UI/UX Design' | 'IoT & Embedded';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  githubUrl?: string;
  figmaUrl?: string;
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
  about: "Computer Science student specializing in Full-Stack Web Development, Mobile Applications, and Desktop Systems. Passionate about building end-to-end software solutions with clean, structured architecture.",
  socials: {
    github: "https://github.com/abdullohmmuttaqin",
    linkedin: "https://linkedin.com/in/abdullohmmuttaqin",
    email: "abdullah.22eo10034@mhs.unugha.ac.id"
  }
};

export const projectsData: Project[] = [
  {
    id: "artomoro-craft",
    title: "Artomoro Craft - Bouquet Catalog & Ordering Platform",
    category: "Web",
    shortDesc: "Digital catalog and ordering platform for custom bouquets and handmade crafts.",
    fullDesc: "A modern web application fully refactored using Next.js 16, React 19, and Supabase for real-time database management and authentication.",
    techStack: ["Next.js 16", "React 19", "Supabase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/artomoro-craft",
    featured: true
  },
  {
    id: "showroom-app",
    title: "ShowroomApp2 - Mobile Accounting System",
    category: "Mobile",
    shortDesc: "Mobile-based vehicle bookkeeping system for showroom inventory and cash flow management.",
    fullDesc: "Built with React Native and Expo. Empowers showroom owners to record cash flows, track vehicle inventory, and analyze daily financial reports in real-time.",
    techStack: ["React Native", "Expo", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/ShowroomApp2",
    featured: true
  },
  {
    id: "toko-sarung",
    title: "Toko Sarung Inventory & Sales Manager",
    category: "Desktop",
    shortDesc: "Desktop bookkeeping and stock management application for retail stores.",
    fullDesc: "Offline-first desktop application developed with Java Swing and SQLite for rapid, efficient transaction recording and inventory control.",
    techStack: ["Java", "Java Swing", "SQLite"],
    githubUrl: "https://github.com/abdullohmmuttaqin/toko-sarung-app",
    featured: false
  },
  {
    id: "avanti-merch",
    title: "Avanti Merch & Admin Sales Dashboard",
    category: "Web",
    shortDesc: "Full-stack merchandise e-commerce platform with integrated admin sales analytics.",
    fullDesc: "End-to-end web system for merchandise cataloging featuring a centralized admin panel to manage product stock, orders, and sales performance data.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/abdullohmmuttaqin/Avanti-Merch",
    featured: true
  },
  {
    id: "smartlib",
    title: "SMARTLIB - Digital Library Management System",
    category: "UI/UX Design",
    shortDesc: "UI/UX design prototype for digital library administrative management.",
    fullDesc: "Comprehensive UI/UX design for a digital library system enabling administrators to oversee book collections, active members, and borrowing logs.",
    techStack: ["Figma", "UI/UX", "Prototyping", "Design System"],
    figmaUrl: "https://www.figma.com/design/X3zgrePRclcgLyEgxhz2dT/SMARTLIB-SP-RPL?node-id=0-1",
    featured: true
  },
  {
    id: "merch-shop",
    title: "Merch Shop - Band E-Commerce Design",
    category: "UI/UX Design",
    shortDesc: "Interactive UI/UX design prototype for a music band merchandise storefront.",
    fullDesc: "Interactive UI/UX design prototype for a music band merchandise storefront focusing on seamless user experience and modern design system.",
    techStack: ["Figma", "UI/UX", "Prototyping", "Wireframing"],
    figmaUrl: "https://www.figma.com",
    featured: false
  }
];