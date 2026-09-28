"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, spring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import type { PortfolioProject } from "@/lib/data";
import { getCategoryLabel, orientationToAspectRatio } from "@/lib/portfolio";

const dialogTransition = { type: spring, stiffness: 70, damping: 20 };
const swipeOptions = {
  align: "center" as const,
  loop: true,
  duration: 20,
};

type PortfolioLightboxProps = {
  project: PortfolioProject | null;
  open: boolean;
  initialIndex: number;
  onClose: () => void;
};

export function PortfolioLightbox({ project, open, initialIndex, onClose }: PortfolioLightboxProps) {
  const images = useMemo(() => project?.gallery ?? [], [project]);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [emblaRef, emblaApi] = useEmblaCarousel(swipeOptions);

  useEffect(() => {
    if (!open || !project) return;
    const safeIndex = Math.min(initialIndex, Math.max(images.length - 1, 0));
    setCurrentIndex(safeIndex);
  }, [open, initialIndex, project, images.length]);

  useEffect(() => {
    if (!emblaApi || !open || !project) return;
    const safeIndex = Math.min(initialIndex, Math.max(images.length - 1, 0));
    emblaApi.reInit({ ...swipeOptions, startIndex: safeIndex });
    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, initialIndex, open, images.length, project]);

  useEffect(() => {
    if (!emblaApi || !open || !project) return;
    const safeIndex = Math.min(initialIndex, Math.max(images.length - 1, 0));
    emblaApi.scrollTo(safeIndex, true);
  }, [emblaApi, initialIndex, open, images.length, project]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, scrollNext, scrollPrev, onClose]);

  const thumbnails = useMemo(
    () =>
      images.map((image, index) => ({
        image,
        index,
        isActive: index === currentIndex,
      })),
    [images, currentIndex]
  );

  const overlayClass =
    "fixed inset-0 z-[90] bg-[color-mix(in_oklab,var(--page-bg)_70%,black)]/80 backdrop-blur";
  const dialogShellClass =
    "relative flex w-full max-w-5xl max-h-[90vh] flex-col gap-6 overflow-hidden rounded-[36px] border border-soft bg-card shadow-strong shadow-black/40 backdrop-blur-xl focus:outline-none sm:p-8 p-6";
  const arrowClassBase =
    "hidden h-12 w-12 items-center justify-center rounded-full border border-soft text-primary transition hover:border-strong hover:bg-overlay focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-bg)] sm:flex";

  const aspectHeight = "min(60vh, 560px)";

  return (
    <Dialog.Root open={open} onOpenChange={(next) => (!next ? onClose() : undefined)}>
      <AnimatePresence>
        {open && project && images.length > 0 && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.button
                type="button"
                className={overlayClass}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                aria-label="Закрыть просмотр"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={dialogTransition}
              >
                <div className={dialogShellClass}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Dialog.Title className="text-xs uppercase tracking-[0.35em] text-muted">
                      {getCategoryLabel(project.category)} · {currentIndex + 1} / {images.length}
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="rounded-full border border-soft px-4 py-2 text-xs uppercase tracking-[0.35em] text-muted transition hover:border-strong hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-bg)]"
                      >
                        Закрыть
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={scrollPrev}
                      className={arrowClassBase + " -translate-x-2 sm:-translate-x-3"}
                      aria-label="Предыдущее изображение"
                    >
                      ←
                    </button>
                    <div className="flex-1 overflow-hidden" ref={emblaRef}>
                      <div className="flex">
                        {images.map((image) => {
                          const aspectRatio = orientationToAspectRatio[image.orientation];
                          return (
                            <div key={image.id} className="relative w-full flex-shrink-0" style={{ flexBasis: "100%" }}>
                              <div
                                className="relative w-full overflow-hidden rounded-3xl border border-soft bg-black"
                                style={{ aspectRatio, maxHeight: aspectHeight }}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 60vw"
                                  priority={Boolean(project.cover.priority)}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={scrollNext}
                      className={arrowClassBase + " translate-x-2 sm:translate-x-3"}
                      aria-label="Следующее изображение"
                    >
                      →
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted">{project.location}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-1 items-center gap-2 overflow-x-auto">
                      {thumbnails.map((thumb) => {
                        const thumbBorder = thumb.isActive
                          ? "border-[color:var(--accent-bg)]"
                          : "border-soft";
                        const thumbClasses =
                          "relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border " +
                          thumbBorder +
                          " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-bg)]";
                        const thumbAspect = orientationToAspectRatio[thumb.image.orientation];

                        return (
                          <button
                            key={thumb.image.id}
                            type="button"
                            onClick={() => emblaApi?.scrollTo(thumb.index)}
                            className={thumbClasses}
                            aria-label={`Перейти к кадру ${thumb.index + 1}`}
                            style={{ aspectRatio: thumbAspect }}
                          >
                            <Image src={thumb.image.src} alt="" fill className="object-cover" sizes="64px" />
                          </button>
                        );
                      })}
                    </div>
                    <Link href="#contact" className="btn-accent whitespace-nowrap">
                      Заказать съёмку
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
