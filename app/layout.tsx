import { Nunito, Bebas_Neue, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";

import ScrollToTopButton from "@/src/components/scrollbutton";
import Heading from "@/src/container/heading";
import { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/src/container/footer";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "PASAINS - Pecinta Alam Sains",
  description:
    "PASAINS adalah organisasi pecinta alam yang bergerak di bidang pendakian gunung, caving, climbing, dan lingkungan hidup.",
  keywords: [
    "pecinta alam",
    "pendakian",
    "caving",
    "climbing",
    "lingkungan hidup",
    "UGM",
  ],
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${nunito.variable} ${bebas.variable} ${playfair.variable}`}>
        <header>
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
