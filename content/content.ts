export const site = {
  name: "David Frost",
  title: "Software Engineer",
  location: "Hoboken, NJ",
  education: "Stevens Institute of Technology — B.E. Software Engineering, 2021–2025",
  email: "Dfrost3374@gmail.com",
  linkedin: "https://www.linkedin.com/in/davefrost525",
  github: "https://github.com/davefrost5",
  avatar: "https://avatars.githubusercontent.com/u/92494973?v=4",
  tagline:
    "Full-stack engineer building platforms at the intersection of sports, energy, and healthcare.",
  intro:
    "I'm David Frost, a software engineer based in Hoboken, NJ. I studied Software Engineering at Stevens Institute of Technology (2021–2025) and now lead engineering as CTO at Discover NIL while continuing to ship products across React Native, Next.js, and real-time systems.",
};

export type WorkProject = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  repoUrls?: string[];
  pressUrl?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const work: WorkProject[] = [
  {
    slug: "discover-nil",
    company: "Discover NIL",
    role: "CTO",
    period: "Nov 2025–Present",
    location: "Hoboken, NJ",
    url: "https://www.discovernil.com/",
    summary:
      "Leading engineering for a dual-platform NIL marketplace serving athletes and university partners.",
    highlights: [
      "Dual platform: React Native athlete app + Next.js university/brand portal",
      "235k+ athletes across 25 sports on the platform",
      "SQL and Python data pipelines for athlete matching and outreach analytics",
      "Social API integrations for athlete discovery and engagement",
      "Leading a 3-engineer team; 600+ university outreach partnerships",
    ],
    stack: ["React Native", "Next.js", "TypeScript", "SQL", "Python"],
  },
  {
    slug: "flexgen",
    company: "FlexGen",
    role: "Full-Stack SWE",
    period: "May 2024–May 2025",
    location: "Durham, NC",
    url: "https://www.flexgen.com/",
    summary:
      "Built React UI within a 10-person pod for FlexGen's HybridOS energy storage platform.",
    highlights: [
      "Developed React UI components for energy storage monitoring and control",
      "Worked in a 10-person cross-functional pod on HybridOS",
      "Real-time dashboard for battery storage system performance",
    ],
    stack: ["React", "TypeScript", "Real-time dashboards"],
  },
  {
    slug: "sync-prosthetics",
    company: "SYNC Designs / SYNC Prosthetics",
    role: "Co-Founder",
    period: "Sep 2024–",
    location: "Hoboken, NJ",
    url: "https://senior-design-project-delta.vercel.app",
    repoUrls: [
      "https://github.com/davefrost5/SeniorDesignProject",
      "https://github.com/davefrost5/SENIORDESPY",
    ],
    pressUrl:
      "https://www.stevens.edu/news/life-tech-at-10th-annual-stevens-innovation-expo",
    summary:
      "Co-founded SYNC to build an EEG-controlled hand exoskeleton for prosthetics research.",
    highlights: [
      "EEG hand exoskeleton with 84% motor imagery classification accuracy",
      "Zero-calibration onboarding for 30+ users in testing",
      "L3Harris Innovation Award winner at Stevens Innovation Expo",
      "Live demo site and open-source firmware/software repositories",
    ],
    stack: ["Python", "EEG signal processing", "Embedded systems", "React"],
  },
  {
    slug: "smartpatient-medical",
    company: "SmartPatient Medical",
    role: "Full-Stack Engineer",
    period: "Sep 2022–Dec 2023",
    location: "Hoboken, NJ",
    summary:
      "Built a HIPAA-aware patient portal for a medical startup in Hoboken. No public website.",
    highlights: [
      "HIPAA-aware patient portal with role-based access controls",
      "Full-stack development from database schema to clinician-facing UI",
      "Secure handling of protected health information",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "HIPAA compliance"],
  },
];

export const about = {
  headline: "About",
  paragraphs: [
    "I'm David Frost, a software engineer from Hoboken, NJ. I graduated from Stevens Institute of Technology with a B.E. in Software Engineering (2021–2025), where I co-founded SYNC Prosthetics and won the L3Harris Innovation Award at the Stevens Innovation Expo.",
    "Today I serve as CTO at Discover NIL, building a dual-platform marketplace that connects 235k+ athletes with university and brand partners. Before that, I spent a year at FlexGen in Durham building real-time energy storage dashboards, and earlier built HIPAA-aware systems at SmartPatient Medical.",
    "I care about shipping products that work in the real world — whether that's a React Native app used by hundreds of thousands of athletes, a battery monitoring dashboard, or an EEG exoskeleton that classifies motor imagery without calibration.",
  ],
  skills: [
    "TypeScript / JavaScript",
    "React & Next.js",
    "React Native",
    "Python & SQL",
    "Real-time systems",
    "HIPAA-aware development",
  ],
};

export const contact = {
  headline: "Contact",
  message:
    "I'm open to conversations about engineering leadership, full-stack roles, and interesting product work. Reach out by email or LinkedIn — no phone listed on this site.",
};

export const resume = {
  headline: "Resume",
  downloadNote:
    "This page summarizes David's experience. For a PDF resume, email Dfrost3374@gmail.com.",
  sections: work.map((project) => ({
    title: `${project.role} — ${project.company}`,
    period: project.period,
    location: project.location,
    bullets: project.highlights,
  })),
  education: site.education,
};

/** Paste LinkedIn post URLs here — cards fetch OG metadata via Microlink. */
export const linkedinPosts: string[] = [
  "https://www.linkedin.com/posts/davefrost525_discover-nil-activity-7477432308610969600-z-pe",
  "https://www.linkedin.com/posts/dave-frost-9025a3248_the-stevens-innovation-expo-is-coming-up-activity-7323075848230653953-VLe_",
];

export const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return work.find((p) => p.slug === slug);
}
