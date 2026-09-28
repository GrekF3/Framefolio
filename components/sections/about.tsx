"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { siteConfig } from "@/lib/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-24 sm:py-32 md:flex-row md:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="md:flex-1"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          О фотографе
        </p>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-primary md:text-4xl">
          Стильная фотосъемка в Краснодаре без лишнего шума
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary">
          {siteConfig.photographerName} строит съемочный процесс вокруг идеи клиента и особенностей локации. Работаем в лучших студиях Краснодара, подключаем стилистов и визажистов, подбираем свет под настроение и характер бренда или героя кадра.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary">
          В портфолио — кампании локальных марок, fashion-истории для маркетплейсов, семейные и персональные студийные проекты. На площадке сохраняем спокойный темп, выстраиваем кадр через свет и геометрию, чтобы снимки выглядели премиально и актуально.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 text-xs uppercase tracking-[0.35em] text-muted">
          <div>
            <span className="block text-sm font-semibold text-primary">
              100+ смен
            </span>
            студийный опыт в Краснодаре
          </div>
          <div>
            <span className="block text-sm font-semibold text-primary">
              72 часа
            </span>
            запуск проекта от брифа до съемки
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="md:flex-1"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] border border-soft shadow-strong">
          <Image
            src="https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80"
            alt={`Портрет фотографа ${siteConfig.photographerName}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}