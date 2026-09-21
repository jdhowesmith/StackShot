export type ProductId = "full-kit" | "starter" | "paper-boards";

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
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatCad(amount: number): string {
  return `C$${amount.toFixed(2)}`;
}
