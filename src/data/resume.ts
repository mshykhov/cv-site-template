import type { ResumeConfig } from "@/types/resume";

// This sample profile is fictional. Replace it with your own information.
const config: ResumeConfig = {
  meta: {
    title: "Alex Example - Product Engineer",
    description:
      "A clean, configurable resume website for a fictional product engineer.",
    url: "https://example.com",
    keywords: ["Alex Example", "Product Engineer", "TypeScript", "React", "Node.js"],
    locale: "en_US",
  },

  sourceRepo: "https://github.com/your-username/cv-site-template",

  personal: {
    name: "Alex Example",
    role: "Product Engineer",
    initials: "AE",
  },

  contacts: [
    { type: "email", label: "Email", value: "alex@example.com" },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "https://linkedin.com/in/example-profile",
    },
    {
      type: "github",
      label: "GitHub",
      value: "https://github.com/example-user",
    },
  ],

  resume: {
    enabled: false,
    url: "/resume.pdf",
    filename: "alex-example-resume.pdf",
    label: "Download resume",
  },

  ogImage: {
    tagline: "Product Engineer · Web platforms",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    domains: ["Developer Tools", "B2B SaaS", "Design Systems"],
  },

  summary: [
    "Product engineer focused on accessible, reliable web applications and the systems behind them.",
    "Experienced in taking features from discovery through delivery, including product decisions, implementation, testing, and measurement.",
    "Enjoys simplifying complex workflows and helping teams build with clear, reusable patterns.",
  ],

  experience: [
    {
      id: "contoso-product-engineer",
      company: "Contoso",
      title: "Senior Product Engineer",
      period: "2022 - Present",
      domain: "B2B workflow platform",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
      highlights: [
        "Led a workspace redesign that reduced the time needed to complete common customer tasks by 30%.",
        "Built a shared component library used across four product teams.",
        "Improved release confidence with integration tests and lightweight production monitoring.",
      ],
    },
    {
      id: "northwind-software-engineer",
      company: "Northwind Studio",
      title: "Software Engineer",
      period: "2019 - 2022",
      domain: "Digital products and internal tools",
      stack: ["JavaScript", "React", "Express", "PostgreSQL", "Docker"],
      highlights: [
        "Delivered customer portals and internal tools for small product teams.",
        "Introduced automated accessibility checks into the development workflow.",
        "Documented reusable delivery patterns for authentication, forms, and data tables.",
      ],
    },
  ],

  skills: [
    { name: "Languages", items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"] },
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Accessibility"] },
    { name: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL"] },
    { name: "Delivery", items: ["Docker", "AWS", "GitHub Actions", "Observability"] },
    { name: "Practices", items: ["Product discovery", "Design systems", "Automated testing"] },
  ],
};

export default config;
