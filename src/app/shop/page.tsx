import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop — STACKSHOT",
  description:
    "Shop the STACKSHOT Full Game Kit (3 paper boards — start with no dartboard), Starter Set, and Paper Boards Add-on. Flip. Throw. Clear. Players 1–6.",
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
            Hang a paper board. Play tonight.
          </h1>
          <p className="mt-4 text-lg text-offwhite/70">
            Full Game Kit includes 3 paper dartboards so you can start with no
            dartboard. Starter Set is C$24.99 if you bring your own darts and
            board. Paper Boards add-on for refills. Prices in CAD. Cart saves
            on this device. Players 1–6.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} featured={p.id === "full-kit"} />
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
              Full Kit ships 3 paper boards — start with no dartboard
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
