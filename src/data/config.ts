export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  siteUrl: string;
  email: string;
  socials: { platform: string; url: string; label: string }[];
  about: { paragraphs: string[]; avatar?: string };
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  skills: SkillGroup[];
  education: Education[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge?: string;
  verifyUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export const config: SiteConfig = {
  name: "Your Name",
  title: "Software Engineer",
  tagline: "I build things for the web and beyond.",
  description: "Personal portfolio — software engineer specializing in modern web technologies.",
  siteUrl: "https://yourdomain.com",
  email: "hello@yourdomain.com",

  socials: [
    { platform: "GitHub", url: "https://github.com/yourusername", label: "GitHub" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  ],

  about: {
    paragraphs: [
      "I'm a software engineer who loves building fast, accessible, and beautiful web experiences. With a background spanning front-end frameworks to cloud infrastructure, I bring ideas from concept to production.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into cybersecurity challenges.",
    ],
  },

  projects: [
    {
      title: "Project Alpha",
      description: "A full-stack web application with real-time features, authentication, and a modern UI.",
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      url: "https://example.com",
      github: "https://github.com/yourusername/project-alpha",
      featured: true,
    },
    {
      title: "Project Beta",
      description: "CLI tool that automates deployment workflows and infrastructure provisioning.",
      tech: ["Python", "Docker", "AWS"],
      github: "https://github.com/yourusername/project-beta",
      featured: true,
    },
    {
      title: "Project Gamma",
      description: "Browser extension that enhances developer productivity with keyboard shortcuts and quick actions.",
      tech: ["JavaScript", "Chrome APIs", "Tailwind CSS"],
      github: "https://github.com/yourusername/project-gamma",
    },
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "Acme Corp",
      period: "2023 — Present",
      bullets: [
        "Designed and shipped a customer-facing dashboard used by 10K+ monthly active users.",
        "Reduced API response times by 40% through query optimization and caching strategies.",
        "Mentored junior engineers and led weekly code review sessions.",
      ],
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "2021 — 2023",
      bullets: [
        "Built responsive front-end components with React and TypeScript.",
        "Integrated third-party payment and analytics APIs.",
        "Wrote end-to-end tests that caught 30+ regressions before production.",
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Solutions Architect Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      verifyUrl: "https://www.credly.com/badges/example",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      verifyUrl: "https://www.credly.com/badges/example",
    },
  ],

  skills: [
    { category: "Languages", items: ["TypeScript", "Python", "Go", "SQL"] },
    { category: "Frontend", items: ["React", "Next.js", "Astro", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "GitHub Actions", "Terraform"] },
    { category: "Security", items: ["OWASP Top 10", "Burp Suite", "Nmap", "Wireshark"] },
  ],

  education: [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2021",
    },
  ],
};
