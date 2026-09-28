import type { PortfolioCategory, PortfolioGalleryImage } from "./data";

export const portfolioCategories: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "Все проекты" },
  { value: "weddings", label: "Свадьбы" },
  { value: "portraits", label: "Портреты" },
  { value: "fashion", label: "Фэшн" },
  { value: "family", label: "Семейная" },
  { value: "commercial", label: "Коммерческая" },
  { value: "travel", label: "Путешествия" },
  { value: "reportage", label: "Репортаж" },
  { value: "lifestyle", label: "Лайфстайл" },
];

const categoryLabelMap = new Map(portfolioCategories.map((item) => [item.value, item.label]));

export function getCategoryLabel(category: PortfolioCategory | "all") {
  return categoryLabelMap.get(category) ?? category;
}

export const orientationToAspectClass: Record<PortfolioGalleryImage["orientation"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export const orientationToAspectRatio: Record<PortfolioGalleryImage["orientation"], string> = {
  portrait: "3 / 4",
  landscape: "4 / 3",
  square: "1 / 1",
};

export function getToneClasses(tone: PortfolioGalleryImage["tone"]) {
  if (tone === "light") {
    return {
      badgeBg: "bg-white/75",
      badgeText: "text-primary",
      titleText: "text-primary",
    };
  }
  return {
    badgeBg: "bg-black/70",
    badgeText: "text-white",
    titleText: "text-white",
  };
}
