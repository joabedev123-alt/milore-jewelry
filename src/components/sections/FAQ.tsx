"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/BootstrapIcon";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { faqItems, siteConfig } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const { openCare } = useCatalog();

  return (
    <section
      id="faq"
      className="section-pad"
      style={{ backgroundColor: "#F5EAE6" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="section-title"
          >
            A few things you may be wondering.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-line border-y border-line sm:mt-12">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    id={`${item.id}-btn`}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-200 hover:text-dusty sm:min-h-0 sm:py-5"
                  >
                    <span
                      className="font-serif text-lg sm:text-xl md:text-[1.35rem]"
                      style={{ color: "#8C6239" }}
                    >
                      {item.question}
                    </span>
                    <Icon
                      name={isOpen ? "dash" : "plus"}
                      size={16}
                      className="shrink-0"
                      style={{ color: "#C9A49F" }}
                    />
                  </button>
                </h3>
                <div
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={`${item.id}-btn`}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-[15px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                  {item.action === "care" && (
                    <button
                      type="button"
                      onClick={openCare}
                      className="btn-ghost mt-3"
                    >
                      View Care Tips
                      <Icon name="arrow-right" size={14} />
                    </button>
                  )}
                  {item.id === "faq-6" && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      <ExternalLink
                        href={siteConfig.contact.whatsapp.url}
                        className="btn-ghost"
                      >
                        <Icon name="whatsapp" size={14} />
                        WhatsApp
                      </ExternalLink>
                      <ExternalLink
                        href={siteConfig.social.instagram.url}
                        className="btn-ghost"
                      >
                        <Icon name="instagram" size={14} />
                        Instagram
                      </ExternalLink>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
