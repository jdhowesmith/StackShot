import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STACKSHOT — Flip. Throw. Clear.",
  description:
    "STACKSHOT is the hybrid card-and-darts game you play on a real board. Flip your stack. Throw four darts. Clear it. Hit the bull.",
  metadataBase: new URL("https://stackshot.ca"),
  openGraph: {
    title: "STACKSHOT — Flip. Throw. Clear.",
    description:
      "Cards + darts. Clear your stack. Hit the bull. Pub-night competitive.",
    url: "https://stackshot.ca",
    siteName: "STACKSHOT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${display.variable} min-h-screen antialiased`}
      >
        <CartProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
