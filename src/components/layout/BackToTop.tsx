"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/BootstrapIcon";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-white text-ink transition-colors duration-250 hover:border-gold hover:text-gold sm:h-12 sm:w-12 md:bottom-8 md:right-8"
      aria-label="Back to top"
    >
      <Icon name="chevron-down" size={18} className="rotate-180" />
    </button>
  );
}
