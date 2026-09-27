"use client";

import { useEffect, useRef } from "react";
import type { ScrollClip } from "@/lib/scrollClips";

type Props = {
  clip: ScrollClip;
};

export default function ScrollClipCard({ clip }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                /* autoplay may be blocked until gesture; muted usually ok */
              });
            }
          } else {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.45, 0.75], rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="mx-auto flex w-full max-w-[280px] flex-col sm:max-w-[300px]">
      <div
        ref={wrapRef}
        className="overflow-hidden rounded-xl border border-gold/25 bg-charcoal shadow-xl shadow-black/40 ring-1 ring-gold/10"
        style={{ aspectRatio: clip.aspect ?? "9 / 16" }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={clip.src}
          muted
          playsInline
          loop
          preload="metadata"
          aria-label={clip.title}
        />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gold">
          {clip.title}
        </h3>
        {clip.caption ? (
          <p className="mt-1 text-xs leading-relaxed text-offwhite/60">
            {clip.caption}
          </p>
        ) : null}
      </div>
    </article>
  );
}
