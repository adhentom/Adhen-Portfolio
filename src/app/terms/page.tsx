import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Adhen Cheryeth Tom",
  description: "Terms and conditions for using the personal portfolio website of Adhen Cheryeth Tom.",
};

const sections = [
  {
    title: "Use of this website",
    copy:
      "This website is a personal portfolio for Adhen Cheryeth Tom. You may view the content for professional evaluation, collaboration, hiring, learning, and general informational purposes.",
  },
  {
    title: "Portfolio content",
    copy:
      "Project descriptions, achievements, certifications, visuals, and resume-based content are provided to present skills and experience. The content should not be treated as a guarantee of availability, employment status, service delivery, or project outcome.",
  },
  {
    title: "Intellectual property",
    copy:
      "The website design, layout, copy, illustrations, and custom assets are part of this portfolio unless otherwise noted. Do not copy, reproduce, redistribute, or present the website as your own without written permission.",
  },
  {
    title: "External links",
    copy:
      "Links to GitHub, LinkedIn, email, phone, and other external services are provided for convenience. Adhen is not responsible for the availability, content, policies, or actions of third-party services.",
  },
  {
    title: "Contact actions",
    copy:
      "Using contact links may open your email client, phone app, or an external profile. You are responsible for reviewing the information you send before submitting it through those services.",
  },
  {
    title: "No warranty",
    copy:
      "The website is provided as-is. Reasonable care is taken to keep the information accurate, but no warranty is made that all content is complete, current, error-free, or uninterrupted.",
  },
  {
    title: "Limitation of liability",
    copy:
      "To the fullest extent permitted by applicable law, Adhen is not liable for indirect, incidental, consequential, or special damages arising from use of this website or linked external services.",
  },
  {
    title: "Changes to terms",
    copy:
      "These terms may be updated as the portfolio evolves. Continued use of the website after updates means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <Link href="/" className="legal-back">
          Back to portfolio
        </Link>
        <p>Effective July 4, 2026</p>
        <h1>Terms & Conditions</h1>
        <span>The rules for viewing, linking to, and contacting through this portfolio.</span>
      </section>
      <section className="legal-card" aria-label="Terms and conditions sections">
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
