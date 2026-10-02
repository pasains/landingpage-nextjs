"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-10 md:bottom-[90px] right-4 md:right-6 z-50 text-light-orange
      transition-all duration-300 hover:scale-125
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            <IoIosArrowDropup className="w-11 h-11 animate-bounce" />
        </button>
    );
}
