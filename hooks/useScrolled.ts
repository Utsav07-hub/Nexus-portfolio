"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Used by the Navbar to toggle its blurred background state.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
