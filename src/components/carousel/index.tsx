"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CarouselProps {
    children: ReactNode[];
    autoSlide?: boolean;
    interval?: number;
}

export default function Carousel({
    children,
    autoSlide = true,
    interval = 3000,
}: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const length = children.length;

    // ===== AUTO SLIDE =====
    useEffect(() => {
        if (!autoSlide || length === 0) return;

        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, interval);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoSlide, interval, length]);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + length) % length);
    };

    return (
        <div className="relative overflow-hidden w-full">
            {/* SLIDER */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {children.map((child, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>

            {/* BUTTONS */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
                <BsArrowLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            >
                <BsArrowRight />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {children.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
