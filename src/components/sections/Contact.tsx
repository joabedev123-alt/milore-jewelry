import { Icon } from "@/components/icons/BootstrapIcon";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad bg-dusty/25"
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Let&apos;s Connect</p>
          <h2
            id="contact-heading"
            className="mt-4 font-serif text-4xl text-ink md:text-5xl text-balance"
          >
            Your next favorite starts here.
          </h2>
          <p className="mt-5 text-[16px] text-muted">
            Have a question about a piece or need help choosing? We&apos;d love
            to hear from you.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <ExternalLink
              href={siteConfig.contact.whatsapp.url}
              className="btn-primary w-full sm:w-auto"
            >
              <Icon name="whatsapp" size={16} />
              Chat with Milóre
            </ExternalLink>
            <ExternalLink
              href={siteConfig.social.instagram.url}
              className="btn-secondary w-full sm:w-auto"
            >
              <Icon name="instagram" size={16} />
              Visit Our Instagram
            </ExternalLink>
          </div>

          <div className="mt-10 space-y-2 text-[15px] text-muted">
            <p>{siteConfig.brand.location}</p>
            <p>
              <ExternalLink
                href={siteConfig.contact.whatsapp.url}
                className="transition-colors duration-200 hover:text-ink"
              >
                {siteConfig.contact.whatsapp.display}
              </ExternalLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
