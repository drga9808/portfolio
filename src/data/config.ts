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
  slug: string;
  description: string;
  longDescription: string;
  tech: string[];
  context?: string;
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
  context?: string;
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
      slug: "yorkshire-water-dma",
      description: "ML pipeline analyzing water distribution areas for flow anomalies and leakage detection.",
      longDescription: "This project analyzes Yorkshire Water Distribution Management Areas using a data science pipeline that covers dataset interpretation, time-series preprocessing, and anomaly detection.\n\nThe analysis follows seven stages — from data ingestion through visualization — with a focus on DMA 512 (Area E1), selected for having the largest property count disparity. Night flow analysis (00:00–05:00) revealed a maximum of 7.04 L/s, minimum of 0.02 L/s, and mean of 2.54 L/s — metrics useful for leakage assessment.\n\nKey areas include flow behavior analysis across DMAs, detection of irregular patterns such as elevated nighttime flows, and property data correlation with consumption metrics. Future work includes automating DMA selection, integrating repair logs, creating interactive dashboards, and implementing statistical leakage detection algorithms.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      context: "M.Sc. Digital Systems \u2022 CITEDI IPN",
      github: "https://github.com/drga9808/Machine-Learning-Water-Metering",
      featured: true,
    },
    {
      title: "ML Algorithms from Scratch",
      slug: "ml-algorithms-from-scratch",
      description: "Core ML algorithms implemented from scratch in Python/NumPy with no high-level ML libraries.",
      longDescription: "A collection of machine learning algorithms implemented from scratch using Python and NumPy, with no high-level ML libraries. Each algorithm includes a documented Jupyter Notebook with full mathematical explanations, manual implementation, visualizations, and evaluation metrics.\n\nCurrently implemented: Soft C-Means (Fuzzy C-Means) clustering with fuzzy membership updates, centroid updates, objective function tracking, and cluster visualizations. Includes Elbow Method and Silhouette Coefficient for cluster quality evaluation.\n\nThis repository serves as both a learning resource for understanding ML fundamentals and a demonstration of algorithmic knowledge — showing the mathematics behind each algorithm alongside clean, modular, well-commented code.",
      tech: ["Python", "NumPy", "Matplotlib", "Jupyter"],
      context: "M.Sc. Digital Systems \u2022 CITEDI IPN",
      github: "https://github.com/drga9808/Machine-Learning-Algorithms",
      featured: true,
    },
    {
      title: "Toyota Hacks Blog",
      slug: "toyota-hacks-blog",
      description: "Full-stack blog with CRUD, authentication, Markdown support, and Cloudinary image hosting.",
      longDescription: "A full-stack blog platform for Toyota enthusiasts to share repair guidance and maintenance documentation. Built with Node.js and Express for the backend, EJS for template rendering, and MongoDB for persistent data storage.\n\nCore features include creating, editing, and deleting blog posts with Markdown support, image upload and management via Cloudinary, user registration and login with session-based authentication using Express-session, and a responsive frontend styled with Bootstrap.\n\nThe application is deployed on Fly.io with Cloudflare DNS and a custom domain at toyota-blog.drga98.com.",
      tech: ["Node.js", "Express", "EJS", "MongoDB", "Cloudinary"],
      context: "Personal Project",
      url: "https://toyota-blog.drga98.com",
      github: "https://github.com/drga9808/Toyota-hacks-blog",
    },
    {
      title: "LBG Auto-Clustering Algorithm",
      slug: "lbg-auto-clustering",
      description: "Automatic clustering based on the Linde-Buzo-Gray algorithm with 2D visualization.",
      longDescription: "An implementation of the Linde, Buzo, and Gray (LBG) algorithm — also known as the Generalized Lloyd algorithm — adapted from IoT clustering literature. Based on the original 1980 paper and methodology from \"Fundamentals of Internet of Things\" (Chapter 3), with modifications for automatic cluster optimization.\n\nThe project includes Python code for 2D computation and visualization, aiming to automatically determine both the optimal number of clusters and their positions based on data distribution patterns.\n\nOngoing work addresses handling clusters with no assigned data points, validation with larger datasets, displaying non-overlapping cluster boundaries, and confirming the stopping criterion.",
      tech: ["Python", "Jupyter"],
      context: "M.Sc. Digital Systems \u2022 CITEDI IPN",
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
      badge: "/badges/aws-ai-practitioner.png",
      verifyUrl: "https://www.credly.com/badges/71dab530-bd59-481b-b423-510d273cf41f/linked_in_profile",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
      badge: "/badges/aws-cloud-practitioner.png",
      verifyUrl: "https://www.credly.com/badges/87100de4-c588-4a33-bd3c-f7c81bb14895/linked_in_profile",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Apr 2025",
      badge: "/badges/azure-fundamentals.svg",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/drga98/8FE91842961D275A?sharingId=3CB7A474713F2C24",
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
      context: "Digital Forensics \u2022 Florida International University",
    },
    {
      title: "Module for Real-Time Capture and Storage of Parameters Associated with the Operation of Compute Nodes",
      publisher: "Telematica (CUJAE)",
      date: "May 2023",
      url: "https://revistatelematica.cujae.edu.cu/index.php/tele/article/view/577",
      abstract: "A Linux-based real-time monitoring system combining Shell scripts and C++ modules to capture, store, and analyze node-level data for parallel and distributed high-performance workloads.",
      context: "B.Eng. Telecom & Electronics \u2022 CUJAE",
    },
  ],
};
