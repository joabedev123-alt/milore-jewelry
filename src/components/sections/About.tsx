import Image from "next/image";
import { aboutContent } from "@/config/site";

export function About() {
  const { eyebrow, title, paragraphs, cta, image } = aboutContent;

  return (
    <section
      id="about"
      className="section-pad"
      style={{ backgroundColor: "#F5EAE6" }}
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="media-frame lg:aspect-[5/6]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="media-cover"
                loading="lazy"
              />
              {image.isDemo && (
                <span className="absolute bottom-3 left-3 bg-sand/95 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Demo imagery
                </span>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 id="about-heading" className="section-title mt-3 sm:mt-4">
              {title}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted sm:mt-7 sm:space-y-5 sm:text-[16px]">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a href={cta.href} className="btn-primary mt-8 inline-flex w-full sm:mt-9 sm:w-auto">
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
