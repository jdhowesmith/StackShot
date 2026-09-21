"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart";
import { formatCad, getProduct } from "@/lib/products";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    lines,
    removeItem,
    setQty,
    subtotal,
    clearCart,
    itemCount,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-gold/30 bg-charcoal shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-gold/20 px-5 py-4">
          <h2 className="text-lg font-bold tracking-wide text-offwhite">
            Cart{" "}
            <span className="text-gold">
              ({itemCount})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-md px-3 py-1.5 text-sm text-offwhite/70 transition hover:bg-emerald hover:text-gold"
            aria-label="Close cart"
          >
            Close
          </button>
        </div>

        <div className="cart-scroll flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="mt-8 text-center text-offwhite/60">
              Your cart is empty. Grab a kit and clear your stack tonight.
            </p>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => {
                const product = getProduct(line.productId);
                if (!product || product.price == null) return null;
                return (
                  <li
                    key={line.productId}
                    className="flex gap-3 rounded-lg border border-gold/15 bg-emerald/40 p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-charcoal">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-offwhite">
                          {product.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(line.productId)}
                          className="text-xs text-offwhite/50 hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="mt-0.5 text-sm text-gold">
                        {formatCad(product.price)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setQty(line.productId, line.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gold/40 text-gold hover:bg-gold hover:text-charcoal"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(line.productId, line.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-gold/40 text-gold hover:bg-gold hover:text-charcoal"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-gold/20 px-5 py-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-offwhite/70">Subtotal</span>
            <span className="text-lg font-bold text-gold">
              {formatCad(subtotal)}
            </span>
          </div>
          <p className="mb-3 text-xs text-offwhite/45">
            Checkout coming soon — cart saved on this device. Prices in CAD.
          </p>
          <button
            type="button"
            disabled={lines.length === 0}
            className="w-full rounded-md bg-gold py-3 text-sm font-bold uppercase tracking-wider text-charcoal transition hover:bg-gold-dim disabled:cursor-not-allowed disabled:opacity-40"
          >
            Checkout soon
          </button>
          {lines.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="mt-2 w-full py-2 text-xs text-offwhite/50 hover:text-offwhite"
            >
              Clear cart
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
