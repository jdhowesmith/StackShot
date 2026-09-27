import { scrollClips } from "@/lib/scrollClips";
import ScrollClipCard from "@/components/ScrollClipCard";

export default function SeeItPlaySection() {
  if (scrollClips.length === 0) return null;

  return (
    <section
      id="see-it-play"
      className="scroll-mt-20 border-b border-gold/15 bg-gradient-to-b from-charcoal via-emerald/30 to-charcoal"
      aria-labelledby="see-it-play-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Gameplay
          </p>
          <h2
            id="see-it-play-heading"
            className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-offwhite sm:text-5xl"
          >
            See it play
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-offwhite/65">
            Short clips of STACKSHOT in the wild — muted, autoplay when you
            scroll them into view.
          </p>
        </div>

        <div
          className={`grid justify-items-center gap-8 ${
            scrollClips.length === 1
              ? "grid-cols-1"
              : scrollClips.length === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {scrollClips.map((clip) => (
            <ScrollClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
