import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Inter is the primary typeface used across all body copy and headings.
 * JetBrains Mono is reserved exclusively for code snippets and badges.
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
