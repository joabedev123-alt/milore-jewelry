import Image from "next/image";
import { heroContent } from "@/config/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-sand"
      aria-label={`${heroContent.headline[0]} ${heroContent.headline[1]}`}
    >
      <div className="container-site">
        <div className="grid items-center gap-0 py-3 sm:py-4 lg:grid-cols-12 lg:gap-10 lg:py-12 xl:gap-12 xl:py-14">
          {/* Copy — desktop only */}
          <div className="relative z-10 hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:pr-2">
            <p className="eyebrow animate-[fade-in_0.5s_ease-out]">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.12] text-ink xl:text-[3.25rem] animate-[slide-up_0.55s_ease-out] text-balance">
              {heroContent.headline[0]}
              <br />
              {heroContent.headline[1]}
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted xl:text-[16px] animate-[slide-up_0.6s_ease-out]">
              {heroContent.text}
            </p>
            <div className="mt-8 flex flex-row flex-wrap items-center gap-3 animate-[slide-up_0.65s_ease-out]">
              <a
                href={heroContent.primaryCta.href}
                className="btn-primary w-auto"
              >
                {heroContent.primaryCta.label}
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="btn-secondary w-auto"
              >
                {heroContent.secondaryCta.label}
              </a>
            </div>
            <p className="mt-6 text-[13px] tracking-[0.02em] text-muted/90">
              {heroContent.support}
            </p>
          </div>

          {/* Editorial image — square on desktop, matched to copy height */}
          <div className="relative lg:col-span-7 lg:flex lg:justify-end">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand max-h-[70vw] min-h-[280px] sm:max-h-none sm:min-h-0 sm:aspect-[5/6] lg:aspect-square lg:max-h-[420px] lg:w-full lg:max-w-[420px] xl:max-h-[460px] xl:max-w-[460px]">
              <Image
                src={heroContent.image.src}
                alt={heroContent.image.alt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 460px"
                className="media-cover"
              />
              {heroContent.image.isDemo && (
                <span className="absolute bottom-3 left-3 bg-sand/95 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
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
