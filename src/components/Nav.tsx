"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/", label: "Home" },
  { href: "/#how-it-plays", label: "How it plays" },
  { href: "/shop", label: "Shop" },
];

export default function Nav() {
  const pathname = usePathname();
  const { openCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-gold/20 bg-charcoal/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/logo.png"
            alt="STACKSHOT"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : link.href === "/shop"
                  ? pathname.startsWith("/shop")
                  : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide transition ${
                  active
                    ? "text-gold"
                    : "text-offwhite/80 hover:bg-emerald hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 sm:hidden" aria-label="Mobile">
            <Link
              href="/"
              className="rounded-md px-2 py-1.5 text-xs text-offwhite/80 hover:text-gold"
            >
              Home
            </Link>
            <Link
              href="/#how-it-plays"
              className="rounded-md px-2 py-1.5 text-xs text-offwhite/80 hover:text-gold"
            >
              Play
            </Link>
            <Link
              href="/shop"
              className="rounded-md px-2 py-1.5 text-xs text-offwhite/80 hover:text-gold"
            >
              Shop
            </Link>
          </nav>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-md border border-gold/50 bg-emerald px-3 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-charcoal"
            aria-label={`Open cart, ${itemCount} items`}
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-charcoal">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
