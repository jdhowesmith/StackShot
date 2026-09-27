export const metadata = { title: "Video preview — STACKSHOT", robots: { index: false, follow: false } };

export default function VideoPreviewPage() {
  return (
    <main className="min-h-screen bg-charcoal px-4 py-10 text-offwhite">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Local preview — not the live homepage
        </p>
        <h1 className="mb-4 font-[family-name:var(--font-display)] text-2xl tracking-wide text-gold">
          STACKSHOT hero cut
        </h1>
        <p className="mb-6 text-sm text-offwhite/70">
          Press play with sound on. This page is only for review.
        </p>
        <video
          className="aspect-video w-full rounded-xl border border-gold/30 bg-black"
          controls
          playsInline
          preload="metadata"
          poster="/videos/stackshot-hero-hybrid-poster.jpg"
        >
          <source src="/videos/stackshot-hero-hybrid.mp4" type="video/mp4" />
        </video>
        <p className="mt-4 text-sm text-offwhite/60">
          Audio-only:{" "}
          <a className="text-gold underline" href="/videos/stackshot-hero-hybrid-audio.mp3">
            download MP3
          </a>
        </p>
      </div>
    </main>
  );
}
