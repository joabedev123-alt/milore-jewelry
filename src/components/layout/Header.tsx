"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/icons/BootstrapIcon";
import { navLinks, siteConfig } from "@/config/site";

const SECTION_IDS = [
  "home",
  "jewelry",
  "about",
  "care",
  "faq",
  "contact",
  "instagram",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [headerOffset, setHeaderOffset] = useState(108);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const measure = () => setHeaderOffset(el.offsetHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const map: Record<string, string> = {
              jewelry: "jewelry",
              instagram: "contact",
            };
            setActive(map[id] ?? id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.classList.add("menu-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const focusable = panelRef.current?.querySelector<HTMLElement>(
      "a, button"
    );
    focusable?.focus();

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  const navHrefActive = (href: string) => {
    const id = href.replace("#", "");
    return active === id;
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      {/* Top bar */}
      <div className="text-center" style={{ backgroundColor: "#C9A49F" }}>
        <div className="container-site flex flex-col items-center justify-center gap-0.5 py-1.5 text-[11px] tracking-[0.03em] text-white sm:flex-row sm:gap-x-4 sm:py-2.5 sm:text-[12px] sm:tracking-[0.04em]">
          <span>{siteConfig.announcements.topBar}</span>
          <a
            href={siteConfig.announcements.topBarLink.href}
            className="inline-flex min-h-11 cursor-pointer items-center px-2 text-[10px] font-medium tracking-[0.08em] text-white uppercase underline-offset-4 transition-colors duration-200 hover:text-sand hover:underline sm:min-h-0 sm:px-0 sm:text-[11px]"
          >
            {siteConfig.announcements.topBarLink.label}
          </a>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`border-b backdrop-blur-sm transition-[border-color,box-shadow] duration-250 ${
          scrolled
            ? "border-line shadow-[0_1px_0_rgba(42,34,31,0.06)]"
            : "border-[#C9A49F]/40"
        }`}
        style={{ backgroundColor: "rgba(245, 234, 230, 0.95)" }}
      >
        <div className="container-site flex h-14 items-center justify-between gap-3 sm:h-[4.25rem] md:h-[4.75rem]">
          <a
            href="#home"
            className="min-w-0 shrink truncate"
            aria-label="Milóre Jewelry home"
          >
            <Logo size="sm" className="sm:hidden" />
            <Logo className="hidden sm:inline" />
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-nav"
                data-active={navHrefActive(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ExternalLink
              href={siteConfig.social.instagram.url}
              className="flex h-11 w-11 cursor-pointer items-center justify-center transition-colors duration-200 hover:opacity-70"
              style={{ color: "#8C6239" }}
              aria-label={`Follow Milóre on Instagram ${siteConfig.social.instagram.handle}`}
            >
              <Icon name="instagram" size={18} />
            </ExternalLink>
            <a href="#jewelry" className="btn-primary">
              Explore Jewelry
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center lg:hidden"
            style={{ color: "#8C6239" }}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "x-lg" : "list"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          style={{ top: headerOffset }}
          id={menuId}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-ink/25"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            ref={panelRef}
            className="relative ml-auto flex h-full w-[min(100%,22rem)] flex-col overflow-y-auto overscroll-contain bg-warm px-5 py-6 shadow-[-4px_0_24px_rgba(37,35,34,0.06)] safe-bottom sm:w-full sm:max-w-sm sm:px-6 sm:py-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-0.5" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-line py-3.5 font-serif text-[1.35rem] transition-colors duration-200 hover:opacity-70 sm:py-4 sm:text-2xl"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
              <a
                href="#jewelry"
                className="btn-primary w-full"
                onClick={closeMenu}
              >
                Explore Jewelry
              </a>
              <ExternalLink
                href={siteConfig.contact.whatsapp.url}
                className="btn-secondary w-full"
                onClick={closeMenu}
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp
              </ExternalLink>
              <ExternalLink
                href={siteConfig.social.instagram.url}
                className="btn-ghost justify-center"
                onClick={closeMenu}
              >
                <Icon name="instagram" size={16} />
                {siteConfig.social.instagram.handle}
              </ExternalLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
