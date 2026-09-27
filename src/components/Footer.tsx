import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Image
              src="/assets/logo.png"
              alt="STACKSHOT™"
              width={140}
              height={42}
              className="h-9 w-auto opacity-90"
            />
            <p className="text-sm tracking-wide text-gold">
              Flip. Throw. Clear.{" "}
              <span className="text-offwhite/50">STACKSHOT™</span>
            </p>
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
            <Link href="/legal" className="hover:text-gold">
              Legal
            </Link>
            <span className="text-offwhite/30">stackshot.ca</span>
          </div>
        </div>
        <div className="space-y-2 border-t border-gold/10 pt-6 text-center text-xs leading-relaxed text-offwhite/45 sm:text-left">
          <p>
            © {new Date().getFullYear()} Jason Howe-Smith. All rights reserved.
            STACKSHOT™ / STACK SHOT™ — Canadian trademark application pending
            (CIPO 2503919). Not a registered mark — ® is not used.
          </p>
          <p>
            Playing card designs and How to Play rules are protected by Canadian
            copyright (CIPO 1250204, 1250205). No copying of the deck, art, or
            rules without permission.{" "}
            <Link href="/legal" className="text-gold/80 underline-offset-2 hover:text-gold hover:underline">
              Full legal notice
            </Link>
            .
          </p>
          <p>
            Steel-tip darts can cause injury. Play only with adult supervision
            where appropriate, use a proper board and throw line, and keep
            bystanders clear of the throw path.
          </p>
        </div>
      </div>
    </footer>
  );
}
