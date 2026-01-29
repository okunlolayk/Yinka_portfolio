import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Yinka Okunlola — Research-Driven Writing Strategist",
  author: "Yinka Okunlola",
  description:
  "Academic Writer & Researcher based in Lagos, Nigeria. I specialize in biomedical research, academic writing, data analysis, and content creation with expertise in physiology and health sciences.",
  lang: "en",
  siteLogo: "/yinka-small.jpg",
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
    specialty: "Research-Driven Writing Strategist",
    summary:
  "I help creators, students, and businesses turn complex ideas into clear, persuasive, and high-performing content—across academic research, blogs, and digital media.",
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
      name: "Blog Writing",
      summary: "Authored and published articles on various scientific topics, demonstrating expertise in communicating complex ideas.",
      linkPreview: "/",
      linkSource: "https://the10xwriter.com.ng",
      image: "/newblog.png",
    },
    {
      name: "Academic Essay",
      summary: "Crafting high-quality, well-researched academic essays - with thoroughly researched content, proper citations, and a coherent structure that meets academic standards.",
      linkPreview: "/",
      linkSource: "https://the10xwriter.com.ng",
      image: "/newessay.png",
    },
    {
      name: "Thesis/Dessertation",
      summary: "Producing high-quality research papers from proposal to final manuscript- well-researched content, proper citations, and structured papers to meet academic standards and save you time.",
      linkPreview: "/",
      linkSource: "https://the10xwriter.com.ng",
      image: "/newthesis.png",
    },
      {
      name: "Data Analysis",
      summary: "Design questionaires/interviews, collect and analyse data to draw insights that answer research questions. From Microsoft Excel to GraphPad Prism and SPSS, high quality techniques are used to run statistical tests and informative visualization",
      linkPreview: "/",
      linkSource: "https://the10xwriter.com.ng",
      image: "/newdata.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Yinka Okunlola. I help creators, students, and businesses turn complex ideas into clear, persuasive, and high-performing content. 
      I’m a research assistant and academic writing specialist with a master’s degree in biomedical science and hands-on experience producing rigorous, publication-ready research and peer-reviewed academic work. My training in scientific research shaped how I think, write, and evaluate information—long before content became a digital commodity. Working deeply with research changed how I view writing.
      In a world saturated with unrefined information, authority is no longer optional—it’s the differentiator. Clarity, evidence, and structure are what separate content that merely exists from content that influences, ranks, and converts. That’s why I apply research methodologies and evidence-based thinking not only to academic publications, but also to writing designed for visibility, engagement, and monetization. 
      I work at the intersection of academic rigor and digital performance, helping ideas travel across journals, blogs, newsletters, books, and digital media—without losing credibility or intent. 
      My commitment is simple: to help you build authority through writing, ensuring every sentence reinforces trust, clarity, and purpose.
    `,
    image: "/yinka-big.jpg",
  },
};

// #5755ff
