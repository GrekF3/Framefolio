"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { PortfolioCategory, PortfolioProject } from "@/lib/data";
import { portfolioProjects } from "@/lib/data";
import { FilterBar } from "@/components/portfolio/filter-bar";
import { GalleryCard } from "@/components/portfolio/gallery-card";
import { PortfolioLightbox } from "@/components/portfolio/lightbox";

const transition = { type: "spring" as const, stiffness: 70, damping: 20 };

type ModalState = {
  open: boolean;
  project: PortfolioProject | null;
  index: number;
};

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "all">("all");
  const [modalState, setModalState] = useState<ModalState>({ open: false, project: null, index: 0 });

  const projects = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioProjects;
    }
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!modalState.open) return;
    if (!modalState.project) return;
    const updatedProject = projects.find((project) => project.id === modalState.project?.id);
    if (!updatedProject) {
      setModalState({ open: false, project: null, index: 0 });
      return;
    }
    if (modalState.index >= updatedProject.gallery.length) {
      setModalState({ open: true, project: updatedProject, index: updatedProject.gallery.length - 1 });
    } else if (updatedProject !== modalState.project) {
      setModalState((prev) => ({ ...prev, project: updatedProject }));
    }
  }, [projects, modalState]);

  const handleOpen = (project: PortfolioProject, index: number) => {
    setModalState({ open: true, project, index });
  };

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Портфолио</p>
          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
            Студийные истории и комфортные съёмки в Краснодаре
          </h2>
          <p className="text-sm leading-relaxed text-secondary">
            Подбираем студию, свет и темп съёмки под задачу. Работаем в формате, который комфортен клиенту, и сохраняем стиль кадра в каждой категории.
          </p>
        </div>
        <FilterBar activeCategory={activeCategory} onChange={setActiveCategory} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={transition}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <GalleryCard
              key={project.id}
              project={project}
              order={idx}
              onOpen={() => handleOpen(project, 0)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <PortfolioLightbox
        project={modalState.project}
        open={modalState.open}
        initialIndex={modalState.index}
        onClose={() => setModalState({ open: false, project: null, index: 0 })}
      />
    </section>
  );
}
