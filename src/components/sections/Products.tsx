"use client";

import Image from "next/image";
import { Icon } from "@/components/icons/BootstrapIcon";
import { getActiveCategories, type CategoryId } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

const FILTERS: { id: "all" | CategoryId; label: string }[] = [
  { id: "all", label: "All" },
  ...getActiveCategories().map((c) => ({ id: c.id, label: c.name })),
];

export function Products() {
  const { filter, setFilter, filteredProducts, openProduct } = useCatalog();

  return (
    <section
      id="jewelry"
      className="section-pad bg-warm"
      aria-labelledby="jewelry-heading"
    >
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">The Milóre Edit</p>
            <h2
              id="jewelry-heading"
              className="mt-3 font-serif text-[2rem] text-ink sm:mt-4 sm:text-4xl md:text-5xl text-balance"
            >
              Discover your next favorite.
            </h2>
          </div>

          <div
            className="chip-scroll"
            role="tablist"
            aria-label="Filter by category"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 cursor-pointer px-4 py-2.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 sm:text-[12px] ${
                  filter === f.id
                    ? "bg-ink text-white"
                    : "bg-white text-muted hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => {
            const primary = product.images[0];
            const secondary = product.images[1];
            return (
              <li key={product.id}>
                <article className="group">
                  <button
                    type="button"
                    onClick={() => openProduct(product)}
                    className="block w-full cursor-pointer text-left"
                    aria-label={`View details for ${product.name}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-rose-soft">
                      <Image
                        src={primary.src}
                        alt={primary.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        className={`object-cover transition-opacity duration-300 ${
                          secondary
                            ? "group-hover:opacity-0"
                            : "group-hover:scale-[1.02] transition-transform duration-500"
                        }`}
                        loading="lazy"
                      />
                      {secondary && (
                        <Image
                          src={secondary.src}
                          alt={secondary.alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          loading="lazy"
                        />
                      )}
                      {primary.isDemo && (
                        <span className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-muted">
                          Demo
                        </span>
                      )}
                    </div>
                  </button>

                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-serif text-base text-ink sm:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-muted sm:mt-1 sm:text-[13px]">
                      {product.material}
                    </p>
                    {product.priceUsd != null && (
                      <p className="mt-1 text-[14px] text-ink">
                        ${product.priceUsd.toFixed(2)}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => openProduct(product)}
                      className="btn-ghost mt-2 min-h-10 text-[12px] sm:mt-3 sm:min-h-11 sm:text-[13px]"
                    >
                      View Details
                      <Icon name="arrow-right" size={14} />
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {filteredProducts.length === 0 && (
          <p className="mt-12 text-center text-muted">
            No pieces in this category just yet. Explore another collection.
          </p>
        )}
      </div>
    </section>
  );
}
