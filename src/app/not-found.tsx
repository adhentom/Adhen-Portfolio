import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" aria-labelledby="not-found-title">
      <section className="not-found-panel">
        <Link className="not-found-logo" href="/" aria-label="Adhen C Tom home">
          <Image src="/assets/portfolio/adhen-brand-mark.png" alt="" width={390} height={390} priority />
        </Link>

        <div className="not-found-visual" aria-hidden="true" />

        <p className="not-found-kicker">404 / Route Missing</p>
        <h1 id="not-found-title">This page slipped out of the build.</h1>
        <p className="not-found-copy">
          The portfolio is still here. Head back home, jump into selected work, or send a note if you were expecting something specific.
        </p>

        <div className="not-found-actions" aria-label="404 actions">
          <Link className="not-found-primary" href="/">
            Return home
          </Link>
          <Link className="not-found-secondary" href="/#work">
            View work
          </Link>
          <Link className="not-found-secondary" href="/#contact">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
