import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal — STACKSHOT",
  description:
    "STACKSHOT trademark, copyright, ownership, and safety notices for Jason Howe-Smith.",
};

export default function LegalPage() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-b from-emerald to-charcoal">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Legal
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-offwhite sm:text-6xl">
          Ownership &amp; protection
        </h1>
        <p className="mt-4 text-lg text-offwhite/70">
          STACKSHOT™ is owned by Jason Howe-Smith. The game name, art, and rules
          are protected. This page summarizes filings and site hygiene — it is
          not legal advice.
        </p>

        <section className="mt-12 space-y-4 rounded-xl border border-gold/20 bg-charcoal/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gold">Brand / trademark</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-offwhite/75">
            <li>
              Canadian trademark application filed:{" "}
              <strong className="text-offwhite">STACK SHOT</strong> (word mark)
            </li>
            <li>
              CIPO application number:{" "}
              <strong className="text-offwhite">2503919</strong>
            </li>
            <li>
              Applicant:{" "}
              <strong className="text-offwhite">Jason Howe-Smith</strong>
            </li>
            <li>
              Nice Classes 28 (playing cards and card games; darts; party games)
              and 41 (providing entertainment information about party games,
              card games and dart games via a website)
            </li>
            <li>
              Status: filed and paid, pending examination —{" "}
              <strong className="text-offwhite">not registered yet</strong>
            </li>
            <li>
              On this site and packaging we use{" "}
              <strong className="text-offwhite">™ STACKSHOT</strong> /{" "}
              <strong className="text-offwhite">STACK SHOT™</strong>. We do{" "}
              <strong className="text-offwhite">not</strong> use ® until the mark
              is registered.
            </li>
          </ul>
        </section>

        <section className="mt-6 space-y-4 rounded-xl border border-gold/20 bg-charcoal/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gold">Copyright</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-offwhite/75">
            <li>
              Owner:{" "}
              <strong className="text-offwhite">Jason Howe-Smith</strong>
            </li>
            <li>
              STACKSHOT playing card designs — CIPO copyright registration{" "}
              <strong className="text-offwhite">1250204</strong>
            </li>
            <li>
              STACKSHOT How to Play (rulebook) — CIPO copyright registration{" "}
              <strong className="text-offwhite">1250205</strong>
            </li>
            <li>
              © Jason Howe-Smith {year} on this website; the same ownership
              applies to cards and packaging copy where appropriate.
            </li>
          </ul>
        </section>

        <section className="mt-6 space-y-4 rounded-xl border border-gold/20 bg-charcoal/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gold">
            Ownership &amp; use
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-offwhite/75">
            <li>
              The STACKSHOT game name, artwork, and rules belong to Jason
              Howe-Smith. Do not copy the deck, card art, or rules without
              permission.
            </li>
            <li>
              Domain{" "}
              <strong className="text-offwhite">stackshot.ca</strong> is owned
              by Jason Howe-Smith. A trademark application does not replace
              domain ownership.
            </li>
            <li>
              Site and marketing imagery should not display third-party
              dartboard brand marks.
            </li>
          </ul>
        </section>

        <section className="mt-6 space-y-4 rounded-xl border border-gold/20 bg-charcoal/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gold">Dart safety</h2>
          <p className="text-sm leading-relaxed text-offwhite/75">
            STACKSHOT includes or is played with steel-tip darts. Darts can
            cause serious injury. Use a proper dartboard (or STACKSHOT paper
            board as directed), keep a clear throw line, keep bystanders out of
            the throw path, and supervise play as appropriate — especially with
            younger players. Play at your own risk.
          </p>
        </section>

        <p className="mt-10 text-sm text-offwhite/50">
          Questions about licensing or permissions: contact the owner via{" "}
          <Link href="/shop" className="text-gold hover:underline">
            stackshot.ca
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
