"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FlipWords } from "@/components/ui/flip-words";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedIcon, type AnimatedIconName } from "@/components/ui/animated-icon";
import {
  achievements,
  certifications,
  contactInfo,
  featureCards,
  footerLinks,
  heroContent,
  navItems,
  projectCards,
  toolTiles,
  toolsContent,
} from "./portfolio-content";
import type { FeatureCardType } from "./portfolio-content";
import type { ProjectCard } from "./portfolio-content";
import {
  CertificationLogo,
  ChevronIcon,
} from "./portfolio-icons";

const featureIcons: AnimatedIconName[] = ["document", "developer", "code", "restApi", "chart", "avatar"];
const achievementIcons: AnimatedIconName[] = ["google", "medal", "code"];
const featureTags = [
  ["CGPA: 8.02 / 10", "CSE"],
  ["RAG", "Analytics", "GenAI"],
  ["Python", "Java", "C", "SQL"],
  ["FastAPI", "Flutter", "REST"],
  ["PostgreSQL", "Pandas", "Plotly"],
  ["Google SA", "IEEE", "STRIDE"],
];
const aboutChips = ["B.Tech CSE", "AI + ML + GenAI", "Full-Stack Builder", "Problem Solver"];
const contactMethods = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { label: "LinkedIn", value: "adhen-cheryeth-tom", href: contactInfo.linkedin },
  { label: "GitHub", value: "adhentom", href: contactInfo.github },
  { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
];
const navIconMap: Record<string, AnimatedIconName> = {
  Home: "home",
  About: "avatar",
  Work: "code",
  Stack: "layers",
  Achievements: "medal",
  Contact: "email",
};
const stackItems = ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "Redis", "OpenAI"];
const stackIconMap: Record<string, AnimatedIconName> = {
  Docker: "cloud",
  FastAPI: "restApi",
  OpenAI: "developer",
  PostgreSQL: "data",
  Python: "code",
  React: "layers",
  Redis: "repository",
};
const contactIconMap: Record<string, AnimatedIconName> = {
  Email: "email",
  GitHub: "github",
  LinkedIn: "linkedin",
  Phone: "consultation",
};
const certificationIconMap: Record<string, AnimatedIconName> = {
  chart: "chart",
  cloud: "cloud",
  data: "data",
  star: "star",
};

function playSwitchClick() {
  const AudioContextConstructor =
    window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

  if (!AudioContextConstructor) return;

  const audioContext = new AudioContextConstructor();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(760, now);
  oscillator.frequency.exponentialRampToValueAtTime(340, now + 0.07);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.105);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.12);
  window.setTimeout(() => void audioContext.close(), 170);
}

function getStoredDarkTheme() {
  if (typeof document === "undefined") return false;

  return document.documentElement.dataset.theme === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

function applyTheme(nextTheme: "dark" | "light") {
  const isDarkTheme = nextTheme === "dark";

  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.classList.toggle("theme-dark", isDarkTheme);
  document.documentElement.classList.toggle("theme-light", !isDarkTheme);
  window.localStorage.setItem("portfolio-theme", nextTheme);
  document.cookie = `portfolio-theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === "portfolio-theme" && (event.newValue === "dark" || event.newValue === "light")) {
      applyTheme(event.newValue);
    }

    onStoreChange();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("portfolio-theme-change", onStoreChange);
  colorSchemeQuery.addEventListener("change", onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("portfolio-theme-change", onStoreChange);
    colorSchemeQuery.removeEventListener("change", onStoreChange);
  };
}

function LogoMark() {
  return (
    <a className="logo-mark" href="#home" aria-label="Adhen C Tom home">
      <Image src="/assets/portfolio/adhen-brand-mark.png" alt="" width={390} height={390} priority />
    </a>
  );
}

function FloatingPortfolioNav({
  visible,
  isDarkTheme,
  onThemeChange,
  activeSection,
}: {
  visible: boolean;
  isDarkTheme: boolean;
  onThemeChange: (isDark: boolean) => void;
  activeSection: string;
}) {
  return (
    <nav className={`floating-nav ${visible ? "is-visible" : ""}`} aria-label="Floating navigation">
      <div className="floating-nav-inner">
        {navItems.map((item) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a key={item.href} className={isActive ? "active" : ""} href={item.href} aria-current={isActive ? "page" : undefined}>
              <AnimatedIcon name={navIconMap[item.label]} />
              <em>{item.label}</em>
            </a>
          );
        })}
        <ThemeToggle className="nav-theme-toggle" isDark={isDarkTheme} onChange={onThemeChange} />
      </div>
    </nav>
  );
}

function HeroSection({
  isDarkTheme,
  onThemeChange,
  activeSection,
}: {
  isDarkTheme: boolean;
  onThemeChange: (isDark: boolean) => void;
  activeSection: string;
}) {
  return (
    <section id="home" className="hero-shell" aria-label="Intro">
      <div className="hero-panel reveal is-visible">
        <header className="hero-nav">
          <LogoMark />
          <nav aria-label="Primary navigation">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a key={item.href} className={isActive ? "active" : ""} href={item.href} aria-current={isActive ? "page" : undefined}>
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="hero-nav-actions">
            <ThemeToggle className="nav-theme-toggle" isDark={isDarkTheme} onChange={onThemeChange} />
          </div>
        </header>

        <div className="hero-copy">
          <div className="hero-mini-row">
            {heroContent.highlights.map((item, index) => (
              <div className="hero-mini" key={item.title}>
                <span className={index === 0 ? "spark" : "arrow-chip"} aria-hidden="true" />
                <p>{item.title}</p>
                <small>{item.copy}</small>
              </div>
            ))}
          </div>
          <p className="hero-note">{heroContent.note}</p>
        </div>

        <h1 className="hero-title">
          {heroContent.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>

        <div className="hero-actions">
          <a
            className="reserve-button"
            href={heroContent.cta.href}
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
              event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
            }}
          >
            <span className="reserve-glow" aria-hidden="true" />
            <span className="reserve-border" aria-hidden="true" />
            <span className="reserve-content">
              {heroContent.cta.label}
              <ChevronIcon />
            </span>
          </a>
        </div>

        <div className="hero-social" aria-label="Social links">
          <a className="social-round" href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <AnimatedIcon name="linkedin" />
          </a>
          <a className="social-round" href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <AnimatedIcon name="github" />
          </a>
          <a className="social-round" href={`mailto:${contactInfo.email}`} aria-label="Email">
            <AnimatedIcon name="email" />
          </a>
          <a className="social-round" href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} aria-label="Phone">
            <AnimatedIcon name="consultation" />
          </a>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- next/image was not selecting a desktop source for this supplied portrait. */}
        <img
          className="hero-person"
          src={heroContent.portrait.src}
          alt={heroContent.portrait.alt}
          width={heroContent.portrait.width}
          height={heroContent.portrait.height}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function CardArtwork({ type, index }: { type: FeatureCardType; index: number }) {
  const images = [
    "/assets/portfolio/clean/about-btech.svg",
    "/assets/portfolio/clean/about-ai.svg",
    "/assets/portfolio/clean/about-languages.svg",
    "/assets/portfolio/clean/about-apis.svg",
    "/assets/portfolio/clean/about-dashboards.svg",
    "/assets/portfolio/clean/about-leadership.svg",
  ];

  return (
    <div className={`card-art card-art-${type} card-art-3d-wrapper`} aria-hidden="true">
      <Image
        src={images[index]}
        alt="3D Card Artwork"
        width={400}
        height={300}
        className="card-art-3d-image"
      />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="section-inner about-inner">
        <div className="about-heading reveal">
          <div>
            <p className="section-kicker">About me</p>
            <h2 className="script-title">
              <span>About</span>
              <em>me</em>
            </h2>
          </div>
          <div className="about-chip-row" aria-label="Profile strengths">
            {aboutChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <p>
            I combine computer science fundamentals, AI workflows, backend systems, data dashboards, and community
            leadership into products that are useful beyond demos.
          </p>
        </div>
        <div className="feature-grid">
          {featureCards.map((card, index) => (
            <article key={card.title} className={`feature-card reveal ${card.type === "support" ? "support-card-wide" : ""}`}>
              <span className="feature-icon">
                <AnimatedIcon name={featureIcons[index]} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <div className="feature-tags" aria-label={`${card.title} tags`}>
                {featureTags[index].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <CardArtwork type={card.type} index={index} />
            </article>
          ))}
        </div>
        <div className="contact-strip reveal" aria-label="Contact methods">
          <div>
            <h3>Always here to help</h3>
            <p>Reach out for collaborations, internships, opportunities, or just to say hello.</p>
          </div>
          <div className="contact-methods">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noreferrer" : undefined}>
                <span>
                  <AnimatedIcon name={contactIconMap[method.label]} />
                </span>
                <strong>{method.label}</strong>
                <small>{method.value}</small>
              </a>
            ))}
          </div>
          <a className="strip-cta" href="#contact">
            Let&apos;s connect
            <ChevronIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="stack" className="tools-section">
      <div className="tools-panel">
        <div className="tools-copy reveal">
          <h2>
            {toolsContent.titleLines[0]}
            <span>{toolsContent.titleLines[1]}</span>
          </h2>
          <p>{toolsContent.copy}</p>
          <div className="tools-actions">
            <a href={toolsContent.primaryCta.href}>{toolsContent.primaryCta.label}</a>
            <a className="tools-secondary-action" href={toolsContent.secondaryCta.href}>
              {toolsContent.secondaryCta.label}
              <ChevronIcon />
            </a>
          </div>
        </div>
        <div
          className="tools-visual"
          role="button"
          tabIndex={0}
          aria-label="Technology tiles on a workflow grid. Click to hear the stack switch."
          onClick={playSwitchClick}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              playSwitchClick();
            }
          }}
        >
          <Image
            className="tools-grid-image"
            src="/assets/portfolio/clean/workflow-grid.svg"
            alt=""
            width={2180}
            height={1317}
            aria-hidden="true"
          />
          {toolTiles.map((tile) => (
            <figure key={tile.className} className={`tool-tile reveal ${tile.className}`}>
              <Image
                src={tile.src}
                alt={tile.alt}
                width={tile.width}
                height={tile.height}
                loading="lazy"
                sizes="(max-width: 640px) 44vw, (max-width: 900px) 34vw, 23vw"
              />
              <figcaption>
                <strong>{tile.label}</strong>
                <span>
                  {tile.label === "Python"
                    ? "AI + Backend"
                    : tile.label === "FastAPI"
                      ? "APIs + Services"
                      : tile.label === "GitHub"
                        ? "Versioning"
                        : tile.label === "Flutter"
                          ? "Cross-platform"
                          : "Dashboards"}
                </span>
              </figcaption>
            </figure>
            ))}
        </div>
        <ul className="stack-list reveal" aria-label="Core stack">
          {stackItems.map((item) => (
            <li key={item}>
              <span className="stack-icon" aria-hidden="true">
                <AnimatedIcon name={stackIconMap[item]} />
              </span>
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectVisual({ card }: { card: ProjectCard }) {
  if (card.visual === "distributed") {
    return (
      <div className="project-visual distributed-visual" aria-hidden="true">
        <div className="node-grid">
          <span className="node primary-node">API</span>
          <span className="node">N1</span>
          <span className="node">N2</span>
          <span className="node">N3</span>
          <span className="node database-node">DB</span>
        </div>
        <div className="transfer-card">
          <span>upload.bin</span>
          <strong>84%</strong>
          <i />
        </div>
        <div className="health-row">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (card.visual === "venture") {
    return (
      <div className="project-visual venture-visual" aria-hidden="true">
        <div className="search-bar">
          <span>RAG search</span>
          <strong>seed rounds</strong>
        </div>
        <div className="chart-stage">
          <i style={{ height: "38%" }} />
          <i style={{ height: "62%" }} />
          <i style={{ height: "46%" }} />
          <i style={{ height: "78%" }} />
          <i style={{ height: "56%" }} />
        </div>
        <div className="metric-pair">
          <span>$4.8M</span>
          <span>+18%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual neuro-visual" aria-hidden="true">
      <div className="learner-card">
        <span>Focus path</span>
        <strong>Visual + audio</strong>
      </div>
      <div className="learning-path">
        <i />
        <i />
        <i />
      </div>
      <div className="sensory-pills">
        <span>calm</span>
        <span>adaptive</span>
      </div>
    </div>
  );
}

function EngineeringSection() {
  const [activeProject, setActiveProject] = useState(0);
  const activeCard = projectCards[activeProject];

  return (
    <section id="work" className="engineering-section">
      <div className="section-inner engineering-inner">
        <p className="section-kicker reveal">Selected projects</p>
        <h2 className="reveal">Engineering Ideas Into Working Products</h2>
        <p className="engineering-copy reveal">
          Focused projects across backend systems, startup intelligence, adaptive learning, and real-time monitoring.
        </p>
        <div className="project-showcase reveal" aria-label="Selected project carousel">
          <div className="project-feature-panel">
            <div className="project-tab-list" role="tablist" aria-label="Projects">
              {projectCards.map((card, index) => (
                <button
                  key={card.title}
                  type="button"
                  role="tab"
                  aria-selected={activeProject === index}
                  className={activeProject === index ? "is-active" : ""}
                  onClick={() => setActiveProject(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{card.title}</strong>
                  <small>{card.stack.split(" / ").slice(0, 2).join(" + ")}</small>
                </button>
              ))}
            </div>
            <article className="project-feature-card" aria-live="polite">
              <div className="project-card-top-mockup project-card-top-mockup-large">
                <div className="browser-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <ProjectVisual card={activeCard} />
                <span className="project-badge">Live case</span>
              </div>
              <div className="project-stack" aria-label={`${activeCard.title} technology stack`}>
                {activeCard.stack.split(" / ").map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <h3>{activeCard.title}</h3>
              <p>{activeCard.copy}</p>
              <a className="project-link" href="#contact">
                Discuss project
                <ChevronIcon />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [offset, setOffset] = useState(0);
  const orderedTestimonials = useMemo(
    () => achievements.map((_, index) => achievements[(index + offset + achievements.length) % achievements.length]),
    [offset],
  );

  return (
    <section id="achievements" className="testimonials-section">
      <div className="section-inner testimonials-inner">
        <div className="testimonial-heading reveal">
          <div>
            <p className="section-kicker">Achievements</p>
            <h2>
              Highlights From Real
              <span>Builds And Communities</span>
            </h2>
          </div>
          <div className="testimonial-controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => setOffset((value) => value - 1)}>
              <ChevronIcon />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => setOffset((value) => value + 1)}>
              <ChevronIcon />
            </button>
          </div>
        </div>

        <div className="testimonial-cards">
          {orderedTestimonials.map((item, index) => (
            <article key={item.name} className={`testimonial-card reveal ${item.color}`}>
              <Image
                className="testimonial-skin"
                src={item.backgroundSrc}
                alt=""
                width={356}
                height={447}
                aria-hidden="true"
              />
              <div className="achievement-icon" aria-hidden="true">
                <AnimatedIcon name={achievementIcons[index]} />
              </div>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <div className="testimonial-footer">
                <span className="avatar" />
                <strong>{item.name}</strong>
                <span className="stars">{item.period}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="certifications-container reveal">
          <h3 className="certifications-heading">
            Professional <FlipWords words={["Certifications", "Credentials", "Badges"]} />
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-card-top">
                  <CertificationLogo logo={cert.logo} />
                  <div className={`cert-icon cert-icon-${cert.icon}`}>
                    <AnimatedIcon name={certificationIconMap[cert.icon]} />
                  </div>
                </div>
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({ isDarkTheme }: { isDarkTheme: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Portfolio inquiry")}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoHref;
  }

  return (
    <footer id="contact" className="site-footer">
      <div className={`footer-black ${isDarkTheme ? "" : "is-soft"}`}>
        <div className="footer-controls reveal">
          <form className="mail-form" onSubmit={handleSubmit}>
            <AnimatedIcon name="email" className="mail-icon" />
            <a className="mail-display" href={`mailto:${contactInfo.email}`} aria-label={`Email ${contactInfo.email}`}>
              <EncryptedText
                text={submitted ? "Message received" : contactInfo.email}
                encryptedClassName="mail-encrypted"
                revealedClassName="mail-revealed"
                revealDelayMs={12}
                flipDelayMs={28}
              />
            </a>
            <button type="submit" aria-label="Confirm contact email">
              <span className="mail-button-label">Send</span>
              <span className="mail-button-short">Go</span>
              <AnimatedIcon name="emailSend" />
            </button>
          </form>
          <div className="footer-action-cluster">
            <div className="social-boxes">
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <AnimatedIcon name="linkedin" />
              </a>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <AnimatedIcon name="github" />
              </a>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="pixel-band"
          src="/assets/portfolio/svg-derived/footer-pixel-band-clean.png"
          alt=""
          width={1440}
          height={135}
          aria-hidden="true"
        />
      </div>
      <div className="footer-legal">
        <p>&copy; 2026 {contactInfo.name}. All rights reserved.</p>
        <div>
          <a href={footerLinks[0].href}>{footerLinks[0].label}</a>
          <span />
          <a href={footerLinks[1].href}>{footerLinks[1].label}</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [floatingNavVisible, setFloatingNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isDarkTheme = useSyncExternalStore(subscribeToThemeChanges, getStoredDarkTheme, getServerThemeSnapshot);

  const handleThemeChange = (nextIsDark: boolean) => {
    const nextTheme = nextIsDark ? "dark" : "light";

    applyTheme(nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  };

  useEffect(() => {
    applyTheme(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleSectionLinkClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a[href^='#']");
      const hash = link?.getAttribute("href");

      if (!link || !hash || hash === "#") return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handleSectionLinkClick);
    return () => document.removeEventListener("click", handleSectionLinkClick);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 20% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const visibleSections = new Map<string, number>();

    const syncHashSection = () => {
      const hashSection = window.location.hash.slice(1);
      if (sectionIds.includes(hashSection)) {
        setActiveSection(hashSection);
      }
    };

    syncHashSection();

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleSections.set(section.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(section.id);
          }
        });

        const nextSection = Array.from(visibleSections)
          .sort((first, second) => second[1] - first[1])
          .at(0)?.[0];

        if (nextSection) {
          setActiveSection((currentSection) => (currentSection === nextSection ? currentSection : nextSection));
        }
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: [0, 0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", syncHashSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncHashSection);
    };
  }, []);

  useEffect(() => {
    const heroSection = document.getElementById("home");

    if (!heroSection || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFloatingNavVisible(!entry.isIntersecting);
      },
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="portfolio-page">
      <FloatingPortfolioNav
        visible={floatingNavVisible}
        isDarkTheme={isDarkTheme}
        onThemeChange={handleThemeChange}
        activeSection={activeSection}
      />
      <HeroSection isDarkTheme={isDarkTheme} onThemeChange={handleThemeChange} activeSection={activeSection} />
      <AboutSection />
      <ToolsSection />
      <EngineeringSection />
      <TestimonialsSection />
      <SiteFooter isDarkTheme={isDarkTheme} />
    </main>
  );
}
