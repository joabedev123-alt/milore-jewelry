import Image from "next/image";
import { editorialFeature } from "@/config/site";
import { Icon } from "@/components/icons/BootstrapIcon";

export function Editorial() {
  const { title, text, cta, image } = editorialFeature;

  return (
    <section
      className="relative overflow-hidden bg-ink"
      aria-labelledby="editorial-heading"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          {image.isDemo && (
            <span className="absolute bottom-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
              Demo imagery
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center bg-ink px-8 py-16 text-white sm:px-12 lg:px-16 xl:px-20">
          <h2
            id="editorial-heading"
            className="font-serif text-4xl leading-tight md:text-5xl text-balance"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            {text}
          </p>
          <a
            href={cta.href}
            className="mt-10 inline-flex w-fit items-center gap-2 border border-white/30 px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition-colors duration-250 hover:border-dusty hover:text-dusty"
          >
            {cta.label}
            <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
