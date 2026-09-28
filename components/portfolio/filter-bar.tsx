"use client";

import { LayoutGroup, motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { portfolioCategories } from "@/lib/portfolio";
import type { PortfolioCategory } from "@/lib/data";

type FilterBarProps = {
  activeCategory: PortfolioCategory | "all";
  onChange: (category: PortfolioCategory | "all") => void;
};

const highlightTransition: Transition = {
  type: "spring",
  stiffness: 70,
  damping: 20,
};

export function FilterBar({ activeCategory, onChange }: FilterBarProps) {
  return (
    <LayoutGroup id="portfolio-category-tabs">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em]">
        {portfolioCategories.map((category) => {
          const isActive = category.value === activeCategory;
          return (
            <motion.button
              key={category.value}
              type="button"
              onClick={() => onChange(category.value)}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-full border border-soft px-5 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-bg)]"
              aria-pressed={isActive}
            >
              <span className="relative z-10" style={isActive ? { color: "var(--accent-text)" } : undefined}>
                {category.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="portfolio-filter-highlight"
                  className="absolute inset-0 rounded-full bg-[color:var(--accent-bg)]"
                  transition={highlightTransition}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
