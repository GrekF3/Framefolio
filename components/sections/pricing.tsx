"use client";

import { motion } from "framer-motion";

import { servicePackages } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="max-w-md space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Прайс-лист
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Прозрачные тарифы на студийные проекты в Краснодаре
          </h2>
          <p className="text-sm leading-relaxed text-secondary">
            {siteConfig.serviceArea}. Стоимость формируем исходя из задач, количества образов, команды и аренды студии. Минимальный заказ — {siteConfig.startingPrice}.
          </p>
        </div>
        <div className="grid flex-1 gap-6">
          {servicePackages.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-3xl border border-soft bg-card p-7 shadow-soft backdrop-blur sm:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold uppercase tracking-[0.3em] text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">
                    {service.description}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-secondary">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}