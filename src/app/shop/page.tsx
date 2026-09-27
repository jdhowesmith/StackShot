import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { comingSoonProducts, shopProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — STACKSHOT",
  description:
    "Pre-order the STACKSHOT 72-card deck. Full Game Kit, Starter Set, paper boards, cages, and branded board coming soon. Flip. Throw. Clear. Players 1–6.",
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
            own darts and board. Full Game Kit, Starter Set, paper boards,
            cages, and the branded board are coming soon. Prices in CAD. Cart
            saves on this device. Players 1–6.
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
          {comingSoonProducts.map((p) => (
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
              Pre-order the deck now — kits and boards coming soon
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
