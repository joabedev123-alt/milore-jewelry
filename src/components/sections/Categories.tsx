"use client";

import Image from "next/image";
import { Icon } from "@/components/icons/BootstrapIcon";
import { getActiveCategories } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function Categories() {
  const { applyCategoryFilter, filter } = useCatalog();
  const activeCategories = getActiveCategories();

  return (
    <section
      id="collections"
      className="section-pad bg-white"
      aria-labelledby="collections-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Find Your Signature</p>
          <h2
            id="collections-heading"
            className="mt-3 font-serif text-[2rem] text-ink sm:mt-4 sm:text-4xl md:text-5xl text-balance"
          >
            Little details. Beautiful possibilities.
          </h2>
          <p className="mt-4 text-[15px] text-muted sm:mt-5 sm:text-[16px]">
            Explore pieces that complement your style, your mood, and your
            everyday.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {activeCategories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => applyCategoryFilter(cat.id)}
                  className={`group relative block w-full cursor-pointer overflow-hidden text-left transition-[box-shadow] duration-250 ${
                    isActive ? "ring-1 ring-dusty" : ""
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-rose-soft">
                    <Image
                      src={cat.image.src}
                      alt={cat.image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {cat.image.isDemo && (
                      <span className="absolute top-2 left-2 bg-white/90 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] text-muted sm:top-3 sm:left-3 sm:px-2 sm:text-[9px]">
                        Demo
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 border border-t-0 border-line px-2.5 py-3 sm:px-4 sm:py-4">
                    <div className="min-w-0">
                      <span className="font-serif text-base text-ink sm:text-xl">
                        {cat.name}
                      </span>
                      <p className="mt-0.5 hidden text-[13px] text-muted sm:block">
                        {cat.description}
                      </p>
                    </div>
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="shrink-0 text-dusty transition-transform duration-250 group-hover:translate-x-1"
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
