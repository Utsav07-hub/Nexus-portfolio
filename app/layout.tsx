import type { Metadata, Viewport } from "next";
import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import "@/app/globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider>
          <MotionProvider>
            <Layout>{children}</Layout>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
