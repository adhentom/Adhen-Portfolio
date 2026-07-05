import type { Metadata } from "next";
import { Audiowide, Geist, Geist_Mono, Pacifico, Space_Grotesk } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import "./pro-ui.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const interactionBootstrap = `
(() => {
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("theme-dark", isDark);
    document.documentElement.classList.toggle("theme-light", !isDark);
    try {
      localStorage.setItem("portfolio-theme", theme);
      document.cookie = "portfolio-theme=" + theme + "; path=/; max-age=31536000; SameSite=Lax";
    } catch {}
    document.querySelectorAll(".theme-toggle").forEach((button) => {
      button.classList.toggle("is-dark", isDark);
      button.classList.toggle("is-light", !isDark);
      button.setAttribute("aria-label", isDark ? "Switch website to light mode" : "Switch website to dark mode");
      button.setAttribute("aria-pressed", String(!isDark));
    });
  };

  document.addEventListener("click", (event) => {
    const themeButton = event.target && event.target.closest ? event.target.closest(".theme-toggle") : null;
    if (themeButton) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
      window.dispatchEvent(new Event("portfolio-theme-change"));
      return;
    }

    const link = event.target && event.target.closest ? event.target.closest("a[href^='#']") : null;
    const hash = link && link.getAttribute("href");
    if (!hash || hash === "#") return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    history.pushState(null, "", hash);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, true);
})();
`;

export const metadata: Metadata = {
  title: "Adhen Cheryeth Tom | AI + Software Builder",
  description: "Personal portfolio for Adhen Cheryeth Tom, focused on AI, software engineering, data analytics, and product prototypes.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/assets/portfolio/adhen-brand-mark.png", type: "image/png", sizes: "390x390" },
    ],
    apple: [{ url: "/assets/portfolio/adhen-brand-mark.png", type: "image/png", sizes: "390x390" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get("portfolio-theme")?.value;
  const initialTheme = storedTheme === "dark" ? "dark" : "light";

  return (
    <html
      lang="en"
      data-theme={initialTheme}
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${audiowide.variable} ${pacifico.variable} theme-${initialTheme}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: interactionBootstrap }} />
        {children}
      </body>
    </html>
  );
}
