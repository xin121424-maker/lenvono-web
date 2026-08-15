"use client";

import { useEffect } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function DetailPageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".detail-reveal"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        node.textContent = `${node.dataset.count}${node.dataset.suffix ?? ""}`;
      });
      return;
    }

    const animateCount = (node: HTMLElement) => {
      if (node.dataset.animated === "true") return;
      node.dataset.animated = "true";
      const target = Number(node.dataset.count ?? 0);
      const suffix = node.dataset.suffix ?? "";
      const startedAt = performance.now();
      const duration = 1100;
      const frame = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) window.requestAnimationFrame(frame);
      };
      window.requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        target.classList.add("is-visible");
        target.querySelectorAll<HTMLElement>("[data-count]").forEach(animateCount);
        if (target.matches("[data-count]")) animateCount(target);
        observer.unobserve(target);
      });
    }, { threshold: 0.16 });

    revealItems.forEach((item) => observer.observe(item));
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="detail-page">
      <SiteHeader light />
      {children}
      <SiteFooter />
    </main>
  );
}
