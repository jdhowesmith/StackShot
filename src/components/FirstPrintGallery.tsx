import Image from "next/image";
import { firstPrintCaption, firstPrintPhotos } from "@/lib/firstPrintPhotos";

export default function FirstPrintGallery({ className = "" }: { className?: string }) {
  const [hero, ...rest] = firstPrintPhotos;
  return (
    <section
      id="first-print"
      aria-labelledby="first-print-heading"
      className={`scroll-mt-24 ${className}`}
    >
      <div className="mb-6 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          First print
        </p>
        <h2
          id="first-print-heading"
          className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-offwhite sm:text-4xl"
        >
          The real deck is here.
        </h2>
        <p className="mt-2 text-offwhite/65">{firstPrintCaption}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-5 md:grid-rows-2">
        {hero && (
          <figure className="relative aspect-[886/1600] max-h-[640px] overflow-hidden rounded-xl border border-gold/20 bg-charcoal md:col-span-2 md:row-span-2 md:aspect-auto md:max-h-none">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </figure>
        )}
        {rest.map((p) => (
          <figure
            key={p.src}
            className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gold/20 bg-charcoal md:col-span-3"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
