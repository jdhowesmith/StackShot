export type ScrollClip = {
  id: string;
  src: string;
  title: string;
  caption?: string;
  /** CSS aspect ratio, e.g. "9 / 16" for portrait phone clips */
  aspect?: string;
};

/** Gameplay / promo clips for the homepage “LET’S PLAY” section.
 *  Add more entries here — the section maps the array. */
export const scrollClips: ScrollClip[] = [
  {
    id: "clip-01",
    src: "/assets/scroll-clip-01.mp4",
    title: "Flip. Throw. Clear.",
    caption: "Cards + darts — clear your stack, hit the bull.",
    aspect: "464 / 688",
  },
  {
    id: "clip-02",
    src: "/assets/scroll-clip-02.mp4",
    title: "Deal. Flip. Aim.",
    caption: "Shuffle up, flip your target, throw for the clear.",
    aspect: "464 / 688",
  },
];
