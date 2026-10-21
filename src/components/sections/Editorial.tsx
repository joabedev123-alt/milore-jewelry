import Image from "next/image";
import { editorialFeature } from "@/config/site";
import { Icon } from "@/components/icons/BootstrapIcon";

export function Editorial() {
  const { title, text, cta, image } = editorialFeature;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#C9A49F" }}
      aria-labelledby="editorial-heading"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/5] max-h-[min(70vw,55vh)] min-h-[240px] sm:max-h-none sm:min-h-0 lg:aspect-auto lg:min-h-[480px] xl:min-h-[520px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_25%]"
            loading="lazy"
          />
          {image.isDemo && (
            <span className="absolute bottom-3 left-3 bg-sand/95 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
              Demo imagery
            </span>
          )}
        </div>

        <div
          className="flex flex-col justify-center px-5 py-12 text-white sm:px-12 sm:py-16 lg:px-16 xl:px-20"
          style={{ backgroundColor: "#C9A49F" }}
        >
          <h2
            id="editorial-heading"
            className="font-serif text-[2rem] leading-tight text-balance sm:text-4xl md:text-5xl"
            style={{ color: "#FFFFFF" }}
          >
            {title}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85 sm:mt-6 sm:text-[16px]">
            {text}
          </p>
          <a
            href={cta.href}
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-white/50 px-7 py-3.5 text-[12px] font-medium tracking-[0.08em] text-white uppercase transition-colors duration-250 sm:mt-10 sm:w-fit sm:text-[13px]"
            style={{ backgroundColor: "#8C6239" }}
          >
            {cta.label}
            <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
