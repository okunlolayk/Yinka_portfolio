import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yinka Okunlola — Research Assistant and Academic Writer",
  author: "Yinka Okunlola",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/Okunlolayk" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/yinka-okunlola/" },
    { text: "Github", href: "https://github.com/okunlolayk" },
    { text: "Youtube", href: "https://www.youtube.com/channel/UC-K-HP08mM0Uq4HafJNityA?sub_confirmation=1" },
   // { text: "Dribbble", href: "https://github.com/okunlolayk" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Yinka Okunlola",
    specialty: "Research Assistant and Academic Writer",
    summary:
  "Academic Writer & Researcher based in Lagos, Nigeria. I specialize in biomedical research, academic writing, data analysis, and content creation with expertise in physiology and health sciences.",
email: "yinkaokunlola1@gmail.com",
},
experience: [
  {
    company: "Afriuk Consults",
    position: "Compliance Lead & Research Assistant",
    startDate: "November 2024",
    endDate: "Present",
    summary: [
      "Analyzed and optimized organizational workflows, improving human resource efficiency and ensuring compliance with evolving academic and operational standards across all project deliverables.",
      "Led cross-functional teams in end-to-end project management for academic deliverables including thesis writing and curriculum development, ensuring 100% timely completion while maintaining quality benchmarks.",
      "Researched, tested, and trained teams on adoption of digital collaboration tools (Zoho Workspace, ClickUp, Zoom, Quillbot), enhancing virtual collaboration efficiency and streamlining academic research processes.",
    ],
  },
  {
    company: "Afriuk Consults",
    position: "Academic/Research Writer",
    startDate: "February 2024",
    endDate: "Present",
    summary: [
      "Authored high-quality academic content including research papers, literature reviews, and science articles spanning physiology, nursing, and public health for UK institutions, maintaining rigorous academic standards.",
      "Demonstrated expertise in statistical data analysis using Prism GraphPad, SPSS, and Microsoft Excel to support research objectives and deliver data-driven insights for academic projects.",
      "Managed multiple concurrent projects while meeting tight deadlines, leveraging strong analytical and problem-solving skills to deliver impactful academic content and editorial services including ebook editing using KDP and Calibre.",
    ],
  },
  {
    company: "University of Lagos",
    position: "Research Student & Virtual Research Assistant",
    startDate: "2022",
    endDate: "Present",
    summary: [
      "Conducted extensive literature reviews and data synthesis for biomedical research projects, utilizing advanced analytical tools (SPSS, Prism GraphPad) to ensure accuracy and generate actionable insights.",
      "Investigated effects of high salt diets on blood pressure through invasive and non-invasive measurements, performing molecular analysis using Ion Selective Electrode Analysis (ISE) and ELISA techniques.",
      "Managed research data organization and lab records with strict compliance to research protocols, contributing to preparation of research reports, presentations, and academic publications.",
    ],
  },
  {
    company: "Various Schools (Nigeria)",
    position: "Biological Science Teacher & Science Content Writer",
    startDate: "2018",
    endDate: "2021",
    summary:
      "Developed and taught comprehensive Biology curriculum for students aged 11-18, aligning content with Nigerian (WAEC, NECO, JAMB) and British (GCSE, A-level) examination standards. Concurrently authored engaging science content on physiology and health topics, implementing SEO strategies and using markup languages (HTML, Markdown) to create reader-friendly content that met W3C standards, significantly boosting visibility and engagement.",
  },
],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I am Yinka Okunlola, a research assistant and academic writer with a master's degree in biomedical science. I have experience in conducting comprehensive research and writing peer-reviewed publications. My passion for research and academic writing drives me to constantly refine my skills to produce high-quality academic output. I focus on providing high-quality academic writing services and delivering exceptional assistance in various academic areas, including research paper writing, essay writing, proofreading/editing and AI reviews. My aim is to cater to the diverse needs of students and professionals seeking academic support. My commitment is to ensure the highest standards of academic excellence in every sentence of writing.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
