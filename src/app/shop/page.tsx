import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  comingSoonAdultProducts,
  jrProduct,
  shopProducts,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — STACKSHOT",
  description:
    "Pre-order the STACKSHOT 72-card deck. STACKSHOT JR for ages 4+, Full Game Kit, cages, and branded board coming soon. Flip. Throw. Clear.",
};

export default function ShopPage() {
  return (
    <div className="bg-gradient-to-b from-emerald to-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Shop
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-display)] text-5xl tracking-wide text-offwhite sm:text-6xl">
            Pre-order the deck.
          </h1>
          <p className="mt-4 text-lg text-offwhite/70">
            The STACKSHOT card deck is open for Pre-order at C$24.99 — bring your
            own darts and board. STACKSHOT JR (ages 4+), Full Game Kit, cages,
            and the branded board are coming soon. Prices in CAD. Cart saves on
            this device.
          </p>
          <p className="mt-3 text-sm text-offwhite/50">
            STACKSHOT™ — game name, art, and rules owned by Jason Howe-Smith.
            Steel-tip darts can injure; use a proper board and clear throw
            path.{" "}
            <Link href="/legal" className="text-gold/80 hover:text-gold hover:underline">
              Legal notice
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {shopProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              featured={p.id === "cards"}
            />
          ))}
        </div>

        {/* Coming soon — STACKSHOT JR (kids) */}
        <section
          id="coming-soon-jr"
          className="mt-20 scroll-mt-24"
          aria-labelledby="jr-heading"
        >
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Coming soon
            </p>
            <h2
              id="jr-heading"
              className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl"
            >
              STACKSHOT JR
            </h2>
            <p className="mt-4 text-lg text-offwhite/70">
              Soft darts · bright colors · ages 4+. The little stackers&apos;
              version — not for sale yet, but the fun is almost here.
            </p>
          </div>

          <article className="overflow-hidden rounded-xl border border-gold/25 bg-emerald/30 shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[16/10] bg-charcoal md:aspect-auto md:min-h-[320px]">
                <Image
                  src={jrProduct.image}
                  alt="STACKSHOT JR kit — board, soft darts, and mini tuck box"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
                  Coming soon · Ages 4+
                </span>
              </div>
              <div className="relative aspect-[16/10] border-t border-gold/15 bg-charcoal md:aspect-auto md:min-h-[320px] md:border-l md:border-t-0">
                <Image
                  src={jrProduct.imageAlt!}
                  alt="STACKSHOT JR four color match cards"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-wide text-offwhite">
                  {jrProduct.name}
                </h3>
                <p className="mt-1 text-lg font-semibold text-gold">
                  {jrProduct.priceLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/70">
                  {jrProduct.description}
                </p>
                <ul className="mt-4 grid gap-1.5 text-sm text-offwhite/80 sm:grid-cols-2">
                  {jrProduct.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                disabled
                className="w-full shrink-0 cursor-not-allowed rounded-md border border-gold/30 px-8 py-3 text-sm font-bold uppercase tracking-wider text-offwhite/40 sm:w-auto"
              >
                Coming soon
              </button>
            </div>
          </article>
        </section>

        {/* Coming soon — adult kits, boards & cages */}
        <div className="mt-20 mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Coming soon
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl">
            Kits, boards & cages
          </h2>
          <p className="mt-4 text-lg text-offwhite/70">
            Full Game Kit, Starter Set, paper board refills, wire cages, and the
            simplified STACKSHOT board — not for sale yet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {comingSoonAdultProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-gold/20 bg-charcoal/60 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gold">Why STACKSHOT</h2>
          <ul className="mt-4 grid gap-3 text-sm text-offwhite/75 sm:grid-cols-2">
            <li className="flex gap-2">
              <span className="text-gold">▸</span>
              Instant pub / rec-room hook: cards + real darts
            </li>
            <li className="flex gap-2">
              <span className="text-gold">▸</span>
              Pre-order the deck now — JR, kits, and boards coming soon
            </li>
            <li className="flex gap-2">
              <span className="text-gold">▸</span>
              Short rounds, big comebacks, one legendary Bull card
            </li>
            <li className="flex gap-2">
              <span className="text-gold">▸</span>
              Fun for every skill level — Free Plays and Start Overs level the
              table
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
