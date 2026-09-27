"use client";

import { useCallback, useEffect, useRef } from "react";
import type { ScrollClip } from "@/lib/scrollClips";

type Props = {
  clip: ScrollClip;
  /** True when this clip is the one allowed to play with sound */
  isActive: boolean;
  /** Request exclusive playback (parent pauses siblings) */
  onPlay: (id: string) => void;
  /** Clear active state when paused, ended, or scrolled away */
  onStop: (id: string) => void;
};

export default function ScrollClipCard({
  clip,
  isActive,
  onPlay,
  onStop,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(true);
  const clipId = clip.id;

  const pauseAndReset = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      /* ignore seek errors on unloaded media */
    }
  }, []);

  const startPlayback = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    try {
      video.currentTime = 0;
    } catch {
      /* ignore */
    }

    try {
      await video.play();
    } catch {
      // Autoplay / play() blocked — keep play UI visible
      onStop(clipId);
    }
  }, [clipId, onStop]);

  // Sync video with exclusive active flag from parent
  useEffect(() => {
    if (isActive) {
      if (!inViewRef.current) {
        onStop(clipId);
        return;
      }
      void startPlayback();
    } else {
      pauseAndReset();
    }
  }, [isActive, startPlayback, pauseAndReset, onStop, clipId]);

  // Pause when scrolled out of view; play button returns when inactive
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const visible =
            entry.isIntersecting && entry.intersectionRatio >= 0.45;
          inViewRef.current = visible;

          if (!visible) {
            // Stop active playback when leaving view
            pauseAndReset();
            onStop(clipId);
          }
        }
      },
      { threshold: [0, 0.45, 0.75], rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, [clipId, onStop, pauseAndReset]);

  const handlePlayClick = useCallback(() => {
    onPlay(clipId);
  }, [clipId, onPlay]);

  const handleEnded = useCallback(() => {
    pauseAndReset();
    onStop(clipId);
  }, [clipId, onStop, pauseAndReset]);

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
          preload="metadata"
          aria-label={clip.title}
          onEnded={handleEnded}
        />
        {!isActive ? (
          <button
            type="button"
            onClick={handlePlayClick}
            className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-2 bg-black/45 text-offwhite transition hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={`Play ${clip.title}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-charcoal/80 text-gold shadow-lg shadow-black/40">
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
            </span>
            <span className="rounded-full border border-gold/40 bg-charcoal/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Play
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
