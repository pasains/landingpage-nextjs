"use client";

import { useMemo, useState, type ReactNode } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { cn } from "@/lib/utils";

const GRID_COLUMNS = "grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3";
const MAX_PAGE_NUMBERS = 7;
const ITEMS_PER_PAGE = 9;

function pageWindow(current: number, total: number, max: number) {
  if (total <= max) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const half = Math.floor(max / 2);
  const start = Math.min(Math.max(current - half, 1), total - max + 1);
  const end = start + max;

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function step(current: number, total: number, delta: number) {
  return Math.min(Math.max(current + delta, 1), total);
}

export function PostGrid({ children }: { children: ReactNode[] }) {
  const [current, setCurrent] = useState(1);

  const total = Math.max(Math.ceil(children.length / ITEMS_PER_PAGE), 1);
  const activePage = Math.min(current, total);
  const pages = useMemo(
    () => pageWindow(activePage, total, MAX_PAGE_NUMBERS),
    [activePage, total],
  );

  const visible = children.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE,
  );

  const goTo = (page: number) => setCurrent(step(page, total, 0));

  return (
    <div className="flex flex-col items-center ">
      <div className={`grid ${GRID_COLUMNS}`}>
        {visible.map((child, index) => (
          <div key={`${activePage}-${index}`} className="flex">
            {child}
          </div>
        ))}
      </div>

      {total > 1 && (
        <nav
          aria-label="Navigasi publikasi"
          className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 border-t border-bold-green pt-6"
        >
          <button
            onClick={() => setCurrent(step(activePage, total, -1))}
            disabled={activePage === 1}
            aria-label="Halaman sebelumnya"
            className="mr-2 flex size-9 items-center justify-center border border-bold-green text-bold-green transition-colors hover:border-light-orange hover:bg-light-orange hover:text-white disabled:pointer-events-none disabled:opacity-30 disabled:hover:border-bold-green disabled:hover:bg-transparent disabled:hover:text-bold-green"
          >
            <BsArrowLeft className="size-4" />
          </button>

          {pages[0] > 1 && (
            <span className="px-1 text-[10px] tracking-widest text-gray-400">
              …
            </span>
          )}

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              aria-label={`Halaman ${page}`}
              aria-current={page === activePage ? "page" : undefined}
              className={cn(
                "size-9 text-xs font-bold transition-colors",
                page === activePage
                  ? "bg-bold-green text-white"
                  : "text-gray-600 hover:bg-bold-green hover:text-white",
              )}
            >
              {String(page).padStart(2, "0")}
            </button>
          ))}

          {pages[pages.length - 1] < total && (
            <span className="px-1 text-[10px] tracking-widest text-gray-400">
              …
            </span>
          )}

          <button
            onClick={() => setCurrent(step(activePage, total, 1))}
            disabled={activePage === total}
            aria-label="Halaman berikutnya"
            className="ml-2 flex size-9 items-center justify-center border border-bold-green text-bold-green transition-colors hover:border-light-orange hover:bg-light-orange hover:text-white disabled:pointer-events-none disabled:opacity-30 disabled:hover:border-bold-green disabled:hover:bg-transparent disabled:hover:text-bold-green"
          >
            <BsArrowRight className="size-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
