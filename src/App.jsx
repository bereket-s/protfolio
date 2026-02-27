import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  User,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const profileImage = "/profile-suit.png";
const linkedinUrl = "https://linkedin.com/in/bereketshewarega";
const cvUrl = "/Bereket_Shewarega_Tsegaye_Resume.pdf";
const emailAddress = "bereketshewaregatsegaye@gmail.com";

const roles = [
  "Project Management Professional",
  "MSc in Computational Science Student",
  "Data & Dashboard Enthusiast",
  "Trader & Automation Explorer",
];

const stats = [
  { value: 5, suffix: "+", label: "Project Areas" },
  { value: 10, suffix: "+", label: "Core Skills" },
  { value: "Banking + IT", suffix: "", label: "Industry Exposure" },
  { value: "Growth", suffix: "-driven", label: "Mindset" },
];

const quickHighlights = [
  "Project coordination",
  "Analytics & dashboards",
  "Technical documentation",
  "Banking solution support",
  "Trading system exploration",
  "Professional presentations",
];

const skillsData = [
  { label: "Project Management", pct: 88 },
  { label: "Data Analytics", pct: 82 },
  { label: "Dashboard Design", pct: 80 },
  { label: "Python", pct: 70 },
  { label: "SQL", pct: 72 },
  { label: "Power BI", pct: 78 },
  { label: "Research & Documentation", pct: 90 },
  { label: "Business Analysis", pct: 84 },
  { label: "Trading Systems Concepts", pct: 65 },
  { label: "Reporting & Presentation", pct: 86 },
];

const achievements = [
  {
    title: "Project coordination in banking and IT environments",
    description:
      "Built hands-on professional experience supporting planning, delivery follow-up, communication, and execution discipline across solution-focused implementations.",
    icon: Briefcase,
  },
  {
    title: "Advanced academic work in computational science and analytics",
    description:
      "Strengthened analytical thinking, reporting, research writing, dashboard interpretation, and structured problem solving through MSc-level study and project work.",
    icon: BarChart3,
  },
  {
    title: "Growing portfolio in automation and trading systems",
    description:
      "Explored trading logic, indicators, workflows, and modular system thinking with strong curiosity for continuous improvement and automation design.",
    icon: TrendingUp,
  },
  {
    title: "Strong engineering foundation",
    description:
      "Applied disciplined technical thinking from Electrical and Computer Engineering to digital solutions, structured analysis, and practical problem solving.",
    icon: Code2,
  },
];

const projectManagementProjects = [
  {
    title: "Interactive Teller Machine (ITM) Projects",
    icon: Building2,
    description:
      "Supported coordination and implementation follow-up for ITM supply and installation projects delivered for major banking clients.",
    points: [
      "Contributed to ITM project support for Dashen Bank, Buna Bank, and Commercial Bank of Ethiopia (CBE).",
      "Coordinated activities, implementation progress, and site-related follow-up with teams and stakeholders.",
      "Helped maintain structured execution across installation and delivery workflows.",
    ],
  },
  {
    title: "IBM Storage V7000 Installation for Dashen Bank",
    icon: Cpu,
    description:
      "Provided deployment coordination and implementation follow-up support for the IBM Storage V7000 installation project.",
    points: [
      "Supported implementation scheduling and delivery follow-up.",
      "Worked with technical teams and stakeholders to maintain progress visibility.",
      "Contributed to organized execution and project tracking during deployment activities.",
    ],
  },
  {
    title: "Firewall Installation for Ethiopian Post Office",
    icon: ShieldCheck,
    description:
      "Supported site and activity coordination for a firewall installation project, helping keep implementation tasks aligned and visible.",
    points: [
      "Helped coordinate site activities and implementation-related follow-up.",
      "Supported communication flow around project actions and technical progress.",
      "Contributed to structured tracking of delivery and execution tasks.",
    ],
  },
  {
    title: "TMS Implementation for Siinqee Bank",
    icon: Target,
    description:
      "Supported deployment coordination for a TMS implementation project designed to strengthen ATM management operations.",
    points: [
      "Assisted with implementation coordination and progress tracking.",
      "Supported organized execution across deployment-related activities.",
      "Helped maintain delivery focus through follow-up and documentation support.",
    ],
  },
  {
    title: "Digital Banking Branch Support for CBE",
    icon: LayoutDashboard,
    description:
      "Contributed implementation support for digital banking branch work at CBE, helping align follow-up, reporting, and execution tasks.",
    points: [
      "Supported coordination across delivery and implementation workflows.",
      "Contributed to project documentation, updates, and action tracking.",
      "Helped reinforce structured communication and execution support.",
    ],
  },
];

const projects = [
  {
    title: "Student Performance Analytics Dashboard",
    category: "Data Analytics",
    icon: BarChart3,
    description:
      "Designed an academic analytics solution focused on student data interpretation, performance monitoring, and predictive insight presentation through a dashboard-oriented approach.",
    details: [
      "Explored how analytics can support evidence-based educational decisions.",
      "Focused on presenting insights clearly through a professional dashboard experience.",
      "Strengthened reporting, visualization, and data storytelling skills.",
    ],
    tags: ["Power BI", "Prediction", "Dashboard", "Analytics"],
  },
  {
    title: "Banking & IT Solutions Project Coordination",
    category: "Project Management",
    icon: Briefcase,
    description:
      "Contributed to project-oriented work related to banking and IT solutions, with emphasis on coordination, documentation, communication, follow-up, and organized execution.",
    details: [
      "Supported delivery-focused project activities in professional environments.",
      "Worked with structured documentation and communication practices.",
      "Built practical understanding of stakeholder coordination and workflow management.",
    ],
    tags: ["Coordination", "Planning", "Documentation", "Delivery"],
  },
  {
    title: "MetaTrader 5 Trading Bot Exploration",
    category: "Trading & Automation",
    icon: LineChart,
    description:
      "Worked around modular trading bot concepts including strategy structure, indicators, trade management logic, and refinement opportunities for better automation flow.",
    details: [
      "Reviewed and improved trading-system thinking across multiple components.",
      "Explored structured automation design for market-related workflows.",
      "Connected analytical thinking with strategy and execution logic.",
    ],
    tags: ["Python", "Strategy", "Automation", "MT5"],
  },
  {
    title: "Academic Research & Documentation Projects",
    category: "Research",
    icon: Database,
    description:
      "Produced and refined academic documentation, structured project explanations, technical writeups, and presentation materials with a focus on clarity and professionalism.",
    details: [
      "Improved formal reporting and research communication skills.",
      "Developed experience in formatting, presenting, and organizing technical content.",
      "Strengthened ability to translate complex work into understandable documentation.",
    ],
    tags: ["Research", "Documentation", "Presentation", "Academic Writing"],
  },
];

const timeline = [
  {
    title: "MSc in Computational Science",
    subtitle: "Britts Imperial University College, UAE",
    icon: GraduationCap,
    description:
      "Currently building deeper capability in computational science, analytics, dashboards, research, predictive thinking, and data-driven decision support.",
  },
  {
    title: "Junior Project Management Expert",
    subtitle: "Moti Engineering PLC",
    icon: Briefcase,
    description:
      "Worked on project management responsibilities across banking and IT solution initiatives, strengthening execution, communication, and coordination skills.",
  },
  {
    title: "BSc in Electrical & Computer Engineering",
    subtitle: "AASTU",
    icon: Code2,
    description:
      "Built a strong technical base that supports systematic thinking, digital problem solving, and cross-functional understanding.",
  },
];

/* ─────────────────────────────────────────
   PARTICLES CANVAS
───────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NUM = 70;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
    }));

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const particleColor = isDark ? "rgba(139,92,246,0.6)" : "rgba(6,182,212,0.4)";
      const lineColor = isDark ? "rgba(139,92,246," : "rgba(6,182,212,";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx *= 0.98; p.vy *= 0.98; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor + alpha + ")";
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

/* ─────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────── */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", onMove);

    let animId;
    const lerp = (a, b, n) => a + (b - a) * n;
    const tick = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => ringRef.current?.classList.add("hovered");
    const onLeave = () => ringRef.current?.classList.remove("hovered");
    const els = document.querySelectorAll("a, button, .expand-card-button, .filter-btn, .badge, .mini-tile");
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

/* ─────────────────────────────────────────
   TYPED ROLE TEXT
───────────────────────────────────────── */
function TypedRole() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | erasing

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 200);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <div className="role-rotator">
      <span>{displayed}</span>
      <span className="typed-cursor" />
    </div>
  );
}

/* ─────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────── */
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || typeof value !== "number") return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  if (typeof value !== "number") {
    return <span ref={ref}>{value}{suffix}</span>;
  }
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─────────────────────────────────────────
   SKILL BAR
───────────────────────────────────────── */
function SkillBar({ label, pct, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="skill-bar-row" ref={ref}>
      <div className="skill-bar-header">
        <span className="skill-bar-label">{label}</span>
        <span className="skill-bar-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.42, 0, 0.58, 1] }}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SPOTLIGHT CARD WRAPPER
───────────────────────────────────────── */
function SpotlightCard({ className, children, style }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const spotlight = card.querySelector(".card-spotlight");
    if (spotlight) {
      spotlight.style.background = `radial-gradient(340px circle at ${x}px ${y}px, rgba(6,182,212,0.08) 0%, transparent 70%)`;
      spotlight.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    const spotlight = card.querySelector(".card-spotlight");
    if (spotlight) spotlight.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className ?? ""}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-spotlight" />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────── */
function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text" style={{ marginTop: 14, maxWidth: 680, margin: "14px auto 0" }}>{text}</p> : null}
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION DIVIDER
───────────────────────────────────────── */
function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="divider-dot" />
      <div className="divider-dot" style={{ opacity: 0.5 }} />
      <div className="divider-dot" style={{ opacity: 0.25 }} />
    </div>
  );
}

/* ─────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────── */
function ThemeToggle({ themeMode, setThemeMode }) {
  const options = [
    { key: "auto", label: "Auto", icon: Monitor },
    { key: "light", label: "Light", icon: Sun },
    { key: "dark", label: "Dark", icon: Moon },
  ];

  return (
    <div className="theme-toggle">
      {options.map((option) => {
        const Icon = option.icon;
        const active = themeMode === option.key;
        return (
          <button
            key={option.key}
            className={`theme-option ${active ? "active" : ""}`}
            onClick={() => setThemeMode(option.key)}
          >
            <Icon size={15} />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────
   EXPANDABLE CARD
───────────────────────────────────────── */
function ExpandableCard({ item, index, openIndex, setOpenIndex, accent = "cyan" }) {
  const Icon = item.icon;
  const isOpen = openIndex === index;

  return (
    <motion.button
      type="button"
      className="expand-card-button"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      <SpotlightCard>
        <div className="expand-top">
          <div className="expand-head">
            <div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className={`icon-box ${accent}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div className="mini-pill">{isOpen ? "Hide ↑" : "View ↓"}</div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="expand-body"
            >
              {item.points?.map((point) => (
                <div className="list-row" key={point}>
                  <CheckCircle2 size={16} />
                  <p>{point}</p>
                </div>
              ))}
              {item.details?.map((point) => (
                <div className="list-row" key={point}>
                  <CheckCircle2 size={16} />
                  <p>{point}</p>
                </div>
              ))}
              {item.tags ? (
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </SpotlightCard>
    </motion.button>
  );
}

/* ─────────────────────────────────────────
   MAIN APP
───────────────────────────────────────── */
export default function App() {
  const [themeMode, setThemeMode] = useState("auto");
  const [systemTheme, setSystemTheme] = useState("dark");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openPmIndex, setOpenPmIndex] = useState(0);
  const [openProjectIndex, setOpenProjectIndex] = useState(0);
  const [activeNav, setActiveNav] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Theme
  useEffect(() => {
    const saved = localStorage.getItem("bereket-theme-mode");
    if (saved === "auto" || saved === "light" || saved === "dark") setThemeMode(saved);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setSystemTheme(media.matches ? "dark" : "light");
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    localStorage.setItem("bereket-theme-mode", themeMode);
  }, [themeMode]);

  const resolvedTheme = themeMode === "auto" ? systemTheme : themeMode;
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme]);

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileNavOpen]);

  // Scroll events
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "skills", "achievements", "pm-projects", "projects", "journey", "contact"];
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveNav(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => { setOpenProjectIndex(0); }, [activeCategory]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#achievements", label: "Highlights", id: "achievements" },
    { href: "#pm-projects", label: "PM Role", id: "pm-projects" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#journey", label: "Journey", id: "journey" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <div className="page-shell">
      <CustomCursor />
      <ParticleCanvas />
      <motion.div className="progress-bar" style={{ scaleX: progress }} />

      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* HEADER */}
      <header className="site-header">
        <div className="container nav-row">
          <div>
            <p className="brand-name">Bereket Shewarega</p>
            <p className="brand-subtitle">Interactive Portfolio</p>
          </div>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeNav === link.id ? "active-nav" : ""}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeToggle themeMode={themeMode} setThemeMode={setThemeMode} />
            <a className="btn btn-primary small" href="#contact">
              <Mail size={15} />
              <span>Contact</span>
            </a>
            {/* Hamburger — visible on tablet/mobile only via CSS */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setMobileNavOpen(false)}
          >
            <motion.div
              className="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer header */}
              <div className="mobile-nav-header">
                <div>
                  <p className="brand-name" style={{ fontSize: 16 }}>Bereket Shewarega</p>
                  <p className="brand-subtitle">Portfolio</p>
                </div>
                <button
                  style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: 10, padding: 8, color: "var(--text)", cursor: "pointer" }}
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={activeNav === link.id ? "active-nav" : ""}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Footer actions */}
              <div className="mobile-nav-footer">
                <ThemeToggle themeMode={themeMode} setThemeMode={setThemeMode} />
                <a className="btn btn-primary" href="#contact" onClick={() => setMobileNavOpen(false)} style={{ justifyContent: "center" }}>
                  <Mail size={16} />
                  <span>Contact Me</span>
                </a>
                <a className="btn btn-secondary" href={cvUrl} download style={{ justifyContent: "center" }}>
                  <ExternalLink size={16} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* ── HERO ── */}
        <section className="hero container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badges">
              <span className="badge accent">
                <Sparkles size={15} />
                Open to impactful opportunities
              </span>
              <span className="badge">
                <Zap size={15} />
                Interactive portfolio experience
              </span>
            </div>

            <div className="hero-copy">
              <h1>
                Building a career where
                <span className="gradient-text">
                  {" "}analytics, project execution, and technology
                </span>{" "}
                create real-world value.
              </h1>

              <TypedRole />

              <p>
                I am Bereket Shewarega — a technically grounded professional
                with experience in project coordination, a strong engineering
                foundation, and growing expertise in computational science,
                analytics, dashboards, and digital problem solving.
              </p>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>
              <a className="btn btn-secondary" href={cvUrl} download>
                <span>Download CV</span>
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="chip-wrap">
              {quickHighlights.map((item) => (
                <motion.span className="badge" whileHover={{ y: -3 }} key={item}>
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <div className="stat-value">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SpotlightCard className="profile-card">
              <div className="profile-grid">
                <div className="profile-image-panel">
                  <motion.div
                    className="profile-image-wrap"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img src={profileImage} alt="Bereket Shewarega" className="profile-image" />

                    <div className="floating-pill top-left">
                      <span className="floating-label">Focus</span>
                      <strong>Analytics + PM</strong>
                    </div>

                    <div className="floating-pill bottom-right">
                      <span className="floating-label">Open To</span>
                      <strong>Growth Roles</strong>
                    </div>
                  </motion.div>
                </div>

                <div className="profile-info-panel">
                  <div className="profile-header">
                    <div>
                      <p className="muted">Profile Snapshot</p>
                      <h2>Professional Identity</h2>
                    </div>
                    <div className="icon-box cyan">
                      <User size={20} />
                    </div>
                  </div>

                  <div className="info-list">
                    {[
                      { icon: MapPin, title: "Location", value: "United Arab Emirates", accent: "pink" },
                      { icon: GraduationCap, title: "Education", value: "MSc in Computational Science", accent: "cyan" },
                      { icon: Database, title: "Focus", value: "Analytics, dashboards, reporting, and insight-driven systems", accent: "violet" },
                      { icon: Wallet, title: "Interests", value: "Trading, automation, digital solutions, and continuous growth", accent: "green" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <motion.div className="info-card" whileHover={{ x: 6 }} key={item.title}>
                          <div className={`icon-box ${item.accent}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="info-title">{item.title}</div>
                            <div className="info-value">{item.value}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </section>

        {/* ── ABOUT ── */}
        <SectionDivider />
        <section className="container section" id="about">
          <SectionHeading
            eyebrow="About Me"
            title="A practical professional with technical depth and growth ambition"
          />
          <div className="two-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SpotlightCard className="section-card">
                <p className="body-text">
                  My journey combines engineering fundamentals, professional project
                  experience, and academic work in computational science and analytics.
                  I enjoy turning ideas into structured systems, making complex work
                  easier to understand, and improving workflows through technology.
                </p>
                <p className="body-text" style={{ marginTop: 14 }}>
                  I am especially interested in opportunities where project coordination,
                  digital operations, analytics, and technical problem solving come
                  together to create measurable impact.
                </p>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SpotlightCard className="section-card">
                <p className="eyebrow" style={{ marginBottom: 20 }}>What I Bring</p>
                <div className="mini-grid">
                  {[
                    "Analytical thinking",
                    "Professional communication",
                    "Organized execution",
                    "Research and reporting",
                    "Technical curiosity",
                    "Continuous improvement",
                    "Presentation skills",
                    "Adaptability",
                  ].map((item) => (
                    <motion.div className="mini-tile" whileHover={{ x: 5 }} key={item}>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <SectionDivider />
        <section className="container section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Capabilities I bring to the table"
            text="A blend of project, analytical, and technical skills that help me contribute across structured delivery and data-focused work."
          />

          <SpotlightCard className="section-card">
            <div className="skills-container">
              {skillsData.map((skill, i) => (
                <SkillBar
                  key={skill.label}
                  label={skill.label}
                  pct={skill.pct}
                  delay={i * 0.07}
                />
              ))}
            </div>
          </SpotlightCard>
        </section>

        {/* ── HIGHLIGHTS ── */}
        <SectionDivider />
        <section className="container section" id="achievements">
          <SectionHeading
            eyebrow="Highlights"
            title="Professional and academic achievements"
            text="These highlights reflect the direction of my work so far: structured project support, analytics learning, technical foundations, and solution-focused growth."
          />

          <div className="card-grid two">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <SpotlightCard className="card-pad">
                    <div className="row-title">
                      <div className="icon-box green">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <p className="body-text">{item.description}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── PM PROJECTS ── */}
        <SectionDivider />
        <section className="container section" id="pm-projects">
          <SectionHeading
            eyebrow="Project Management Role"
            title="Projects and responsibilities at Moti Engineering PLC"
            text="Click any card to expand the responsibilities and implementation support I contributed during my role as a Junior Project Management Expert."
          />

          <div className="card-grid two">
            {projectManagementProjects.map((item, index) => (
              <ExpandableCard
                key={item.title}
                item={item}
                index={index}
                openIndex={openPmIndex}
                setOpenIndex={setOpenPmIndex}
                accent="amber"
              />
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <SectionDivider />
        <section className="container section" id="projects">
          <div className="section-top-row">
            <SectionHeading
              eyebrow="Featured Work"
              title="Interactive project showcase"
              text="Filter the work by category, then click a card to see more details, key contributions, and the tools involved."
            />

            <div className="filter-row">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid two">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={`${item.title}-${activeCategory}`}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -16 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <ExpandableCard
                    item={item}
                    index={index}
                    openIndex={openProjectIndex}
                    setOpenIndex={setOpenProjectIndex}
                    accent="cyan"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* ── JOURNEY / TIMELINE ── */}
        <SectionDivider />
        <section className="container section" id="journey">
          <SectionHeading
            eyebrow="Journey"
            title="Education and experience timeline"
          />

          <div className="timeline">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <SpotlightCard className="timeline-card">
                    <div className="icon-box cyan" style={{ flexShrink: 0 }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <div className="timeline-subtitle">{item.subtitle}</div>
                      <p className="body-text" style={{ marginTop: 10 }}>{item.description}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── SPOTLIGHT ── */}
        <SectionDivider />
        <section className="container section">
          <SpotlightCard className="spotlight">
            <div>
              <p className="eyebrow">Why This Portfolio</p>
              <h2 style={{ marginTop: 16 }}>Designed to show both professionalism and personality</h2>
              <p className="section-text" style={{ marginTop: 14 }}>
                This portfolio is intentionally visual, interactive, and easy to
                explore. It highlights my background, achievements, project role,
                and learning direction in a way that feels modern while staying
                clear and recruiter-friendly.
              </p>
            </div>

            <div className="mini-grid" style={{ alignContent: "center" }}>
              {[
                "Theme adapts to device settings",
                "Interactive project cards",
                "Professional headshot and CV access",
                "Clean structure for recruiters",
              ].map((item) => (
                <div className="mini-tile" key={item}>{item}</div>
              ))}
            </div>
          </SpotlightCard>
        </section>

        {/* ── CONTACT ── */}
        <SectionDivider />
        <section className="container section" id="contact">
          <SpotlightCard className="contact-card">
            <div>
              <p className="eyebrow">Let's Connect</p>
              <h2 style={{ marginTop: 16 }}>Interested in working together?</h2>
              <p className="section-text" style={{ marginTop: 14 }}>
                Whether the opportunity is in analytics, project coordination,
                technical support, remote work, or digital operations, I'm open to
                meaningful conversations and growth-oriented roles.
              </p>
              <p className="contact-email">{emailAddress}</p>
            </div>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${emailAddress}`}>
                <Mail size={18} />
                <span>Email Me</span>
              </a>
              <a
                className="btn btn-secondary"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink size={18} />
              </a>
              <a className="btn btn-secondary" href={cvUrl} download>
                <span>Download CV</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </SpotlightCard>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Bereket Shewarega. Crafted with care — interactive, animated, and purpose-built.</p>
        <div className="footer-row">
          <Sparkles size={14} />
          <span>Scroll to explore more</span>
        </div>
      </footer>
    </div>
  );
}