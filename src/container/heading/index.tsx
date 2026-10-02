"use client";

import data from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";

export default function Heading() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const listNavbar = [
    { id: 1, title: "Beranda", link: "/" },
    { id: 2, title: "Publikasi", link: "/publication" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScroll(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed md:rounded-3xl w-full md:w-1/2 z-50 md:mt-3 mx-auto transition-colors duration-300
      ${isScroll || isOpen ? "bg-white shadow-md" : "bg-white/50"}`}
    >
      <div className="mx-auto p-2 md:p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={data.logo}
              alt="logo"
              width={64}
              height={64}
              className="object-contain hover:opacity-75"
            />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 font-semibold text-black ">
            {listNavbar.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="hover:scale-110 hover:opacity-75 transition"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <TfiMenu className="size-8" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-60 py-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-3 px-6">
          {listNavbar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="hover:opacity-75"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
