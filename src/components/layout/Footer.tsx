"use client";

import { Logo } from "@/components/ui/Logo";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/icons/BootstrapIcon";
import { siteConfig } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function Footer() {
  const { openPolicy } = useCatalog();
  const year = new Date().getFullYear();
  const { policies } = siteConfig;

  return (
    <footer className="border-t border-line bg-warm">
      <div className="container-site section-pad !pb-12 !pt-16 md:!pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" aria-label="Milóre Jewelry home">
              <Logo size="sm" />
            </a>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Collections", href: "#collections" },
                { label: "Our Story", href: "#about" },
                { label: "Jewelry Care", href: "#care" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              Customer Care
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#faq"
                  className="text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                >
                  Contact
                </a>
              </li>
              {policies.shipping && (
                <li>
                  <button
                    type="button"
                    onClick={() => openPolicy("shipping")}
                    className="cursor-pointer text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    Shipping Information
                  </button>
                </li>
              )}
              {policies.returns && (
                <li>
                  <button
                    type="button"
                    onClick={() => openPolicy("returns")}
                    className="cursor-pointer text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    Returns &amp; Exchanges
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <ExternalLink
                  href={siteConfig.social.instagram.url}
                  className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                >
                  <Icon name="instagram" size={15} />
                  Instagram
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={siteConfig.contact.whatsapp.url}
                  className="inline-flex items-center gap-2 text-[15px] text-muted transition-colors duration-200 hover:text-ink"
                >
                  <Icon name="whatsapp" size={15} />
                  WhatsApp
                </ExternalLink>
              </li>
              <li className="pt-1 text-[15px] text-muted">
                {siteConfig.brand.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-muted">
            © {year} {siteConfig.brand.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {policies.privacy && (
              <button
                type="button"
                onClick={() => openPolicy("privacy")}
                className="cursor-pointer text-[13px] text-muted transition-colors duration-200 hover:text-ink"
              >
                Privacy Policy
              </button>
            )}
            {policies.terms && (
              <button
                type="button"
                onClick={() => openPolicy("terms")}
                className="cursor-pointer text-[13px] text-muted transition-colors duration-200 hover:text-ink"
              >
                Terms of Use
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
