"use client";

import Image from "next/image";
import { careSection, careTips } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function Care() {
  const { openCare } = useCatalog();
  const { eyebrow, title, intro, image } = careSection;

  return (
    <section
      id="care"
      className="section-pad bg-white"
      aria-labelledby="care-heading"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="eyebrow">{eyebrow}</p>
            <h2
              id="care-heading"
              className="mt-4 font-serif text-4xl text-ink md:text-5xl"
            >
              {title}
            </h2>

            <ul className="mt-9 space-y-6">
              {careTips.summary.map((tip) => (
                <li key={tip.title} className="border-l border-gold/50 pl-5">
                  <h3 className="font-serif text-xl text-ink">{tip.title}</h3>
                  <p className="mt-1 text-[15px] text-muted">{tip.text}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
              {intro}
            </p>

            <button
              type="button"
              onClick={openCare}
              className="btn-secondary mt-8"
            >
              View Care Tips
            </button>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[5/4] overflow-hidden bg-rose-soft lg:aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                loading="lazy"
              />
              {image.isDemo && (
                <span className="absolute bottom-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Demo imagery
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
