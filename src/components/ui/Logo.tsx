import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize =
    size === "lg"
      ? "text-2xl md:text-3xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl md:text-[1.35rem]";

  if (siteConfig.brand.logo) {
    return (
      <Image
        src={siteConfig.brand.logo}
        alt={siteConfig.brand.name}
        width={size === "lg" ? 180 : size === "sm" ? 110 : 140}
        height={size === "lg" ? 48 : size === "sm" ? 30 : 38}
        className={`h-auto w-auto ${className}`}
        priority
      />
    );
  }

  return (
    <span
      className={`font-serif font-medium tracking-[0.02em] ${textSize} ${className}`}
      style={{ color: "#8C6239" }}
    >
      {siteConfig.brand.wordmark}
    </span>
  );
}
