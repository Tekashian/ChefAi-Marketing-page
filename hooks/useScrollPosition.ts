"use client";

import { useState, useEffect } from "react";

/**
 * Hook to track scroll position
 * @returns number - current scroll Y position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}

/**
 * Hook to detect if user has scrolled past a certain threshold
 * @param threshold - number of pixels to scroll before returning true
 * @returns boolean - true if scrolled past threshold
 */
export function useScrollThreshold(threshold: number = 100) {
  const scrollPosition = useScrollPosition();
  return scrollPosition > threshold;
}
