"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { siteConfig } from "@/lib/site";

export function HeroSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .fromTo(
          "[data-hero-line]",
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08 }
        )
        .fromTo(
          "[data-hero-accent]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6 },
          "<"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: siteConfig.startingPrice,
      label: "стартовая стоимость студийного часа",
    },
    {
      value: "12 студий",
      label: "проверенных пространств в Краснодаре",
    },
    {
      value: "48 часов",
      label: "до готового предпросмотра серии",
    },
  ];

  return (
    <section id="hero" ref={rootRef} className="relative overflow-hidden ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 bg-hero-gradient"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute -top-32 right-[12%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.28),transparent 65%)] blur-3xl mix-blend-screen dark:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent 60%)]"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
        className="pointer-events-none absolute -bottom-32 left-[10%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(12,12,12,0.24),transparent 65%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent 60%)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-center gap-14 px-4 pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36 min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-muted">
              <span data-hero-accent className="h-px w-12 origin-left bg-[color:var(--text-primary)]" />
              {siteConfig.heroTagline}
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-[1.15] text-primary sm:text-5xl lg:text-[3.4rem]">
                <span data-hero-line className="block">Сильные истории</span>
                <span data-hero-line className="block">из студий Краснодара</span>
              </h1>
              <p
                data-hero-line
                className="max-w-2xl text-sm uppercase tracking-[0.32em] text-muted"
              >
                Лаконичные фотосессии для брендов, семей и персональных проектов. Мы собираем команду, продумываем свет и создаём кадры, которые работают на ваш стиль.
              </p>
            </div>
            <div className="flex flex-col gap-6 text-xs uppercase tracking-[0.35em] text-secondary sm:flex-row sm:items-center sm:gap-8">
              <Link data-hero-line href="#portfolio" className="btn-accent w-full sm:w-auto">
                Смотреть портфолио
              </Link>
              <Link
                data-hero-line
                href="#contact"
                className="text-xs uppercase tracking-[0.35em] text-secondary transition hover:text-primary"
              >
                Забронировать съёмку →
              </Link>
            </div>
          </div>

          <motion.ul
            data-hero-line
            className="flex flex-col gap-6 text-sm text-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {stats.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-primary">{stat.value}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-muted">
                  {stat.label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
