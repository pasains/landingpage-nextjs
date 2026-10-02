"use client";

import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface PostCarouselProps {
  children: ReactNode[];
  itemsPerView?: number;
  autoSlide?: boolean;
  interval?: number;
}

export function PostCarousel({
  children,
  itemsPerView = 4,
  autoSlide = true,
  interval = 4000,
}: PostCarouselProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const length = children.length;
  const totalPages = Math.ceil(length / itemsPerView);
  const isSinglePage = totalPages <= 1;

  const nextPage = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (!autoSlide || isSinglePage) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalPages);
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoSlide, interval, totalPages, isSinglePage]);

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (autoSlide && !isSinglePage) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % totalPages);
      }, interval);
    }
  };

  const handlePrev = () => {
    prevPage();
    resetAutoSlide();
  };

  const handleNext = () => {
    nextPage();
    resetAutoSlide();
  };

  const offset = current * itemsPerView;
  const visibleItems = children.slice(offset, offset + itemsPerView);

  return (
    <div className="relative w-full">
      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {visibleItems.map((child, index) => (
          <div key={`${current}-${index}`} className="w-full flex justify-center">
            {child}
          </div>
        ))}
      </div>

      {/* Arrow Navigation - only show if more than one page */}
      {!isSinglePage && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-200 text-black p-3 rounded-full hover:bg-light-orange hover:text-white transition-all duration-300 z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-orange"
            aria-label="Previous publications"
          >
            <BsArrowLeft className="size-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-gray-200 text-black p-3 rounded-full hover:bg-light-orange hover:text-white transition-all duration-300 z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-orange"
            aria-label="Next publications"
          >
            <BsArrowRight className="size-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {!isSinglePage && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                resetAutoSlide();
              }}
              className={`h-1 transition-all duration-300 ${
                i === current
                  ? "w-8 bg-light-orange"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
