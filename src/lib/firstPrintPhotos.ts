// TEMPORARY first-print photos — replace files in public/assets/first-print/ or edit this list.
// Unedited originals are kept alongside as first-print-0X-orig.jpg (not linked) for easy revert.
export type FirstPrintPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const firstPrintCaption = "First print run, real cards, just arrived.";

export const firstPrintPhotos: FirstPrintPhoto[] = [
  {
    src: "/assets/first-print/first-print-01.jpg",
    alt: "Open STACKSHOT shipping box with the printed rules sheet, green card backs, and shrink-wrapped decks",
    width: 886,
    height: 1600,
  },
  {
    src: "/assets/first-print/first-print-02.jpg",
    alt: "First-print STACKSHOT cards spread out: Bull, Free Play, Start Over, green card backs, and number cards",
    width: 1600,
    height: 895,
  },
  {
    src: "/assets/first-print/first-print-03.jpg",
    alt: "Wider overhead spread of first-print STACKSHOT cards with number cards, Free Play, Start Over, and the Bull",
    width: 1600,
    height: 859,
  },
];
