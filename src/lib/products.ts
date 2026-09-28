export type ProductId =
  | "cards"
  | "full-kit"
  | "paper-boards"
  | "cage-wire"
  | "cage-numbers"
  | "board-simplified"
  | "jr";

export type Product = {
  id: ProductId;
  name: string;
  price: number | null; // CAD; null = coming soon
  priceLabel: string;
  description: string;
  includes: string[];
  image: string;
  /** Optional secondary image (e.g. JR color cards flat lay). */
  imageAlt?: string;
  available: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "cards",
    name: "STACKSHOT Deck",
    price: 29.99,
    priceLabel: "C$29.99",
    description:
      "The full 72-card STACKSHOT deck — Pre-order at C$29.99. Bring your own darts and board.",
    includes: [
      "72-card STACKSHOT deck",
      "Use your own darts & board",
    ],
    image: "/assets/sku-cards-cardback.png",
    available: true,
    badge: "Pre-order",
  },
  {
    id: "jr",
    name: "STACKSHOT JR",
    price: null,
    priceLabel: "Coming soon",
    description:
      "Little throwers, big smiles! Soft-tip fun for ages 4+ — a bright 4-color board, soft darts, and colorful match cards so kids can stack shots without the sharp stuff. Same Flip · Throw · Clear energy, kid-sized.",
    includes: [
      "Ages 4+",
      "Soft darts (kid-safe tips)",
      "Bright 4-color STACKSHOT JR board",
      "4 color match cards",
      "Mini tuck box",
    ],
    image: "/assets/sku-jr-kit.jpg",
    imageAlt: "/assets/sku-jr-cards.jpg",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "full-kit",
    name: "Full Game Kit",
    price: 49.99,
    priceLabel: "C$49.99",
    description:
      "Start right away — no dartboard required. Deck, 4 darts, 3 paper boards, and rules so you can hang a board and play tonight.",
    includes: [
      "72-card STACKSHOT deck",
      "4 branded steel-tip darts",
      "3 × 24×24 rolled paper dartboards",
      "Quickstart rules sheet",
    ],
    image: "/assets/kit-with-3-boards.png",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "paper-boards",
    name: "Paper Boards Add-on",
    price: 4.99,
    priceLabel: "$4.99",
    description:
      "Five branded 24×24 rolled paper dartboards — refills when yours are worn out, plus extras for play-anywhere nights.",
    includes: ["5 × 24×24 rolled paper dartboards", "STACKSHOT branded"],
    image: "/assets/paper-5pack-addon.png",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "cage-wire",
    name: "STACKSHOT Cage (wire only)",
    price: null,
    priceLabel: "Coming soon",
    description:
      "Traditional steel wire spider for your own sisal board — outer circle, 20 radials, outer bull, and inner bull. No double or triple rings. No wire numbers. Drop it on the board you already own.",
    includes: [
      "Steel wire spider (no numbers)",
      "Outer circle + 20 radials",
      "Outer bull + inner bull",
      "No double / triple rings",
      "Circumferential mount ring",
    ],
    image: "/assets/sku-cage-no-numbers.png",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "cage-numbers",
    name: "STACKSHOT Cage (with numbers)",
    price: null,
    priceLabel: "Coming soon",
    description:
      "Same STACKSHOT cage plus wire-formed numbers 1–20 in classic dartboard order (20 at top). Full traditional-cage replacement — minus doubles and triples. Steel wire only, no printed artwork.",
    includes: [
      "Steel wire spider with numbers 1–20",
      "Classic order (20 at top)",
      "Outer circle + 20 radials",
      "Outer bull + inner bull",
      "No double / triple rings",
    ],
    image: "/assets/sku-cage-with-numbers.png",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "board-simplified",
    name: "STACKSHOT Board",
    price: null,
    priceLabel: "Coming soon",
    description:
      "Simplified STACKSHOT face: numbers 1–20 on contrasting segments, outer bull, and inner bull — no double or triple rings. Emerald outer ring with STACKSHOT branding all the way around. Paper 24×24 and/or sisal OEM later.",
    includes: [
      "Numbers 1–20 on segments",
      "Outer bull + inner bull",
      "No double / triple rings",
      "Emerald STACKSHOT branded ring",
      "Paper 24×24 and/or sisal OEM",
    ],
    image: "/assets/sku-board-branded.png",
    available: false,
    badge: "Coming soon",
  },
];

export const shopProducts = products.filter((p) => p.available);
export const comingSoonProducts = products.filter((p) => !p.available);
/** Featured kids line — shown in its own Coming soon subsection. */
export const jrProduct = products.find((p) => p.id === "jr")!;
export const comingSoonAdultProducts = comingSoonProducts.filter(
  (p) => p.id !== "jr"
);

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatCad(amount: number): string {
  return `C$${amount.toFixed(2)}`;
}
