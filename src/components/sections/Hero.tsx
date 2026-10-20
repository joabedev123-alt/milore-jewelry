import Image from "next/image";
import { heroContent } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-warm"
      aria-labelledby="hero-heading"
    >
      <div className="container-site">
        <div className="grid items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-12 lg:min-h-[calc(100svh-7.5rem)] lg:gap-8 lg:py-16">
          {/* Copy — first on mobile for faster content access */}
          <div className="relative z-10 order-2 lg:order-1 lg:col-span-5 lg:pr-4">
            <p className="eyebrow animate-[fade-in_0.5s_ease-out]">
              {heroContent.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-3 font-serif text-[2.35rem] leading-[1.1] text-ink xs:text-[2.55rem] sm:mt-5 sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] animate-[slide-up_0.55s_ease-out] text-balance"
            >
              {heroContent.headline[0]}
              <br />
              {heroContent.headline[1]}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-[16px] animate-[slide-up_0.6s_ease-out]">
              {heroContent.text}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center animate-[slide-up_0.65s_ease-out]">
              <a
                href={heroContent.primaryCta.href}
                className="btn-primary w-full sm:w-auto"
              >
                {heroContent.primaryCta.label}
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="btn-secondary w-full sm:w-auto"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
            <p className="mt-6 text-[12px] tracking-[0.02em] text-muted/90 sm:mt-8 sm:text-[13px]">
              {heroContent.support}
            </p>
          </div>

          {/* Editorial image — dominant on mobile first viewport */}
          <div className="relative order-1 lg:order-2 lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-rose-soft max-h-[70vw] min-h-[280px] sm:max-h-none sm:min-h-0 sm:aspect-[5/6] lg:aspect-[4/5] xl:min-h-[70vh] xl:aspect-auto">
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                className="object-cover object-[center_25%]"
              />
              {heroContent.image.isDemo && (
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
