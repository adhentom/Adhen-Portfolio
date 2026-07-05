import Image from "next/image";

export function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5l7 7-7 7" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5h16v10H4z" />
      <path d="M5 8l7 5 7-5" />
    </svg>
  );
}

export function ImpactIcon({ icon }: { icon: string }) {
  if (icon === "machine") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7h8v7H8z" />
        <path d="M12 3v4M12 14v7M4 10h4M16 10h4M6 4l2 3M18 4l-2 3M8 18l4 3 4-3" />
      </svg>
    );
  }

  if (icon === "backend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 6h14v4H5zM5 14h14v4H5z" />
        <path d="M8 8h.01M8 16h.01M12 10v4" />
      </svg>
    );
  }

  if (icon === "community") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3 20c.7-3 2.5-5 5-5s4.3 2 5 5M11 20c.7-2.6 2.4-4.2 5-4.2 2.3 0 4 1.5 5 4.2" />
      </svg>
    );
  }

  if (icon === "strategy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 3 9l9 5 9-5-9-5Z" />
      <path d="M6 12v4c1.7 2 3.7 3 6 3s4.3-1 6-3v-4M21 9v6" />
    </svg>
  );
}

export function StackIcon({ name }: { name: string }) {
  if (name === "Python") {
    return (
      <svg className="brand-logo brand-logo-python" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#3776ab" d="M16.1 3.1c-5.7 0-5.3 2.5-5.3 2.5v2.6h5.4v.8H8.6S5 8.6 5 14.2c0 5.6 3.1 5.4 3.1 5.4H10v-2.7s-.1-3.1 3-3.1h5.3s3 .1 3-2.9V5.8s.4-2.7-5.2-2.7Z" />
        <path fill="#ffd343" d="M15.9 28.9c5.7 0 5.3-2.5 5.3-2.5v-2.6h-5.4V23h7.6s3.6.4 3.6-5.2c0-5.6-3.1-5.4-3.1-5.4H22v2.7s.1 3.1-3 3.1h-5.3s-3-.1-3 2.9v5.1s-.4 2.7 5.2 2.7Z" />
        <circle cx="13" cy="6.3" r="1" fill="#fff" />
        <circle cx="19" cy="25.7" r="1" fill="#fff" />
      </svg>
    );
  }

  if (name === "FastAPI") {
    return (
      <svg className="brand-logo brand-logo-fastapi" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#009688" />
        <path fill="#fff" d="m17.4 5.8-9.1 11h6.3l-1 9.4 9.9-12.2h-6.2l.1-8.2Z" />
      </svg>
    );
  }

  if (name === "React") {
    return (
      <svg className="brand-logo brand-logo-react" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.4" fill="#61dafb" />
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61dafb" strokeWidth="1.8" />
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61dafb" strokeWidth="1.8" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61dafb" strokeWidth="1.8" transform="rotate(120 16 16)" />
      </svg>
    );
  }

  if (name === "PostgreSQL") {
    return (
      <svg className="brand-logo brand-logo-postgres" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#336791" d="M16 3.3c-6.8 0-11 3.2-11 8.2 0 5.7 3.5 9.8 8.3 10.7l.8 5.8 3.2-4.8c6.3-.5 9.7-4.7 9.7-11.7 0-5-4.2-8.2-11-8.2Z" />
        <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" d="M12.3 12.1c.3-2.2 1.8-3.5 3.7-3.5s3.4 1.3 3.7 3.5M13.8 20.6l.4-4.4M18.2 20.6l-.4-4.4M11.7 13.8c1.8 1.1 6.8 1.1 8.6 0M13.5 23.8c2.2.5 4.3-.2 5.5-1.7" />
        <circle cx="13.4" cy="12.5" r=".7" fill="#fff" />
        <circle cx="18.6" cy="12.5" r=".7" fill="#fff" />
      </svg>
    );
  }

  if (name === "Docker") {
    return (
      <svg className="brand-logo brand-logo-docker" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#2496ed" d="M5.2 17.5h18.1c2.1 0 3.7-.7 4.7-2.2.2 4.9-3.5 9.5-10.8 9.5H11c-3.6 0-5.9-2.4-5.9-6.2v-1.1Z" />
        <path fill="#fff" d="M8 13.4h3.3v3.2H8zm4.1 0h3.3v3.2h-3.3zm4.1 0h3.3v3.2h-3.3zm-4.1-4h3.3v3.2h-3.3zm4.1 0h3.3v3.2h-3.3zm4.1 4h3.3v3.2h-3.3z" />
      </svg>
    );
  }

  if (name === "Redis") {
    return (
      <svg className="brand-logo brand-logo-redis" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="#dc382d" d="m16 5 12 5.6-12 5.6L4 10.6 16 5Z" />
        <path fill="#a41e11" d="M4 15.2 16 21l12-5.8v3.2L16 24.2 4 18.4v-3.2Z" />
        <path fill="#dc382d" d="M4 20.1 16 26l12-5.9v3.2L16 29 4 23.3v-3.2Z" />
        <path fill="#fff" d="m12.6 9.6 2.1-.5.4-1.2 1.1 1.1 3.2-.7-1.4 1.5 2.5 1-3.5.4-.8 1.6-1.2-1.4-2.8.3 1.5-1.3-1.1-.8Z" />
      </svg>
    );
  }

  return (
    <svg className="brand-logo brand-logo-openai" viewBox="0 0 32 32" aria-hidden="true">
      <path fill="none" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M16 5.2c2.8-1.6 6.4.4 6.4 3.8 3.1.3 5.1 3.7 3.5 6.5 1.6 2.8-.4 6.4-3.8 6.4-.3 3.1-3.7 5.1-6.5 3.5-2.8 1.6-6.4-.4-6.4-3.8-3.1-.3-5.1-3.7-3.5-6.5-1.6-2.8.4-6.4 3.8-6.4.3-3.1 3.7-5.1 6.5-3.5Z" />
      <path fill="none" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12.4 9.4 20.8 14v8.3M19.6 8.8 11.2 13.4 7 20.5M24.3 14.8 16 19.5l-8.3-4.6" />
    </svg>
  );
}

export function CertificationLogo({ logo }: { logo: "google" | "deloitte" | "tata" | "anthropic" }) {
  const logos = {
    anthropic: {
      alt: "Anthropic logo",
      height: 59,
      src: "/assets/portfolio/logos/anthropic-logo.png",
      width: 520,
    },
    deloitte: {
      alt: "Deloitte logo",
      height: 97,
      src: "/assets/portfolio/logos/deloitte-logo.png",
      width: 520,
    },
    google: {
      alt: "Google logo",
      height: 160,
      src: "/assets/portfolio/logos/google-logo.png",
      width: 504,
    },
    tata: {
      alt: "Tata logo",
      height: 78,
      src: "/assets/portfolio/logos/tata-logo.png",
      width: 288,
    },
  } as const;

  const selectedLogo = logos[logo];

  return (
    <span className={`cert-logo cert-logo-${logo}`}>
      <Image
        src={selectedLogo.src}
        alt={selectedLogo.alt}
        width={selectedLogo.width}
        height={selectedLogo.height}
        className="cert-logo-image"
      />
    </span>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.2 9.4h3.1v8.4H6.2zM7.8 6.2a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM11 9.4h3v1.2c.5-.8 1.4-1.4 2.8-1.4 2.2 0 3.5 1.4 3.5 4.2v4.4h-3.1v-4c0-1.2-.5-1.9-1.5-1.9-.9 0-1.6.7-1.6 1.9v4H11z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.2 9.2 0 00-2.9 17.9c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.7s.9-.3 2.8 1a9.4 9.4 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.2.2 2.2.1 2.7a3.9 3.9 0 011 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.8.5A9.2 9.2 0 0012 2.8z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.3 4.5l2.4-.8 2 4.2-1.5 1.2c.9 1.9 2.3 3.4 4.2 4.4l1.3-1.5 4.1 2.1-.7 2.4c-.3 1-1.3 1.7-2.4 1.6-6.1-.5-10.9-5.4-11.5-11.5-.1-1.1.6-2.1 1.6-2.4z" />
    </svg>
  );
}

export function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.04-1.21-1.92-2.22-2.5C12.77 7.92 11.6 7.7 10.5 7.9c-2.33.46-4.13 2.4-4.4 4.76C4.05 13.05 3 14.65 3 16.5A3.5 3.5 0 0 0 6.5 20h11" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
