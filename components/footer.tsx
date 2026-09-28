import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mx-auto mt-12 flex w-full max-w-5xl flex-col gap-4 border-t border-soft px-4 py-8 text-xs uppercase tracking-[0.3em] text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-10">
      <span>© {new Date().getFullYear()} {siteConfig.brand} · {siteConfig.serviceArea}</span>
      <Link href="#contact" className="hover:text-primary">
        Забронировать съёмку · {siteConfig.startingPrice}
      </Link>
    </footer>
  );
}