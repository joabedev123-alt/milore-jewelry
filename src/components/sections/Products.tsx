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
      className="section-pad !pt-8 sm:!pt-14 md:!pt-20"
      style={{ backgroundColor: "#E8C9C6" }}
      aria-labelledby="jewelry-heading"
    >
      <div className="container-site">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">The Milóre Edit</p>
            <h2
              id="jewelry-heading"
              className="section-title mt-3 sm:mt-4"
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
                className="inline-flex min-h-11 shrink-0 cursor-pointer items-center px-4 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 sm:text-[12px]"
                style={{
                  backgroundColor: filter === f.id ? "#C9A49F" : "#F5EAE6",
                  color: filter === f.id ? "#FFFFFF" : "#8C6239",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
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
                    <div className="media-frame">
                      <Image
                        src={primary.src}
                        alt={primary.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`media-cover transition-[opacity,transform] duration-500 ${
                          secondary
                            ? "md:group-hover:opacity-0"
                            : "md:group-hover:scale-[1.02]"
                        }`}
                        loading="lazy"
                      />
                      {secondary && (
                        <Image
                          src={secondary.src}
                          alt={secondary.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="media-cover opacity-0 transition-opacity duration-500 md:group-hover:opacity-100"
                          loading="lazy"
                        />
                      )}
                      {primary.isDemo && (
                        <span className="absolute top-3 left-3 bg-sand/95 px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-muted">
                          Demo
                        </span>
                      )}
                    </div>
                  </button>

                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-serif text-base sm:text-xl">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-muted sm:mt-1 sm:text-[13px]">
                      {product.material}
                    </p>
                    {product.priceUsd != null && (
                      <p className="mt-1 text-[14px]" style={{ color: "#8C6239" }}>
                        ${product.priceUsd.toFixed(2)}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => openProduct(product)}
                      className="btn-ghost mt-2 min-h-11 w-full justify-start text-[12px] sm:mt-3 sm:w-auto sm:text-[13px]"
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
