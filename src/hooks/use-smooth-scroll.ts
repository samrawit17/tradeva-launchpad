import { createContext, useContext } from "react";
import { scrollToSection, type LenisInstance } from "@/lib/scroll-utils";

export interface SmoothScrollContextType {
  lenis: LenisInstance;
  scrollTo: (
    target: string | HTMLElement,
    options?: { offset?: number; duration?: number },
  ) => void;
  scrollProgress: number;
  scrollY: number;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: scrollToSection,
  scrollProgress: 0,
  scrollY: 0,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
