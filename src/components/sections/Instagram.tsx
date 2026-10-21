import Image from "next/image";
import { Icon } from "@/components/icons/BootstrapIcon";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { instagramGallery, siteConfig } from "@/config/site";

export function Instagram() {
  return (
    <section
      id="instagram"
      className="section-pad bg-sand/60"
      aria-labelledby="instagram-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Follow Along</p>
          <h2
            id="instagram-heading"
            className="section-title mt-3 sm:mt-4"
          >
            A closer look at Milóre.
          </h2>
          <p className="mt-4 text-[15px] text-muted sm:mt-5 sm:text-[16px]">
            Discover styling inspiration, delicate details, and the latest from
            our collection.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 md:grid-cols-3 md:gap-4">
          {instagramGallery.map((img, i) => (
            <li key={`${img.src}-${i}`}>
              <ExternalLink
                href={siteConfig.social.instagram.url}
                className="relative block aspect-square overflow-hidden bg-sand"
                aria-label={`View on Instagram: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 md:hover:scale-[1.03]"
                  loading="lazy"
                />
                {img.isDemo && (
                  <span className="absolute top-2 left-2 bg-sand/95 px-1.5 py-0.5 text-[8px] uppercase tracking-[0.1em] text-muted">
                    Demo
                  </span>
                )}
              </ExternalLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center sm:mt-10">
          <ExternalLink
            href={siteConfig.social.instagram.url}
            className="btn-secondary w-full sm:w-auto"
          >
            <Icon name="instagram" size={16} />
            Follow Us on Instagram
          </ExternalLink>
          <p className="mt-3 text-[13px] text-muted">
            {siteConfig.social.instagram.handle}
          </p>
        </div>
      </div>
    </section>
  );
}
