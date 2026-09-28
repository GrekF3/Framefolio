"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { testimonials } from "@/lib/data";

const interval = 7000;

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Отзывы
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Краснодарские клиенты о совместных съёмках
          </h2>
          <p className="text-sm leading-relaxed text-secondary">
            Работаем с локальными брендами, семейными историями и камерными мероприятиями. В студии сохраняем комфорт и темп, чтобы результат выглядел премиально, а процесс проходил спокойно.
          </p>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-[32px] border border-soft bg-card p-8 shadow-strong backdrop-blur-lg sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              <p className="text-lg font-light leading-relaxed text-primary text-balance">
                “{testimonials[activeIndex].quote}”
              </p>
              <div className="text-xs uppercase tracking-[0.35em] text-secondary">
                <span className="block text-sm font-semibold text-primary">
                  {testimonials[activeIndex].name}
                </span>
                {testimonials[activeIndex].role}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center gap-4">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={testimonial.name}
                  onClick={() => setActiveIndex(index)}
                  className="group relative h-3 w-16 overflow-hidden rounded-full border border-soft"
                >
                  <motion.span
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: isActive ? interval / 1000 : 0.3, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-[color:var(--accent-bg)]"
                  />
                  <span className="sr-only">{testimonial.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}