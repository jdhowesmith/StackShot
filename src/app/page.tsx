import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const steps = [
  {
    title: "Flip",
    body: "Flip the top card of your personal stack — that number is your target on the board.",
    image: "/assets/card-back.png",
  },
  {
    title: "Throw",
    body: "You get four darts a turn. Hit any segment of that number to clear the card.",
    image: "/assets/talent-throw.png",
  },
  {
    title: "Clear",
    body: "Race through your stack. Free Plays, Start Overs, and the Bull keep the table loud.",
    image: "/assets/talent-followthrough.png",
  },
  {
    title: "Bull",
    body: "Clear your last card, then hit bullseye to win — or steal it with the legendary Bull card.",
    image: "/assets/board-e1-logo-text-corners.jpg",
  },
];

const boxItems = [
  { label: "72-card STACKSHOT deck", image: "/assets/card-back.png" },
  { label: "4 branded steel-tip darts", image: "/assets/box-front.png" },
  { label: "3 paper dartboards (Full Kit)", image: "/assets/kit-with-3-boards.png" },
  { label: "Quickstart rules", image: "/assets/box-back.png" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold/15 bg-gradient-to-b from-emerald to-charcoal">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/talent-hero.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <Image
              src="/assets/logo.png"
              alt="STACKSHOT"
              width={320}
              height={96}
              className="mb-4 h-16 w-auto sm:h-20"
              priority
            />
            <p className="font-[family-name:var(--font-display)] text-4xl tracking-[0.12em] text-gold sm:text-5xl">
              Flip. Throw. Clear.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-offwhite/85">
              The hybrid card-and-darts game you play on a real board. Deal a
              face-down stack, flip your target, spend four darts a turn, and
              race to clear your cards — then checkout on the bull.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:bg-gold-dim"
              >
                Shop now
              </Link>
              <Link
                href="/#how-it-plays"
                className="rounded-md border border-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-gold transition hover:bg-emerald"
              >
                How it plays
              </Link>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 text-center sm:max-w-md">
              {[
                ["Players", "1–4"],
                ["Ages", "14+"],
                ["Time", "15–30 min"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-lg border border-gold/20 bg-charcoal/50 px-2 py-3"
                >
                  <dt className="text-[10px] uppercase tracking-widest text-offwhite/50">
                    {k}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-gold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="overflow-hidden rounded-xl border border-gold/30 bg-charcoal shadow-2xl shadow-black/40">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster="/assets/box-front.png"
            >
              <source src="/assets/STACKSHOT-sales-web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="border-t border-gold/15 px-4 py-2 text-center text-xs text-offwhite/50">
              STACKSHOT — Flip. Throw. Clear. · Bring your dartboard. We bring
              the rest.
            </p>
          </div>
        </div>
      </section>

      {/* How it plays */}
      <section
        id="how-it-plays"
        className="scroll-mt-20 border-b border-gold/15 bg-charcoal"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              How it plays
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl">
              Flip your stack. Hit the bull.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-offwhite/65">
              Shuffle the 72-card deck, deal face-down stacks, and take turns
              with four darts. Specials keep every skill level in the game.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="overflow-hidden rounded-xl border border-gold/15 bg-emerald/25"
              >
                <div className="relative h-40 w-full bg-charcoal">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-charcoal">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-offwhite/70">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-x-auto rounded-xl border border-gold/20 bg-emerald/20">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-gold/20 text-gold">
                  <th className="px-4 py-3 font-semibold">Where the card is</th>
                  <th className="px-4 py-3 font-semibold">Free Play</th>
                  <th className="px-4 py-3 font-semibold">Start Over</th>
                  <th className="px-4 py-3 font-semibold">Bull</th>
                </tr>
              </thead>
              <tbody className="text-offwhite/75">
                <tr className="border-b border-gold/10">
                  <td className="px-4 py-3 font-medium text-offwhite">
                    Your stack
                  </td>
                  <td className="px-4 py-3">Shoot 20</td>
                  <td className="px-4 py-3">Miss turn; reshuffle</td>
                  <td className="px-4 py-3">Hold; flip next</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-offwhite">
                    Leftover pile
                  </td>
                  <td className="px-4 py-3">Free clear</td>
                  <td className="px-4 py-3">Nothing</td>
                  <td className="px-4 py-3">Keep it</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product strip */}
      <section className="border-b border-gold/15 bg-gradient-to-b from-charcoal to-emerald/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Shop
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl">
                Play tonight.
              </h2>
              <p className="mt-2 max-w-xl text-offwhite/65">
                Full kit with boards and darts, a starter on the way, and paper
                board refills for play-anywhere nights.
              </p>
            </div>
            <Link
              href="/shop"
              className="rounded-md border border-gold/50 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-gold transition hover:bg-gold hover:text-charcoal"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} featured={p.id === "full-kit"} />
            ))}
          </div>
        </div>
      </section>

      {/* What's in the box */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              What&apos;s in the box
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl">
              72 cards + 4 darts
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-offwhite/65">
              Complete throw kit in the box — buy once, play tonight. Paper
              boards included with the Full Game Kit; use yours or hang ours.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {boxItems.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl border border-gold/15 bg-emerald/20"
              >
                <div className="relative h-44 w-full bg-charcoal">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <p className="px-4 py-3 text-center text-sm font-medium text-offwhite">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-offwhite/50">
            Deck at a glance: 60 number cards (1–20 × 3) · 8 Free Play · 4 Start
            Over · 1 Bull
          </p>
        </div>
      </section>
    </>
  );
}
