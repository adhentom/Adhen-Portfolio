export type NavItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  icon: string;
  title: string;
  copy: string;
};

export type HeroContent = {
  highlights: HeroHighlight[];
  note: string;
  cta: {
    label: string;
    href: string;
  };
  portrait: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  titleLines: string[];
};

export type FeatureCardType = "wide" | "small" | "apps" | "security" | "support";

export type FeatureCard = {
  title: string;
  copy: string;
  type: FeatureCardType;
};

export type ToolTile = {
  className: "blue" | "stripe" | "dark" | "coral" | "orange";
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

export type ToolsContent = {
  titleLines: [string, string];
  copy: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export type ProjectCard = {
  title: string;
  stack: string;
  copy: string;
  visual: "distributed" | "venture" | "neuro";
};

export type AchievementCard = {
  quote: string;
  name: string;
  period: string;
  color: "cyan" | "coral" | "mint";
  backgroundSrc: string;
};

export type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo: ContactInfo = {
  name: "Adhen Cheryeth Tom",
  email: "adhentom@gmail.com",
  phone: "+91 9074594358",
  linkedin: "https://linkedin.com/in/adhen-cheryeth-tom",
  github: "https://github.com/adhentom",
};

export const heroContent: HeroContent = {
  highlights: [
    {
      icon: "A",
      title: "AI & Software Developer",
      copy: "Building practical intelligent products",
    },
    {
      icon: "->",
      title: "Google Student Ambassador",
      copy: "Leadership, mentoring, and community work",
    },
  ],
  note:
    "Computer Science engineer focused on AI, ML, data analytics, dashboards, APIs, and rapid prototypes that solve real problems.",
  cta: {
    label: "View projects",
    href: "#work",
  },
  portrait: {
    src: "/assets/portfolio/adhen-person-cutout.webp",
    alt: "Illustrated portrait of Adhen Cheryeth Tom",
    width: 992,
    height: 2334,
  },
  titleLines: ["ADHEN CHERYETH TOM"],
};

export const featureCards: FeatureCard[] = [
  {
    title: "B.Tech Computer Science Engineering",
    copy: "Sahrdaya College of Engineering and Technology, CGPA 8.02/10.",
    type: "wide",
  },
  {
    title: "AI, ML & Generative AI Builder",
    copy: "Designing RAG workflows, AI-assisted search, adaptive learning, and analytics products.",
    type: "wide",
  },
  {
    title: "Python, Java, C & SQL",
    copy: "Comfortable moving from data logic to backend APIs and prototypes.",
    type: "small",
  },
  {
    title: "FastAPI, Flutter & REST APIs",
    copy: "Building modular apps, API layers, dashboards, and mobile-first experiences.",
    type: "apps",
  },
  {
    title: "Data Dashboards & Modeling",
    copy: "Using Streamlit, Pandas, Plotly, PostgreSQL, MySQL, and SQLite.",
    type: "security",
  },
  {
    title: "Leadership, Mentorship & Communities",
    copy: "Google Student Ambassador, STRIDE KDISC leadership member, and IEEE chapter representative.",
    type: "support",
  },
];

export const toolsContent: ToolsContent = {
  titleLines: ["Stack For Fast", "Product Builds"],
  copy: "Modern, modular, and scalable. The perfect stack to build high-performance products.",
  primaryCta: {
    label: "See My Stack",
    href: "#stack",
  },
  secondaryCta: {
    label: "View projects",
    href: "#work",
  },
};

export const toolTiles: ToolTile[] = [
  {
    className: "blue",
    src: "/assets/portfolio/clean/tile-python.svg",
    alt: "Blue isometric technology tile",
    label: "Python",
    width: 326,
    height: 259,
  },
  {
    className: "stripe",
    src: "/assets/portfolio/clean/tile-fastapi.svg",
    alt: "Purple isometric technology tile",
    label: "FastAPI",
    width: 326,
    height: 259,
  },
  {
    className: "dark",
    src: "/assets/portfolio/clean/tile-github.svg",
    alt: "Black isometric technology tile",
    label: "GitHub",
    width: 326,
    height: 259,
  },
  {
    className: "coral",
    src: "/assets/portfolio/clean/tile-flutter.svg",
    alt: "Coral isometric technology tile",
    label: "Flutter",
    width: 326,
    height: 259,
  },
  {
    className: "orange",
    src: "/assets/portfolio/clean/tile-streamlit.svg",
    alt: "Orange isometric technology tile",
    label: "Streamlit",
    width: 326,
    height: 259,
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: "Distributed File System",
    stack: "Python / FastAPI / PostgreSQL / REST APIs",
    copy:
      "Designed a scalable distributed file system featuring high-concurrency file transfers, secure uploads/downloads, metadata registry management, and inter-node health monitoring.",
    visual: "distributed",
  },
  {
    title: "VentureLens",
    stack: "Python / Streamlit / Pandas / Plotly / RAG",
    copy: "Venture funding intelligence dashboard showing real-time investment trends, market insights, and integrated RAG workflows for contextual search.",
    visual: "venture",
  },
  {
    title: "NeuroLearn AI",
    stack: "Flutter / Python / Firebase",
    copy: "AI-powered adaptive learning platform designed for neurodivergent students, generating personalized learning paths and multi-sensory experiences.",
    visual: "neuro",
  },
];

export const achievements: AchievementCard[] = [
  {
    quote: "Selected to organize tech events, workshops, and represent Google developer technologies in student communities.",
    name: "Google Student Ambassador 2026",
    period: "2026",
    color: "cyan",
    backgroundSrc: "/assets/portfolio/clean/achievement-cyan.svg",
  },
  {
    quote: "Won first place for developing SafeSeal, an inclusive assistive solution designed to empower neurodivergent women.",
    name: "STRIDE Designathon Winner",
    period: "2025",
    color: "coral",
    backgroundSrc: "/assets/portfolio/clean/achievement-coral.svg",
  },
  {
    quote: "Engineered Dream Slap, a multiplayer battle royale game, inside a high-pressure 24-hour game jam.",
    name: "Game Jam First Place",
    period: "2024",
    color: "mint",
    backgroundSrc: "/assets/portfolio/clean/achievement-mint.svg",
  },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: "cloud" | "chart" | "data" | "star";
  logo: "google" | "deloitte" | "tata" | "anthropic";
};

export const certifications: Certification[] = [
  {
    title: "Introduction to AI Agents",
    issuer: "Google Cloud",
    icon: "cloud",
    logo: "google",
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte Australia",
    icon: "chart",
    logo: "deloitte",
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Tata (Forage)",
    icon: "data",
    logo: "tata",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    icon: "star",
    logo: "anthropic",
  },
];
