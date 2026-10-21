import { Icon, type IconName } from "@/components/icons/BootstrapIcon";
import { attributes } from "@/config/site";

const iconMap: Record<string, IconName> = {
  gem: "gem",
  stars: "stars",
  heart: "heart",
};

export function Attributes() {
  return (
    <section
      className="border-y border-line bg-white"
      aria-label="Brand attributes"
    >
      <div className="container-site">
        <ul className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {attributes.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-2.5 px-3 py-5 sm:gap-3 sm:px-4 sm:py-9"
            >
              <Icon
                name={iconMap[item.icon]}
                size={16}
                className="shrink-0 text-dusty sm:w-[18px] sm:h-[18px]"
              />
              <span className="font-sans text-[11px] font-medium tracking-[0.08em] text-ink uppercase sm:text-[13px] sm:tracking-[0.1em]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
