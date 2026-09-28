"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import type { PortfolioProject } from "@/lib/data";
import { getCategoryLabel, getToneClasses, orientationToAspectRatio } from "@/lib/portfolio";

type GalleryCardProps = {
  project: PortfolioProject;
  order: number;
  onOpen: () => void;
};

const transition = { type: "spring" as const, stiffness: 70, damping: 20 };

export function GalleryCard({ project, order, onOpen }: GalleryCardProps) {
  const tone = getToneClasses(project.cover.tone);
  const aspectRatio = orientationToAspectRatio[project.cover.orientation];
  const categoryLabel = getCategoryLabel(project.category);
  const badgeIndex = order + 1;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full overflow-hidden rounded-3xl border border-soft bg-card text-left shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent-bg)]"
      aria-label={`Открыть проект ${project.title}`}
      style={{ aspectRatio, transition: "box-shadow 0.3s ease" }}
    >
      <div className="absolute inset-0">
        <Image
          src={project.cover.src}
          alt={project.cover.alt || project.title}
          fill
          className="object-cover"
          priority={Boolean(project.cover.priority)}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--scrim-strong)] via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] backdrop-blur-sm ${tone.badgeBg} ${tone.badgeText}`}
          >
            {badgeIndex < 10 ? `0${badgeIndex}` : badgeIndex}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-white backdrop-blur-sm">
            {categoryLabel}
          </span>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{project.location}</p>
          <h3 className={`text-xl font-semibold drop-shadow ${tone.titleText}`}>{project.title}</h3>
        </div>
      </div>
    </motion.button>
  );
}
