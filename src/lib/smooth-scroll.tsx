import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { setGlobalLenis, scrollToSection, type LenisInstance } from "@/lib/scroll-utils";
import { SmoothScrollContext } from "@/hooks/use-smooth-scroll";

export function SmoothScrollManager({ children }: { children?: ReactNode }) {
  const [lenis, setLenis] = useState<LenisInstance>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const handleScroll = () => {
        const currentY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setScrollY(currentY);
        setScrollProgress(maxScroll > 0 ? Math.min(1, Math.max(0, currentY / maxScroll)) : 0);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.3,
      infinite: false,
    });

    setGlobalLenis(instance);
    setLenis(instance);

    // RAF Loop
    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Track scroll metrics
    const onLenisScroll = (e: { scroll: number; progress: number; velocity: number }) => {
      setScrollY(e.scroll);
      setScrollProgress(e.progress);
    };
    instance.on("scroll", onLenisScroll);

    // Intercept hash clicks globally for fluid motion
    const handleGlobalClick = (event: MouseEvent) => {
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.defaultPrevented
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Handle anchor links
      if (href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/")) {
        const hash = href.startsWith("/#") ? href.slice(1) : href;
        if (hash === "#" || hash === "") return;

        event.preventDefault();

        if (hash === "#top") {
          instance.scrollTo(0, {
            offset: 0,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          window.history.pushState(null, "", window.location.pathname);
          return;
        }

        const targetEl = document.querySelector(hash);
        if (targetEl) {
          instance.scrollTo(targetEl as HTMLElement, {
            offset: -72,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          window.history.pushState(null, "", hash);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, { capture: true });

    // Handle initial hash on mount if present
    if (window.location.hash) {
      const initialHash = window.location.hash;
      setTimeout(() => {
        const targetEl = document.querySelector(initialHash);
        if (targetEl) {
          instance.scrollTo(targetEl as HTMLElement, {
            offset: -72,
            duration: 1.2,
            immediate: false,
          });
        }
      }, 100);
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleGlobalClick, {
        capture: true,
      });
      instance.destroy();
      setGlobalLenis(null);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider
      value={{
        lenis,
        scrollTo: scrollToSection,
        scrollProgress,
        scrollY,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
}
