"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { servicesForBooking } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const fieldClass = "rounded-2xl border border-soft bg-transparent px-5 py-3 text-sm text-primary outline-none transition focus:border-strong";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    event.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Контакты</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Забронируйте студийную съёмку в Краснодаре
          </h2>
          <p className="text-sm leading-relaxed text-secondary">
            Отвечаем в течение рабочего дня, помогаем выбрать студию, собрать команду и подготовиться к съёмке. {siteConfig.serviceArea}. Минимальная стоимость заказа — {siteConfig.startingPrice}.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-secondary">
            <Link href="https://t.me/example" target="_blank" className="btn-outline">
              Связаться в Telegram
            </Link>
            <span className="text-muted">или заполните форму бронирования</span>
          </div>
          <div className="text-xs uppercase tracking-[0.35em] text-muted">
            {siteConfig.contactLocations}
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-6 rounded-[32px] border border-soft bg-card p-8 shadow-soft backdrop-blur sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
              Имя
              <input type="text" name="name" required placeholder="Анна" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
              Email
              <input type="email" name="email" required placeholder="hello@example.com" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
              Телефон
              <input type="tel" name="phone" required placeholder="+1 555 010 0000" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
              Дата
              <input type="date" name="date" required className={fieldClass} />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
            Услуга
            <select name="service" required className={`${fieldClass} appearance-none`} defaultValue="">
              <option value="" disabled>
                Выберите пакет
              </option>
              {servicesForBooking.map((service) => (
                <option key={service} value={service} className="bg-card text-primary">
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-muted">
            Детали проекта
            <textarea
              name="details"
              rows={4}
              placeholder="Важные нюансы съемки, референсы, дедлайны"
              className={`${fieldClass} resize-none`}
            />
          </label>
          <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn-accent px-10">
            Забронировать дату
          </motion.button>
          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.35em] text-muted">
              Спасибо! Мы свяжемся с вами в течение дня.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}