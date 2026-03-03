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
  publications: Publication[];
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
  note?: string;
}

export interface Publication {
  title: string;
  publisher: string;
  date: string;
  url: string;
  abstract: string;
}

export const config: SiteConfig = {
  name: "Daniel R. Garcia Avila",
  title: "Data Analyst | Automation & AI Systems",
  tagline: "Turning data into decisions, and processes into automated pipelines.",
  description: "Portfolio of Daniel R. Garcia Avila — Data Analyst and Automation Engineer with an IT, networking, and systems integration background.",
  siteUrl: "https://drga9808.github.io",
  email: "danieltram3@gmail.com",

  socials: [
    { platform: "GitHub", url: "https://github.com/drga9808", label: "GitHub" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/drga98", label: "LinkedIn" },
  ],

  about: {
    paragraphs: [
      "Telecommunications and Electronics Engineer transitioning into Data Analytics and Automation Engineering with a strong IT, networking, and systems integration background.",
      "I design structured data models, build workflow automation systems, integrate APIs and CRMs, and implement data validation and quality controls using PostgreSQL, n8n, and cloud-based architectures.",
      "I combine analytical thinking, backend systems knowledge, and automation design to translate business processes into structured, scalable technical solutions.",
    ],
  },

  projects: [
    {
      title: "Yorkshire Water DMA Analysis",
      description: "Machine learning pipeline analyzing Distribution Management Areas to identify flow patterns, anomalies (e.g., high night flows), and relationships to property composition and mains repairs. Includes time-series preprocessing, EDA workflow, and night-flow leakage analysis.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      github: "https://github.com/drga9808/Machine-Learning-Water-Metering",
      featured: true,
    },
    {
      title: "ML Algorithms from Scratch",
      description: "Machine learning algorithms implemented from scratch in Python/NumPy with no high-level ML libraries. Includes Fuzzy C-Means clustering, Elbow Method, and Silhouette Coefficient visualizations with documented Jupyter Notebooks.",
      tech: ["Python", "NumPy", "Matplotlib", "Jupyter"],
      github: "https://github.com/drga9808/Machine-Learning-Algorithms",
      featured: true,
    },
    {
      title: "Toyota Hacks Blog",
      description: "Full-stack blog application with CRUD functionality, authentication, Markdown formatting, and Cloudinary image hosting. Deployed on Fly.io with Cloudflare DNS and custom domain.",
      tech: ["Node.js", "Express", "EJS", "MongoDB", "Cloudinary"],
      url: "https://toyota-blog.drga98.com",
      github: "https://github.com/drga9808/Toyota-hacks-blog",
    },
    {
      title: "LBG Auto-Clustering Algorithm",
      description: "Automatic clustering approach based on the Linde-Buzo-Gray / Generalized Lloyd algorithm, adapted from IoT clustering literature. Includes computation and 2D visualization tooling.",
      tech: ["Python", "Jupyter"],
      github: "https://github.com/drga9808/Clustering-algorithm",
    },
  ],

  experience: [
    {
      role: "Automation & AI Systems Associate",
      company: "Hercules Advertising LLC",
      period: "Dec 2025 — Present",
      bullets: [
        "Design and develop internal automation systems to streamline operational and client workflows.",
        "Build structured relational data models using PostgreSQL (Supabase) with data validation and quality controls.",
        "Orchestrate multi-platform workflows using n8n with API and webhook integrations.",
        "Integrate CRM systems (GoHighLevel) with backend databases and reporting pipelines.",
        "Support deployment and integration of AI-powered voice and text agents (Retell AI).",
      ],
    },
    {
      role: "Desktop Support Analyst II",
      company: "Royal Caribbean Group (via Dyopath)",
      period: "Dec 2025 — Present",
      bullets: [
        "Deliver Tier 2 technical support managing high-volume ticket queues based on SLA and business impact.",
        "Analyze recurring incidents to identify patterns and root causes.",
        "Maintain structured troubleshooting documentation to improve knowledge-base quality.",
      ],
    },
    {
      role: "FTTx Design Engineer",
      company: "SHR Communications LLC",
      period: "Jun 2025 — Dec 2025",
      bullets: [
        "Designed fiber distribution routes optimizing coverage and scalability.",
        "Conducted field surveys to validate measurements and identify construction challenges.",
        "Created technical design packages and construction drawings.",
      ],
    },
    {
      role: "Low Voltage Technician",
      company: "4 Best Business Corp.",
      period: "Jul 2024 — May 2025",
      bullets: [
        "Installed and configured IP and analog surveillance systems.",
        "Monitored and optimized surveillance server performance.",
      ],
    },
    {
      role: "Professor — Telecom & Electronics",
      company: "CUJAE, Havana",
      period: "Mar 2022 — Jan 2023",
      bullets: [
        "Taught C++ (Data Structures & Algorithms), Telecommunication Networks, and Databases.",
        "Developed structured course materials and delivered technical instruction.",
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "Jan 2026",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Apr 2025",
    },
    {
      name: "Digital Forensics — FINDS Research Center",
      issuer: "Florida International University",
      date: "2024",
    },
  ],

  skills: [
    { category: "Data & Analytics", items: ["SQL", "Python", "Power BI", "Data Visualization", "EDA", "Data Quality"] },
    { category: "Databases", items: ["PostgreSQL", "Supabase", "MongoDB", "Data Modeling"] },
    { category: "Automation", items: ["n8n", "API Integration", "Webhooks", "GoHighLevel", "Workflow Orchestration"] },
    { category: "AI & ML", items: ["Prompt Engineering", "Retell AI", "NumPy", "Pandas", "Matplotlib"] },
    { category: "Programming", items: ["Python", "JavaScript", "Node.js", "C++", "SQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Supabase", "Cloudflare", "Git", "GitHub"] },
  ],

  education: [
    {
      degree: "M.Sc. Digital Systems (3/4 semesters)",
      school: "CITEDI IPN",
      year: "2023 — 2024",
      note: "IoT, LPWAN, ML for urban water management",
    },
    {
      degree: "Summer Course — Digital Forensics",
      school: "Florida International University",
      year: "2024",
    },
    {
      degree: "B.Eng. Telecommunications & Electronics",
      school: "CUJAE, Havana",
      year: "2017 — 2022",
    },
  ],

  publications: [
    {
      title: "Current Challenges in IoT Security and Forensics: Strategies for a Secure Connected Future",
      publisher: "IntechOpen",
      date: "Nov 2024",
      url: "https://www.intechopen.com/chapters/1207070",
      abstract: "Outlines common IoT attacks, mitigation approaches, and forensic methods for investigating compromised systems, including how emerging tools and AI shape defensive security and forensic investigation.",
    },
    {
      title: "Module for Real-Time Capture and Storage of Parameters Associated with the Operation of Compute Nodes",
      publisher: "Telematica (CUJAE)",
      date: "May 2023",
      url: "https://revistatelematica.cujae.edu.cu/index.php/tele/article/view/577",
      abstract: "A Linux-based real-time monitoring system combining Shell scripts and C++ modules to capture, store, and analyze node-level data for parallel and distributed high-performance workloads.",
    },
  ],
};
