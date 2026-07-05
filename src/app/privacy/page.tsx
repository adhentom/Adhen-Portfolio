import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Adhen Cheryeth Tom",
  description: "Privacy policy for the personal portfolio website of Adhen Cheryeth Tom.",
};

const sections = [
  {
    title: "Information this website collects",
    copy:
      "This portfolio is designed as a static informational website. It does not require account creation, payments, passwords, or private profile data. If analytics, hosting logs, or browser security logs are enabled by the hosting provider, they may include basic technical information such as page URL, browser type, device type, approximate region, referrer, and request time.",
  },
  {
    title: "Contact information",
    copy:
      "If you contact Adhen through email, phone, LinkedIn, GitHub, or any linked external platform, the information you choose to send may be used to respond to your message, discuss collaborations, review opportunities, or continue a professional conversation.",
  },
  {
    title: "Cookies and local preferences",
    copy:
      "The site may store a small local browser preference for light or dark mode. This preference stays on your device and is used only to keep the interface consistent between visits.",
  },
  {
    title: "How information is used",
    copy:
      "Information voluntarily provided through contact links is used only for communication, portfolio-related opportunities, collaboration discussions, and professional follow-up. It is not sold, rented, or used for unrelated advertising.",
  },
  {
    title: "Third-party links",
    copy:
      "The website links to external services such as LinkedIn, GitHub, email, and phone actions. Those services operate under their own privacy policies and terms. Review their policies before sharing information through them.",
  },
  {
    title: "Data retention",
    copy:
      "Messages and professional correspondence may be retained as long as needed to respond, maintain context, or comply with reasonable record-keeping needs. You may request deletion of direct correspondence where applicable.",
  },
  {
    title: "Your choices",
    copy:
      "You can avoid sending personal data by not using the contact links. You can clear local browser storage to remove saved theme preferences. For privacy requests, contact adhentom@gmail.com.",
  },
  {
    title: "Updates",
    copy:
      "This policy may be updated as the website changes. The current version applies from the date shown on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <Link href="/" className="legal-back">
          Back to portfolio
        </Link>
        <p>Effective July 4, 2026</p>
        <h1>Privacy Policy</h1>
        <span>How this portfolio handles contact details, preferences, and external links.</span>
      </section>
      <section className="legal-card" aria-label="Privacy policy sections">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
