import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Image
            src="/assets/logo.png"
            alt="STACKSHOT"
            width={140}
            height={42}
            className="h-9 w-auto opacity-90"
          />
          <p className="text-sm text-gold tracking-wide">Flip. Throw. Clear.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-offwhite/60">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <Link href="/#how-it-plays" className="hover:text-gold">
            How it plays
          </Link>
          <Link href="/shop" className="hover:text-gold">
            Shop
          </Link>
          <span className="text-offwhite/30">stackshot.ca</span>
        </div>
        <p className="text-sm text-offwhite/45">© STACKSHOT</p>
      </div>
    </footer>
  );
}
