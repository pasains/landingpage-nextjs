import { Stardos_Stencil, Gantari } from "next/font/google";
import type { Metadata } from "next";

import ScrollToTopButton from "@/components/scrollButton";
import Heading from "@/src/container/heading";
import { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/src/container/footer";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  colorScheme: "light",
  title: "PASAINS - Never Ending Brotherhood",
  description:
    "PASAINS adalah organisasi pecinta alam yang bergerak di bidang pendakian gunung, caving, climbing, dan lingkungan hidup.",
  keywords: [
    "pecinta alam",
    "hiking",
    "caving",
    "climbing",
    "lingkungan hidup",
    "UGM",
  ],
};

const stardos = Stardos_Stencil({
  weight: ["400", "700"],
  variable: "--font-stardos-family",
});

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gantari-family",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${gantari.className} ${gantari.variable} ${stardos.className} ${stardos.variable}`}
      >
        <header className="place-items-center">
          <Heading />
        </header>

        <main>{children}</main>

        <footer>
          <ScrollToTopButton />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
