import { Icon, type IconName } from "@/components/icons/BootstrapIcon";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { howItWorks, siteConfig } from "@/config/site";

const iconMap: Record<string, IconName> = {
  gem: "gem",
  heart: "heart",
  chat: "chat-dots",
};

export function HowItWorks() {
  return (
    <section
      className="section-pad bg-sand/45"
      aria-labelledby="howto-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="howto-heading"
            className="section-title"
          >
            Find a piece that feels like you.
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Reach out anytime for help choosing a piece or placing an order.
          </p>
        </div>

        <ol className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3 md:gap-8">
          {howItWorks.map((step) => (
            <li key={step.step} className="text-center md:text-left">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-line bg-dusty text-white md:mx-0">
                <Icon name={iconMap[step.icon]} size={18} />
              </div>
              <p className="mt-5 font-sans text-[11px] font-medium tracking-[0.18em] text-dusty uppercase">
                {step.step}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center sm:mt-14">
          <ExternalLink
            href={siteConfig.contact.whatsapp.url}
            className="btn-primary w-full sm:w-auto"
          >
            <Icon name="whatsapp" size={16} />
            Talk to Milóre
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
