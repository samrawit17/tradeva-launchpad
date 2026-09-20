import Lenis from "lenis";

export type LenisInstance = Lenis | null;

let globalLenis: LenisInstance = null;

export function setGlobalLenis(instance: LenisInstance) {
  globalLenis = instance;
}

export function getGlobalLenis(): LenisInstance {
  return globalLenis;
}

export function scrollToSection(
  target: string | HTMLElement,
  options?: { offset?: number; duration?: number },
) {
  const offset = options?.offset ?? -72;
  const duration = options?.duration ?? 1.2;
  const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

  if (globalLenis) {
    if (typeof target === "string") {
      if (target === "#top" || target === "top" || target === "#") {
        globalLenis.scrollTo(0, { offset: 0, duration, easing });
        return;
      }
      const el = document.querySelector(target.startsWith("#") ? target : `#${target}`);
      if (el) {
        globalLenis.scrollTo(el as HTMLElement, { offset, duration, easing });
      }
    } else {
      globalLenis.scrollTo(target, { offset, duration, easing });
    }
  } else if (typeof window !== "undefined") {
    if (typeof target === "string") {
      if (target === "#top" || target === "top" || target === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(target.startsWith("#") ? target : `#${target}`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
}
