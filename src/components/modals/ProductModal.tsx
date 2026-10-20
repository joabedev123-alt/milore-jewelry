"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Modal } from "@/components/ui/Modal";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/icons/BootstrapIcon";
import { buildWhatsAppProductUrl } from "@/config/site";
import { useCatalog } from "@/context/CatalogContext";

export function ProductModal() {
  const { selectedProduct, closeProduct } = useCatalog();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [selectedProduct?.id]);

  if (!selectedProduct) return null;

  const images = selectedProduct.images;
  const active = images[activeIndex] ?? images[0];
  const waUrl = buildWhatsAppProductUrl(selectedProduct.name);

  return (
    <Modal
      open={!!selectedProduct}
      onClose={closeProduct}
      title={selectedProduct.name}
      variant="drawer"
    >
      <div className="space-y-6">
        <div className="relative aspect-[4/5] overflow-hidden bg-rose-soft">
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(max-width: 512px) 100vw, 500px"
            className="object-cover"
            priority
          />
          {active.isDemo && (
            <span className="absolute bottom-3 left-3 bg-white/90 px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-muted">
              Demo imagery
            </span>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2" role="tablist" aria-label="Product images">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`View image ${i + 1}`}
                onClick={() => setActiveIndex(i)}
                className={`relative h-16 w-14 cursor-pointer overflow-hidden ${
                  i === activeIndex ? "ring-1 ring-gold" : "opacity-70"
                }`}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div>
          <p className="text-[13px] tracking-[0.06em] text-muted uppercase">
            {selectedProduct.material}
          </p>
          {selectedProduct.priceUsd != null && (
            <p className="mt-2 font-serif text-2xl text-ink">
              ${selectedProduct.priceUsd.toFixed(2)}
            </p>
          )}
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            {selectedProduct.description}
          </p>
        </div>

        {selectedProduct.options && selectedProduct.options.length > 0 && (
          <div>
            <h3 className="font-sans text-[11px] font-medium tracking-[0.14em] text-ink uppercase">
              Options
            </h3>
            <ul className="mt-2 space-y-1">
              {selectedProduct.options.map((opt) => (
                <li key={opt} className="text-[14px] text-muted">
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h3 className="font-sans text-[11px] font-medium tracking-[0.14em] text-ink uppercase">
            Care
          </h3>
          <p className="mt-2 text-[14px] text-muted">{selectedProduct.care}</p>
        </div>

        <ExternalLink href={waUrl} className="btn-primary w-full">
          <Icon name="whatsapp" size={16} />
          Ask About This Piece
        </ExternalLink>
      </div>
    </Modal>
  );
}
