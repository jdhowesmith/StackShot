"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ScrollClip } from "@/lib/scrollClips";

type Props = {
  clip: ScrollClip;
};

export default function ScrollClipCard({ clip }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  /** True when browser blocked unmuted autoplay — show Unmute/Play control */
  const [needsGesture, setNeedsGesture] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const inViewRef = useRef(false);

  const tryPlayUnmuted = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setNeedsGesture(false);
      setIsPlaying(true);
    } catch {
      // Autoplay with sound blocked until a user gesture
      video.muted = true;
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      setNeedsGesture(true);
    }
  }, []);

  const handleUnmuteClick = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setNeedsGesture(false);
      setIsPlaying(true);
    } catch {
      setNeedsGesture(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    video.volume = 1;
    video.muted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible =
            entry.isIntersecting && entry.intersectionRatio >= 0.45;
          inViewRef.current = visible;

          if (visible) {
            void tryPlayUnmuted();
          } else {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: [0, 0.45, 0.75], rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [tryPlayUnmuted]);

  return (
    <article className="mx-auto flex w-full max-w-[280px] flex-col sm:max-w-[300px]">
      <div
        ref={wrapRef}
        className="relative overflow-hidden rounded-xl border border-gold/25 bg-charcoal shadow-xl shadow-black/40 ring-1 ring-gold/10"
        style={{ aspectRatio: clip.aspect ?? "9 / 16" }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-contain"
          src={clip.src}
          playsInline
          loop
          preload="metadata"
          aria-label={clip.title}
        />
        {needsGesture ? (
          <button
            type="button"
            onClick={handleUnmuteClick}
            className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-2 bg-black/45 text-offwhite transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={isPlaying ? "Unmute video" : "Play video with sound"}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-charcoal/80 text-gold shadow-lg shadow-black/40">
              {isPlaying ? (
                /* speaker / unmute icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                </svg>
              ) : (
                /* play icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-0.5 h-7 w-7"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <span className="rounded-full border border-gold/40 bg-charcoal/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              {isPlaying ? "Unmute" : "Play"}
            </span>
          </button>
        ) : null}
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
