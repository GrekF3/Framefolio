"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#hero", label: "Главная" },
  { href: "#about", label: "Обо мне" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#pricing", label: "Прайс" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="mx-auto flex w-[min(94%,1100px)] items-center justify-between rounded-full border border-soft bg-glass px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <Link
          href="#hero"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-primary transition hover:opacity-70 sm:text-sm sm:tracking-[0.4em]"
        >
          {siteConfig.brand}
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 text-[0.65rem] font-medium uppercase text-muted md:flex md:text-xs">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ opacity: 0.6 }}
              className="tracking-[0.25em]"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Link
            href="#portfolio"
            className="btn-outline"
          >
            Смотреть работы
          </Link>
        </div>
        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-soft text-primary transition hover:border-strong hover:bg-overlay md:hidden"
        >
          <span className="sr-only">Меню</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-overlay backdrop-blur"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-x-4 top-20 rounded-3xl border border-soft bg-card p-6 text-primary shadow-strong"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">{siteConfig.brand}</span>
                <ThemeToggle />
              </div>
              <ul className="space-y-4 text-sm uppercase tracking-[0.35em]">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-2 text-muted transition hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href="#portfolio"
                onClick={closeMenu}
                className="mt-8 inline-flex w-full items-center justify-center btn-accent"
              >
                Смотреть работы
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}