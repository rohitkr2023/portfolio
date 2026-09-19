"use client";
import React, { useState, useEffect } from "react";
import { 
  ExternalLink, Mail, Phone, Send, Download, GraduationCap, 
  Briefcase, Award, ArrowUp, Code, Layers,
  Cpu, Database, Globe, Wrench, ShieldCheck, Sparkles, ChevronRight, 
  Loader2, CheckCircle2, Menu, X, Sun, Moon
} from "lucide-react";
import confetti from "canvas-confetti";
import Starfield from "@/components/Starfield";
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, ACHIEVEMENTS, EDUCATION } from "@/data/portfolio";

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const TIMELINE_SKILLS = [
  {
    side: "right",
    title: "FRONTEND ENGINEERING",
    subtitle: "React.js, Next.js, TypeScript, Tailwind CSS, Component Architecture",
    color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
    dot: "bg-cyan-400 shadow-cyan-400/50",
    tag: "UI / UX",
    tagBg: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
    icon: Layers
  },
  {
    side: "left",
    title: "DATA SCIENCE & ML",
    subtitle: "Python, Pandas, NumPy, Scikit-learn, Statistical Validation, Looker Studio",
    color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
    dot: "bg-purple-400 shadow-purple-400/50",
    tag: "AI & ML",
    tagBg: "bg-purple-500/15 text-purple-300 border border-purple-500/30",
    icon: Cpu
  },
  {
    side: "right",
    title: "BACKEND ARCHITECTURE",
    subtitle: "Node.js, Express.js, REST APIs, Microservices, JWT Authentication",
    color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    dot: "bg-emerald-400 shadow-emerald-400/50",
    tag: "API & SVC",
    tagBg: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    icon: Code
  },
  {
    side: "left",
    title: "DATABASE & DATA STORES",
    subtitle: "MongoDB, MySQL, Relational Schema Design, Aggregation Pipelines",
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    dot: "bg-amber-400 shadow-amber-400/50",
    tag: "STORAGE",
    tagBg: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    icon: Database
  },
  {
    side: "right",
    title: "CLOUD & DEVOPS",
    subtitle: "Google Cloud Platform (GCP), Git, GitHub Actions, Vercel Production",
    color: "border-sky-500/40 text-sky-400 bg-sky-500/10",
    dot: "bg-sky-400 shadow-sky-400/50",
    tag: "CLOUD",
    tagBg: "bg-sky-500/15 text-sky-300 border border-sky-500/30",
    icon: Globe
  },
  {
    side: "left",
    title: "ALGORITHMS & COMPUTING",
    subtitle: "C++, C, Data Structures & Algorithms, Systems Programming, OOPs",
    color: "border-indigo-500/40 text-indigo-400 bg-indigo-500/10",
    dot: "bg-indigo-400 shadow-indigo-400/50",
    tag: "CORE CS",
    tagBg: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30",
    icon: Wrench
  }
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("portfolio_theme", next);
  };

  const triggerDownloadConfetti = () => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.75 } });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "627e77a2-f63b-4ce1-8ca6-09e4c194a30e",
          from_name: "Portfolio Contact Form",
          to_email: "rohit.geca.kr@gmail.com",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMsg({ type: "success", text: "Thank you! Your message has been forwarded to my Gmail." });
        setFormData({ name: "", email: "", subject: "", message: "" });
        confetti({ particleCount: 110, spread: 80, origin: { y: 0.75 } });
      } else {
        setStatusMsg({ type: "error", text: "Something went wrong. Please email directly at rohit.geca.kr@gmail.com" });
      }
    } catch {
      setStatusMsg({ type: "error", text: "Failed to connect. Please email directly at rohit.geca.kr@gmail.com" });
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === "dark";

  return (
    <div className={isDark ? "" : "light-mode"}>
      <main className={`min-h-screen w-full relative overflow-x-hidden font-sans antialiased transition-colors duration-500 ${
        isDark ? "bg-[#07060f] text-slate-100 selection:bg-purple-600 selection:text-white" : "bg-[#f4f6fb] text-slate-900 selection:bg-cyan-500 selection:text-white"
      }`}>
        {isDark && <Starfield />}

        {/* LEFT FLOATING SOCIAL BAR (RESTORED TO LEFT WITH ZERO-OVERLAP POSITIONING) */}
        <aside className="fixed left-3 sm:left-5 lg:left-6 bottom-8 sm:bottom-12 z-40 hidden md:flex flex-col items-center gap-3.5">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noreferrer" 
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 shadow-lg ${
              isDark ? "bg-[#0c0919]/80 border-white/10 hover:border-purple-400 hover:bg-purple-500/20 text-slate-400 hover:text-white" : "bg-white/90 border-slate-200 hover:border-purple-500 hover:bg-purple-50 text-slate-600 hover:text-purple-600"
            }`}
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 shadow-lg ${
              isDark ? "bg-[#0c0919]/80 border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 text-slate-400 hover:text-white" : "bg-white/90 border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 text-slate-600 hover:text-cyan-600"
            }`}
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 shadow-lg ${
              isDark ? "bg-[#0c0919]/80 border-white/10 hover:border-pink-400 hover:bg-pink-500/20 text-slate-400 hover:text-white" : "bg-white/90 border-slate-200 hover:border-pink-500 hover:bg-pink-50 text-slate-600 hover:text-pink-600"
            }`}
            title="Email"
          >
            <Mail size={16} />
          </a>
          <div className={`w-[1px] h-14 sm:h-16 ${isDark ? "bg-gradient-to-b from-white/25 to-transparent" : "bg-gradient-to-b from-slate-400 to-transparent"}`} />
        </aside>

        {/* Capsule Header */}
        <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${
          isDark ? "bg-[#07060f]/85 border-white/[0.06]" : "bg-white/85 border-slate-200"
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <a href="#" className="text-xl font-black tracking-tight flex items-center gap-1">
              <span className={isDark ? "text-white" : "text-slate-900"}>{PERSONAL_INFO.name.split(" ")[0]}</span>
              <span className="text-cyan-400 text-2xl leading-none">.</span>
            </a>

            {/* Desktop Capsule Menu */}
            <nav className={`hidden md:flex items-center p-1 rounded-full backdrop-blur-lg border ${
              isDark ? "bg-white/[0.03] border-white/10" : "bg-slate-100 border-slate-200"
            }`}>
              {NAV_LINKS.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveNav(link.name)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? isDark ? "text-white bg-white/10 shadow-sm" : "text-slate-950 bg-white shadow-sm"
                        : isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isDark ? "border-white/10 bg-white/[0.04] text-amber-300 hover:bg-white/10" : "border-slate-200 bg-white text-indigo-600 hover:bg-slate-100 shadow-sm"
                }`}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              <a
                href="/resume.pdf"
                download="Rohit_Kumar_Resume.pdf"
                onClick={triggerDownloadConfetti}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-600/25 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Download size={14} /> Resume
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open Navigation Menu"
                className={`md:hidden w-9 h-9 rounded-xl border flex items-center justify-center transition-all shadow-sm ${
                  isDark ? "border-white/10 bg-white/[0.04] text-slate-200" : "border-slate-200 bg-white text-slate-800"
                }`}
              >
                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className={`md:hidden px-5 py-4 border-b space-y-2 backdrop-blur-2xl transition-all shadow-2xl ${
              isDark ? "bg-[#07060f]/95 border-white/10" : "bg-white/95 border-slate-200"
            }`}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                    isDark ? "text-slate-200 hover:bg-white/5 active:bg-white/10" : "text-slate-800 hover:bg-slate-100 active:bg-slate-200"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Rohit_Kumar_Resume.pdf"
                  onClick={() => {
                    triggerDownloadConfetti();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <Download size={15} /> Download Resume
                </a>
              </div>
            </div>
          )}
        </header>

        {/* HERO SECTION (WITH DEDICATED LEFT PADDING FOR NO OVERLAP) */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:pl-20 xl:pl-24 pt-24 sm:pt-28 pb-16 relative">
          <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] sm:text-xs font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Full-Stack &amp; Engineering Roles
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <p className={`text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  HELLO, I'M
                </p>
                <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </h2>
              </div>

              <div className={`inline-block px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-mono leading-relaxed ${
                isDark ? "bg-white/[0.03] border-white/10 text-cyan-300" : "bg-white border-slate-200 text-cyan-600 shadow-sm"
              }`}>
                MERN Stack • React.js • Next.js • Node.js • Python • GCP
              </div>

              <p className={`text-xs sm:text-base leading-relaxed max-w-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                I specialize in developing scalable, responsive web products and high-performance analytical systems — turning complex computational logic into seamless user experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-600/25 transition-all flex items-center justify-center gap-2"
                >
                  View Projects <ChevronRight size={14} />
                </a>
                <a
                  href="/resume.pdf"
                  download="Rohit_Kumar_Resume.pdf"
                  onClick={triggerDownloadConfetti}
                  className={`px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isDark ? "border-white/15 hover:border-cyan-400/50 bg-white/[0.02] hover:bg-white/[0.05] text-slate-200" : "border-slate-300 hover:border-cyan-500 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  <Download size={14} /> Download Resume
                </a>
              </div>

              {/* Mobile-only social row (since on desktop it is cleanly placed on the far left) */}
              <div className="flex md:hidden items-center gap-3 pt-2">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white" title="GitHub">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400" title="LinkedIn">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-pink-400" title="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Photo Card */}
            <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
              <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className={`relative rounded-3xl border p-2.5 sm:p-3 shadow-xl overflow-hidden ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-slate-200"
                }`}>
                  <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/50 relative">
                    <img
                      src="/profile.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c1a] via-transparent to-transparent opacity-50 pointer-events-none" />
                  </div>

                  <div className={`mt-2.5 sm:mt-3 px-3 py-2 rounded-xl border flex items-center justify-between text-xs ${
                    isDark ? "bg-white/[0.03] border-white/5" : "bg-slate-50 border-slate-100"
                  }`}>
                    <div>
                      <p className={`font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>{PERSONAL_INFO.name}</p>
                      <p className="text-[11px] font-mono text-cyan-400">Patna, India</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className={`py-16 sm:py-24 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-6xl mx-auto border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className={`w-full max-w-[240px] sm:max-w-xs rounded-3xl border p-2.5 sm:p-3 shadow-lg ${
                isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200"
              }`}>
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/40">
                  <img src="/profile.jpg" alt={PERSONAL_INFO.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-400/10">
                ✦ ABOUT ME
              </span>
              <h2 className={`text-2xl sm:text-4xl font-extrabold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Turning Complex Ideas into <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Digital Reality</span>
              </h2>
              <div className={`p-4 sm:p-6 rounded-2xl border ${
                isDark ? "bg-[#0e0c1a] border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-600 shadow-sm"
              }`}>
                <p className="text-xs sm:text-sm leading-relaxed">
                  I am a Full Stack Developer with hands-on experience building scalable web applications, real-time cloud integrations, and data-driven systems. Specializing in modern JavaScript frameworks (React, Next.js, Node.js), Python analytics, and cloud environments, my focus is delivering clean code with production-grade engineering standards.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Problem Solver</h4>
                    <p className={`text-xs mt-1 leading-normal ${isDark ? "text-slate-400" : "text-slate-500"}`}>Finding clean, maintainable solutions to software complexities.</p>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Clean &amp; Scalable Code</h4>
                    <p className={`text-xs mt-1 leading-normal ${isDark ? "text-slate-400" : "text-slate-500"}`}>Writing modular, testable, and production-optimized codebases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP TECHNICAL SKILLS */}
        <section id="skills" className={`py-16 sm:py-24 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-5xl mx-auto border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-400/10">
              ✦ TECHNICAL ARSENAL
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
              Areas of <span className="text-cyan-400">Expertise</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-emerald-400 opacity-60" />

            <div className="space-y-6 md:space-y-12">
              {TIMELINE_SKILLS.map((item) => {
                const Icon = item.icon;
                const isLeft = item.side === "left";

                return (
                  <div key={item.title} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between pl-8 md:pl-0">
                    
                    {/* Left Column (Desktop) */}
                    <div className="hidden md:block w-[45%]">
                      {isLeft && (
                        <div className={`p-6 rounded-2xl border hover:border-purple-500 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 relative group cursor-pointer ${
                          isDark ? "bg-[#0c0919] border-white/10" : "bg-white border-slate-200 shadow-sm"
                        }`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}>
                              <Icon size={18} />
                            </div>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${item.tagBg}`}>
                              {item.tag}
                            </span>
                          </div>
                          <h3 className={`text-base font-bold tracking-wide group-hover:text-purple-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                          <p className={`text-xs mt-2 font-mono leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.subtitle}</p>
                        </div>
                      )}
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-auto flex items-center justify-center z-20">
                      <div className={`w-3.5 h-3.5 rounded-full border-2 ${isDark ? "border-[#07060f]" : "border-white"} ${item.dot} shadow-md`} />
                    </div>

                    {/* Right Column (Desktop & Full Mobile View) */}
                    <div className="w-full md:w-[45%]">
                      <div className={`p-5 sm:p-6 rounded-2xl border hover:border-cyan-400 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 relative group cursor-pointer ${
                        !isLeft ? "md:block" : "md:hidden"
                      } ${isDark ? "bg-[#0c0919] border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.color}`}>
                            <Icon size={18} />
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${item.tagBg}`}>
                            {item.tag}
                          </span>
                        </div>
                        <h3 className={`text-sm sm:text-base font-bold tracking-wide group-hover:text-cyan-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                        <p className={`text-xs mt-2 font-mono leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>{item.subtitle}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & ACHIEVEMENTS */}
        <section id="experience" className={`py-16 sm:py-24 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-6xl mx-auto border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
              Experience &amp; <span className="text-cyan-400">Achievements</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Professional Experience + Certifications */}
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <Briefcase className="text-cyan-400" size={18} /> Professional Experience
                </h3>
                <div className="space-y-3.5">
                  {EXPERIENCE.map((exp) => (
                    <div 
                      key={exp.role} 
                      className={`p-4 sm:p-6 rounded-2xl border hover:border-cyan-400/80 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                        isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-2">
                        <div>
                          <h4 className={`text-sm sm:text-base font-bold group-hover:text-cyan-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{exp.role}</h4>
                          <p className="text-xs text-cyan-400 font-medium">@ {exp.company}</p>
                        </div>
                        <span className="self-start px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
                          {exp.period}
                        </span>
                      </div>
                      <ul className={`space-y-1.5 text-xs mt-3 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <ShieldCheck className="text-emerald-400" size={18} /> Professional Certifications
                </h3>
                <div className="space-y-2.5">
                  {[
                    { name: "Google Cloud Arcade Facilitator Certification", org: "Google Cloud Programs" },
                    { name: "Summer Entrepreneurship-II: Data Analytics (Grade A++)", org: "Edulogy Institute (ISO / AICTE)" },
                    { name: "Full Stack Web Development & Modern JavaScript", org: "Industry Training / Virtunexa" },
                    { name: "C++ Programming & Algorithmic Problem Solving", org: "Engineering Coursework" }
                  ].map((cert) => (
                    <div 
                      key={cert.name} 
                      className={`p-3.5 sm:p-4 rounded-xl border hover:border-emerald-400/80 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group cursor-pointer ${
                        isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <h5 className={`text-xs font-bold group-hover:text-emerald-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{cert.name}</h5>
                      <p className="text-[11px] text-emerald-400 font-mono mt-0.5">{cert.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <GraduationCap className="text-purple-400" size={18} /> Education
                </h3>
                <div className="space-y-3.5">
                  {EDUCATION.map((edu) => (
                    <div 
                      key={edu.degree} 
                      className={`p-4 sm:p-5 rounded-2xl border hover:border-purple-400/80 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 group cursor-pointer ${
                        isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                        <h4 className={`text-xs sm:text-sm font-bold group-hover:text-purple-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>{edu.degree}</h4>
                        <span className="self-start px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 border border-purple-500/25 text-purple-400 font-semibold whitespace-nowrap shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-purple-400">{edu.institution}</p>
                      <div className={`flex items-center justify-between text-xs mt-3 pt-2 border-t ${
                        isDark ? "text-slate-400 border-white/5" : "text-slate-500 border-slate-100"
                      }`}>
                        <span>{edu.location}</span>
                        <span className="font-mono text-emerald-400 font-bold">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className={`text-base sm:text-lg font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    <Award className="text-amber-400" size={18} /> Key Achievements
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/25 bg-amber-500/10">
                    Leadership
                  </span>
                </div>

                <div className="space-y-3">
                  {ACHIEVEMENTS.map((ach) => (
                    <div
                      key={ach.title}
                      className={`p-4 sm:p-5 rounded-2xl border border-amber-500/20 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 group cursor-pointer ${
                        isDark ? "bg-[#0e0c1a]" : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 group-hover:scale-150 transition-all shrink-0" />
                          <h5 className={`text-xs sm:text-sm font-bold tracking-tight group-hover:text-amber-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
                            {ach.title}
                          </h5>
                        </div>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase border shrink-0 ${ach.badgeStyle}`}>
                          {ach.tag}
                        </span>
                      </div>
                      <p className={`text-xs pl-4 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {ach.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TERMINAL CLI */}
        <section className={`py-14 sm:py-20 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-4xl mx-auto border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 shadow-xl font-mono text-[11px] sm:text-xs text-slate-200">
            <div className="bg-[#120f24] px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-slate-400 font-mono text-[11px]">guest@rohit-portfolio ~</span>
              <div className="w-8" />
            </div>
            <div className="p-4 sm:p-6 space-y-3 text-slate-300">
              <div>
                <p className="text-emerald-400 font-bold">&gt; whoami</p>
                <p className="text-white mt-0.5 pl-3 sm:pl-4">{PERSONAL_INFO.name}</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold">&gt; role</p>
                <p className="text-cyan-300 mt-0.5 pl-3 sm:pl-4">Full Stack Developer &amp; AI Engineer</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold">&gt; skills</p>
                <p className="text-purple-300 mt-0.5 pl-3 sm:pl-4 break-words">
                  ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Python", "GCP", "C++"]
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-emerald-400 font-bold">&gt; status</p>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold">Open to Work</span>
                <span className="w-2 h-3.5 bg-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className={`py-16 sm:py-24 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-6xl mx-auto border-t ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-400/10">
              ✦ SELECTED WORK
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {PROJECTS.map((proj) => (
              <div
                key={proj.title}
                className={`rounded-2xl overflow-hidden border hover:border-cyan-400/80 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 flex flex-col justify-between group shadow-sm ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  <div className={`px-4 py-2 border-b flex items-center justify-between ${
                    isDark ? "bg-[#120f24] border-white/5" : "bg-slate-50 border-slate-100"
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 tracking-wider uppercase font-semibold">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="relative w-full aspect-video bg-slate-900 p-2 flex items-center justify-center border-b border-white/5 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      onError={(e: any) => {
                        e.currentTarget.src = proj.fallback;
                      }}
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className={`font-bold text-sm sm:text-base group-hover:text-cyan-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
                        {proj.title}
                      </h3>
                      <div className="flex gap-2 text-slate-400">
                        <a href={proj.github} target="_blank" rel="noreferrer" className={`p-1 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`} title="View Source Code">
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a href={proj.live} target="_blank" rel="noreferrer" className={`p-1 ${isDark ? "hover:text-white" : "hover:text-slate-900"}`} title="Open Live App">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    <p className={`text-xs leading-relaxed mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{proj.description}</p>
                  </div>
                </div>

                <div className={`px-4 sm:px-6 pb-4 sm:pb-5 pt-2 flex flex-wrap gap-1.5 sm:gap-2 border-t ${
                  isDark ? "border-white/5" : "border-slate-100"
                }`}>
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={`py-16 sm:py-24 px-4 sm:px-6 md:pl-20 xl:pl-24 max-w-6xl mx-auto border-t relative ${isDark ? "border-white/[0.06]" : "border-slate-200"}`}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
            <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full bg-cyan-400/10">
              ✦ GET IN TOUCH
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
              Let's Start a <span className="text-cyan-400">Conversation</span>
            </h2>
            <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Feel free to reach out for collaborations, project inquiries, or software discussions.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-5 space-y-3 sm:space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 group block shadow-sm ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200"
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">EMAIL ME</p>
                  <p className={`text-xs font-semibold truncate group-hover:text-cyan-400 transition-colors ${isDark ? "text-white" : "text-slate-800"}`}>
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className={`flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl border hover:border-purple-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group block shadow-sm ${
                  isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200"
                }`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">CALL ME</p>
                  <p className={`text-xs sm:text-sm font-semibold group-hover:text-purple-400 transition-colors ${isDark ? "text-white" : "text-slate-800"}`}>
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>
            </div>

            <div className={`md:col-span-7 p-5 sm:p-7 rounded-3xl border shadow-lg ${
              isDark ? "bg-[#0e0c1a] border-white/10" : "bg-white border-slate-200 shadow-slate-100"
            }`}>
              <form onSubmit={handleContactSubmit} className="space-y-3.5 sm:space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs focus:outline-none focus:border-cyan-400 transition-colors ${
                      isDark ? "bg-black/40 border-white/10 text-white placeholder-slate-400" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs focus:outline-none focus:border-cyan-400 transition-colors ${
                      isDark ? "bg-black/40 border-white/10 text-white placeholder-slate-400" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs focus:outline-none focus:border-cyan-400 transition-colors ${
                      isDark ? "bg-black/40 border-white/10 text-white placeholder-slate-400" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none ${
                      isDark ? "bg-black/40 border-white/10 text-white placeholder-slate-400" : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:opacity-95 text-white text-xs uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending to Gmail...
                    </>
                  ) : (
                    <>
                      <Send size={15} /> SEND MESSAGE
                    </>
                  )}
                </button>

                {statusMsg && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      statusMsg.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                        : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                    }`}
                  >
                    {statusMsg.type === "success" && <CheckCircle2 size={15} className="shrink-0" />}
                    <span>{statusMsg.text}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`py-10 sm:py-12 px-4 sm:px-6 md:pl-20 xl:pl-24 border-t ${
          isDark ? "border-white/[0.06] bg-[#05040d]" : "border-slate-200 bg-white"
        }`}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>Available for New Engineering Opportunities</span>
              </div>
              <p className="text-xs text-slate-500">
                © 2026 {PERSONAL_INFO.name}. All Rights Reserved. • Designed with precision &amp; engineered for performance.
              </p>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isDark ? "bg-white/5 border-white/10 hover:border-cyan-400 text-slate-400 hover:text-white" : "bg-slate-100 border-slate-200 hover:border-cyan-500 text-slate-600 hover:text-slate-900"
              }`}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

