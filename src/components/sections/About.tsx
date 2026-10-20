import Image from "next/image";
import { aboutContent } from "@/config/site";

export function About() {
  const { eyebrow, title, paragraphs, cta, image } = aboutContent;

  return (
    <section
      id="about"
      className="section-pad bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-rose-soft lg:aspect-[5/6]">
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
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2
              id="about-heading"
              className="mt-4 font-serif text-4xl text-ink md:text-5xl"
            >
              {title}
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a href={cta.href} className="btn-primary mt-9 inline-flex">
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
