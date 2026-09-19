export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  greetings: ["Hola", "Привет", "Namaste", "Hello", "Bonjour"],
  tagline: "Full Stack Developer",
  role: "Full Stack Developer",
  aboutBio: "I'm a Full Stack Developer specializing in building scalable web platforms, high-performance data pipelines, and intelligent AI-driven applications with production-ready architectures.",
  from: "Patna, Bihar, India",
  email: "rohit.geca.kr@gmail.com",
  phone: "+91-8340452698",
  github: "https://github.com/rohitkr2023",
  linkedin: "https://www.linkedin.com/in/rohit-kumar-b482752ab/",
  instagram: "https://www.instagram.com/_rohit_raj09/",
};

export const SKILL_CATEGORIES = {
  all: [
    { name: "React.js", category: "Frontend", level: 90 },
    { name: "Next.js", category: "Frontend", level: 85 },
    { name: "JavaScript", category: "Frontend", level: 90 },
    { name: "HTML5", category: "Frontend", level: 95 },
    { name: "CSS3", category: "Frontend", level: 90 },
    { name: "Tailwind CSS", category: "Frontend", level: 92 },
    { name: "Bootstrap", category: "Frontend", level: 85 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express.js", category: "Backend", level: 80 },
    { name: "REST APIs", category: "Backend", level: 85 },
    { name: "MongoDB", category: "Backend", level: 80 },
    { name: "MySQL", category: "Backend", level: 75 },
    { name: "Google Cloud (GCP)", category: "Tools", level: 88 },
    { name: "C++", category: "Tools", level: 88 },
    { name: "C", category: "Tools", level: 80 },
    { name: "Python", category: "Tools", level: 82 },
    { name: "Git & GitHub", category: "Tools", level: 90 },
    { name: "VS Code", category: "Tools", level: 95 },
    { name: "Google Looker Studio", category: "Tools", level: 75 }
  ],
  frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
  tools: ["Google Cloud (GCP)", "C++", "C", "Python", "Git", "GitHub", "VS Code", "Google Looker Studio"]
};

export const PROJECTS = [
  {
    title: "ClipCraft AI",
    badge: "AI Media Tool",
    description: "Intelligent video snippet creation and editing tool built with full-frame reel processing and automated ingestion pipeline.",
    image: "/clipcraft.png",
    fallback: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    live: "https://clipcraft-frontend.vercel.app/",
    github: "https://github.com/rohitkr2023/clipcraft-ai",
    tech: ["Next.js", "React", "Tailwind CSS", "AI Engine"]
  },
  {
    title: "ServiceConnect Pro",
    badge: "Full Stack Platform",
    description: "Professional services marketplace connecting end customers with verified local service providers with live slot booking.",
    image: "/serviceconnect.png",
    fallback: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    live: "https://service-connect-pro-sable.vercel.app/",
    github: "https://github.com/rohitkr2023/service-connect-pro",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "ResearchPilot AI",
    badge: "AI Research Engine",
    description: "Autonomous academic research agent designed to summarize literature, extract findings, and synthesize complex scientific papers in seconds.",
    image: "/researchpilot.png",
    fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
    live: "https://researchpilot-sigma.vercel.app/",
    github: "https://github.com/rohitkr2023/researchpilot-ai",
    tech: ["Python", "Streamlit", "LLM APIs", "FastAPI"]
  },
  {
    title: "Software Hub",
    badge: "Production Web App",
    description: "Windows software discovery platform with categorization, fast search indexing, and optimized SEO metadata.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    live: "https://github.com/rohitkr2023/software-Hub",
    github: "https://github.com/rohitkr2023/software-Hub",
    tech: ["Next.js", "React.js", "Tailwind CSS"]
  },
  {
    title: "Flood Risk Prediction System",
    badge: "ML Project",
    description: "Machine learning model trained on multi-spectral environmental variables for real-time flood forecasting.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    live: "https://github.com/rohitkr2023/flood-risk-system",
    github: "https://github.com/rohitkr2023/flood-risk-system",
    tech: ["Python", "Machine Learning", "Streamlit", "Pandas"]
  },
  {
    title: "Satellite Land Cover Classification",
    badge: "GeoAI Web App",
    description: "Deep learning web application for automated land cover segmentation and multispectral satellite image classification.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    live: "https://github.com/rohitkr2023/Satellite-Land-Cover-Classification-Web-Application",
    github: "https://github.com/rohitkr2023/Satellite-Land-Cover-Classification-Web-Application",
    tech: ["Python", "Deep Learning", "Satellite Imagery", "Streamlit"]
  }
];

export const EXPERIENCE = [
  {
    role: "Data Analytics Intern",
    company: "Edulogy Institute",
    period: "March 2026 - April 2026",
    type: "Online (Grade: A++)",
    badgeColor: "from-amber-500 to-orange-600",
    bullets: [
      "Completed intensive 6-week Summer Entrepreneurship-II Program in Data Analytics, awarded Grade A++ (85%+ score).",
      "Worked on end-to-end data processing pipelines, data wrangling, and metric evaluation for business models.",
      "Conducted exploratory data analysis (EDA), pattern recognition, and statistical validation across diverse analytical datasets."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "NIELIT Patna",
    period: "Recent",
    type: "On-Site",
    badgeColor: "from-purple-500 to-indigo-600",
    bullets: [
      "Analyzed structured datasets using Python, Pandas, and SQL to extract actionable trends and business insights.",
      "Built exploratory data analysis (EDA) workflows and statistical models for data validation and pattern identification.",
      "Designed interactive dashboards and visual reports to communicate analytical findings clearly to cross-functional teams."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Virtunexa",
    period: "Feb 2025",
    type: "Remote",
    badgeColor: "from-pink-500 to-rose-600",
    bullets: [
      "Developed responsive and reusable web components using React.js, HTML5, CSS3, JavaScript, and Bootstrap.",
      "Integrated REST APIs and optimized UI rendering for seamless end-user experience.",
      "Maintained version control workflows on GitHub following strict clean-code architecture."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "3x Google Student Ambassador",
    tag: "Google",
    badgeStyle: "border-amber-500/40 bg-amber-500/10 text-amber-500 dark:text-amber-300",
    desc: "Selected to represent Google programs, promoting developer technologies and driving campus-wide technical initiatives."
  },
  {
    title: "Google Cloud Arcade Facilitator",
    tag: "GCP Mentor",
    badgeStyle: "border-sky-500/40 bg-sky-500/10 text-sky-500 dark:text-sky-300",
    desc: "Guided 100+ learners through hands-on cloud architecture labs, infrastructure deployment badges, and skill certifications."
  },
  {
    title: "GDG Co-Lead",
    tag: "Leadership",
    badgeStyle: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 dark:text-emerald-300",
    desc: "Organized developer conferences, hands-on hack nights, and peer-to-peer technical workshops for budding engineers."
  },
  {
    title: "GeeksforGeeks Campus Mantri",
    tag: "Leadership",
    badgeStyle: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 dark:text-emerald-300",
    desc: "Spearheaded campus outreach initiatives, boosting coding competition engagement and structured algorithmic problem-solving."
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    institution: "Government Engineering College, Arwal",
    period: "2023 - 2027",
    score: "CGPA: 8.25",
    location: "Bihar, India"
  },
  {
    degree: "Class XII (ISC - PCM)",
    institution: "S.R.P.S Senior Secondary School, Patna",
    period: "2021 - 2023",
    score: "70.2%",
    location: "Bihar, India"
  },
  {
    degree: "Class X",
    institution: "Holy Faith International School, Patna",
    period: "2020 - 2021",
    score: "67.4%",
    location: "Bihar, India"
  }
];
