import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";

import { Footer } from "@/components/footer";
import { LenisProvider } from "@/components/lenis-provider";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.brand} — портфолио фотографа`,
  description:
    "Минималистичное портфолио премиального фотографа: работы, услуги, отзывы и бронирование. Стиль, скорость и максимальная вовлеченность.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} antialiased transition-colors selection:bg-[color:var(--accent-bg)] selection:text-[color:var(--accent-text)]`}>
        <ThemeProvider>
          <LenisProvider>
            <Navigation />
            {children}
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}