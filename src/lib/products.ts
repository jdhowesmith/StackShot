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
      "Everything you need for pub-night STACKSHOT — deck, darts, paper boards, and rules. Bring your board or hang ours.",
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
    price: null,
    priceLabel: "Coming soon",
    description:
      "Lowest-entry STACKSHOT: the full deck plus branded flights. Use your own darts and board.",
    includes: [
      "72-card STACKSHOT deck",
      "4 branded dart flights",
      "Use your own barrels, shafts & tips",
    ],
    image: "/assets/starter-set.png",
    available: false,
    badge: "Coming soon",
  },
  {
    id: "paper-boards",
    name: "Paper Boards Add-on",
    price: 4.99,
    priceLabel: "$4.99",
    description:
      "Five branded 24×24 rolled paper dartboards — refills and play-anywhere extras.",
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
