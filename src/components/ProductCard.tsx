"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

type Props = {
  product: Product;
  featured?: boolean;
};

export default function ProductCard({ product, featured }: Props) {
  const { addItem } = useCart();
  const canBuy = product.available && product.price != null;

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border bg-emerald/30 shadow-lg transition hover:border-gold/50 ${
        featured ? "border-gold/40" : "border-gold/15"
      }`}
    >
      <div className="relative aspect-square w-full bg-charcoal">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold tracking-wide text-offwhite">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-semibold text-gold">
          {product.priceLabel}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-offwhite/70">
          {product.description}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-offwhite/80">
          {product.includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          {canBuy ? (
            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="w-full rounded-md bg-gold py-3 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:bg-gold-dim"
            >
              Add to cart
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-md border border-gold/30 py-3 text-sm font-bold uppercase tracking-wider text-offwhite/40"
            >
              Coming soon
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
