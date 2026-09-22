export type ProductId =
  | "full-kit"
  | "starter"
  | "paper-boards"
  | "cage-wire"
  | "cage-numbers"
  | "board-simplified";

export type Product = {
  id: ProductId;
  name: string;
  price: number | null; // CAD; null = coming soon
  priceLabel: string;
  description: string;
  includes: string[];
  image: string;
  available: boolean;
  badge?: string;
};

export const products: Product[] = [
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
    available: true,
    badge: "Best value",
  },
  {
    id: "starter",
    name: "Starter Set",
    price: 24.99,
    priceLabel: "C$24.99",
    description:
      "Only C$24.99 when you bring your own darts and board — full deck plus branded flights.",
    includes: [
      "72-card STACKSHOT deck",
      "4 branded dart flights",
      "Use your own darts & board",
    ],
    image: "/assets/starter-set.png",
    available: true,
    badge: "Own darts & board",
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
    available: true,
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

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatCad(amount: number): string {
  return `C$${amount.toFixed(2)}`;
}
