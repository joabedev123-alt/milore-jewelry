/**
 * ============================================================
 * MILÓRE JEWELRY — Centralized site configuration
 * ============================================================
 * Update brand assets, contacts, products, and policies here.
 * Demo imagery is clearly marked — replace with brand photos.
 * ============================================================
 */

export const siteConfig = {
  brand: {
    name: "Milóre Jewelry",
    shortName: "Milóre",
    tagline: "Delicate by design. Yours by nature.",
    description:
      "Delicate sterling silver jewelry. Modern, timeless, and personal.",
    location: "New Jersey, United States",
    serviceRegion: "United States",
    /** Replace with official logo path when available, e.g. "/logo.svg" */
    logo: null as string | null,
    /** Wordmark fallback while logo is pending */
    wordmark: "Milóre Jewelry",
  },

  contact: {
    whatsapp: {
      display: "+1 (908) 499-0505",
      e164: "19084990505",
      url: "https://wa.me/19084990505",
    },
    /** No email confirmed — do not invent */
    email: null as string | null,
    /** No physical street address confirmed */
    address: null as string | null,
  },

  social: {
    /**
     * Instagram handle kept exactly as provided for easy updates.
     * Profile URL derived from this identifier.
     */
    instagram: {
      handle: "@miilorejewrleuyus",
      username: "miilorejewrleuyus",
      url: "https://www.instagram.com/miilorejewrleuyus/",
    },
  },

  seo: {
    title: "Milóre Jewelry | Delicate 925 Sterling Silver Jewelry",
    description:
      "Discover delicate 925 sterling silver jewelry from Milóre. Explore timeless rings, earrings, necklaces, and bracelets from our New Jersey-based brand.",
    /** Update when definitive domain is confirmed */
    canonical: "https://milorejewelry.com",
    ogImage: "/og-image.svg",
  },

  /**
   * Policies — leave null/empty until brand-approved copy exists.
   * When null, related footer links and modals stay unpublished.
   */
  policies: {
    shipping: null as PolicyContent | null,
    returns: null as PolicyContent | null,
    privacy: null as PolicyContent | null,
    terms: null as PolicyContent | null,
  },

  /**
   * Customer reviews — leave empty to hide the section in production.
   * Add real testimonials only.
   */
  reviews: [] as Review[],

  announcements: {
    topBar: "Sterling silver. Everyday elegance.",
    topBarLink: {
      label: "Explore the Collection",
      href: "#jewelry",
    },
  },
} as const;

export type PolicyContent = {
  title: string;
  body: string[];
};

export type Review = {
  id: string;
  name: string;
  quote: string;
  /** Optional — only if customer provided a rating */
  rating?: number;
};

export type CategoryId = "rings" | "earrings" | "necklaces" | "bracelets";

export type ProductImage = {
  src: string;
  alt: string;
  /** DEMO: true = placeholder imagery, not brand photography */
  isDemo: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: CategoryId;
  material: string;
  description: string;
  care: string;
  /** Price in USD — omit or null when not provided */
  priceUsd: number | null;
  images: ProductImage[];
  /** Confirmed size/option labels only */
  options?: string[];
  featured?: boolean;
};

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  image: ProductImage;
};

/**
 * DEMO IMAGES — Local demonstration assets in /public/images/demo.
 * Replace with authorized brand photography before launch.
 * Do not present these as real Milóre product photos.
 */
const demo = (file: string, alt: string): ProductImage => ({
  src: `/images/demo/${file}`,
  alt: `${alt} (demonstration image)`,
  isDemo: true,
});

export const categories: Category[] = [
  {
    id: "rings",
    name: "Rings",
    description: "Subtle forms for every day",
    image: demo("ring-1.jpg", "Delicate sterling silver ring on soft fabric"),
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Light catches, quietly",
    image: demo("earrings-1.jpg", "Silver earrings with soft natural light"),
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "A finishing touch",
    image: demo("necklace-1.jpg", "Fine silver necklace detail"),
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Worn close, remembered",
    image: demo("bracelet-1.jpg", "Sterling silver bracelet on light surface"),
  },
];

/**
 * DEMO PRODUCTS — Sample catalog for layout presentation.
 * Replace with real inventory. Do not invent prices.
 */
export const products: Product[] = [
  {
    id: "p1",
    name: "Soft Curve Band",
    slug: "soft-curve-band",
    category: "rings",
    material: "925 Sterling Silver",
    description:
      "A refined band with a gentle curve—designed to feel effortless from morning to evening.",
    care: "Store dry. Clean gently with a soft cloth formulated for sterling silver.",
    priceUsd: null,
    featured: true,
    images: [
      demo("ring-1.jpg", "Soft Curve Band sterling silver ring"),
      demo("ring-2.jpg", "Soft Curve Band alternate angle"),
    ],
    options: ["Sizes available upon request"],
  },
  {
    id: "p2",
    name: "Pearl Whisper Studs",
    slug: "pearl-whisper-studs",
    category: "earrings",
    material: "925 Sterling Silver",
    description:
      "Minimal studs with a soft luminous accent—everyday polish in a single glance.",
    care: "Avoid harsh chemicals. Wipe gently after wear.",
    priceUsd: null,
    featured: true,
    images: [demo("earrings-1.jpg", "Pearl Whisper Studs silver earrings")],
  },
  {
    id: "p3",
    name: "Thread of Light Necklace",
    slug: "thread-of-light-necklace",
    category: "necklaces",
    material: "925 Sterling Silver",
    description:
      "A fine chain that rests close to the collarbone—delicate, modern, and endlessly wearable.",
    care: "Store flat or hanging. Keep away from perfumes and lotions when possible.",
    priceUsd: null,
    featured: true,
    images: [
      demo("necklace-1.jpg", "Thread of Light silver necklace"),
      demo("necklace-2.jpg", "Necklace worn against light fabric"),
    ],
  },
  {
    id: "p4",
    name: "Quiet Link Bracelet",
    slug: "quiet-link-bracelet",
    category: "bracelets",
    material: "925 Sterling Silver",
    description:
      "Linked with intention—an understated bracelet that complements both casual and dressed looks.",
    care: "Remove before swimming or bathing. Store in a soft pouch.",
    priceUsd: null,
    featured: true,
    images: [demo("bracelet-1.jpg", "Quiet Link sterling silver bracelet")],
  },
  {
    id: "p5",
    name: "Orbit Mini Hoops",
    slug: "orbit-mini-hoops",
    category: "earrings",
    material: "925 Sterling Silver",
    description:
      "Compact hoops with a smooth finish—light enough for all-day wear, polished enough for evenings.",
    care: "Clean gently after wear. Store separately to avoid scratches.",
    priceUsd: null,
    featured: true,
    images: [demo("earrings-2.jpg", "Orbit Mini Hoops silver earrings")],
  },
  {
    id: "p6",
    name: "Horizon Pendant",
    slug: "horizon-pendant",
    category: "necklaces",
    material: "925 Sterling Silver",
    description:
      "A slender pendant with a quiet geometric presence—meant to be layered or worn alone.",
    care: "Avoid contact with harsh chemicals. Follow piece-specific care notes.",
    priceUsd: null,
    featured: true,
    images: [demo("necklace-2.jpg", "Horizon Pendant sterling silver necklace")],
  },
  {
    id: "p7",
    name: "Petal Contour Ring",
    slug: "petal-contour-ring",
    category: "rings",
    material: "925 Sterling Silver",
    description:
      "Soft contours inspired by natural forms—an everyday ring with a distinctive silhouette.",
    care: "Store dry. Polish gently with a sterling silver cloth.",
    priceUsd: null,
    featured: true,
    images: [demo("ring-2.jpg", "Petal Contour sterling silver ring")],
    options: ["Sizes available upon request"],
  },
  {
    id: "p8",
    name: "Cascade Drop Earrings",
    slug: "cascade-drop-earrings",
    category: "earrings",
    material: "925 Sterling Silver",
    description:
      "A gentle drop silhouette that moves with you—elegant without excess.",
    care: "Keep away from harsh chemicals. Store flat when not worn.",
    priceUsd: null,
    featured: true,
    images: [demo("earrings-3.jpg", "Cascade Drop sterling silver earrings")],
  },
];

export const heroContent = {
  eyebrow: "MILÓRE JEWELRY",
  headline: ["Delicate by design.", "Yours by nature."],
  text: "Discover sterling silver jewelry that brings a refined touch to everyday moments and meaningful occasions.",
  support: "Based in New Jersey. Serving the United States.",
  image: demo(
    "hero.jpg",
    "Editorial portrait with delicate sterling silver jewelry"
  ),
  primaryCta: { label: "Explore Jewelry", href: "#jewelry" },
  secondaryCta: { label: "Our Story", href: "#about" },
};

export const aboutContent = {
  eyebrow: "OUR STORY",
  title: "An expression of you.",
  paragraphs: [
    "Milóre Jewelry is a New Jersey-based brand specializing in 925 sterling silver jewelry.",
    "Our collection embraces delicate details, modern lines, and timeless elegance—pieces chosen to complement your individuality and bring beauty to the everyday.",
    "We believe the most meaningful accessories feel personal. A subtle finishing touch. A favorite you reach for. A little expression of who you are.",
  ],
  cta: { label: "Find Your Piece", href: "#jewelry" },
  image: demo("about.jpg", "Close detail of sterling silver jewelry"),
};

export const editorialFeature = {
  title: "Your everyday, beautifully adorned.",
  text: "Simple silhouettes. Delicate details. Pieces that feel like you.",
  cta: {
    label: "Explore the Edit",
    href: "#jewelry",
    /** Optional category filter to apply */
    filter: null as CategoryId | null,
  },
  image: demo("editorial.jpg", "Editorial detail of sterling silver jewelry"),
};

export const careSection = {
  eyebrow: "BEAUTY IN THE DETAILS",
  title: "A little care. Lasting beauty.",
  intro:
    "Thoughtful care helps preserve the appearance of your sterling silver jewelry. Follow the specific care instructions provided with each piece.",
  image: demo(
    "care.jpg",
    "Sterling silver jewelry detail for care guidance"
  ),
};

export const instagramGallery: ProductImage[] = [
  demo("ring-1.jpg", "Instagram-style silver ring detail"),
  demo("earrings-1.jpg", "Instagram-style silver earrings"),
  demo("necklace-1.jpg", "Instagram-style necklace styling"),
  demo("bracelet-1.jpg", "Instagram-style bracelet detail"),
  demo("hero.jpg", "Instagram-style jewelry on fabric"),
  demo("earrings-2.jpg", "Instagram-style hoop earrings"),
];

export const attributes = [
  { icon: "gem" as const, label: "925 Sterling Silver" },
  { icon: "stars" as const, label: "Timeless Style" },
  { icon: "heart" as const, label: "Delicate Details" },
];

export const howItWorks = [
  {
    step: "01",
    icon: "gem" as const,
    title: "Explore the collection.",
    text: "Discover styles that catch your eye.",
  },
  {
    step: "02",
    icon: "heart" as const,
    title: "Find your favorite.",
    text: "Take a closer look at the details and available options.",
  },
  {
    step: "03",
    icon: "chat" as const,
    title: "Connect with Milóre.",
    text: "Get help with your selection and ordering questions.",
  },
];

export const careTips = {
  summary: [
    {
      title: "Store with care.",
      text: "Keep pieces dry in a soft pouch or lined box.",
    },
    {
      title: "Gently clean after wear.",
      text: "Use a soft cloth suited for sterling silver.",
    },
    {
      title: "Keep away from harsh chemicals.",
      text: "Avoid perfumes, lotions, and cleaning agents.",
    },
  ],
  modal: {
    title: "Jewelry Care Tips",
    body: [
      "Store your pieces dry in a suitable place—ideally a soft pouch or lined jewelry box.",
      "Gently clean after wear with a soft cloth formulated for sterling silver.",
      "Keep jewelry away from harsh chemicals, including household cleaners, chlorine, and strong cosmetics.",
      "Follow any specific care notes for stones, finishes, or delicate details included with your piece.",
      "Sterling silver may develop a natural patina or oxidation over time. Gentle polishing helps restore its appearance.",
    ],
    disclaimer:
      "Care needs can vary by design. When in doubt, reach out to Milóre for guidance on your specific piece.",
  },
};

export const faqItems = [
  {
    id: "faq-1",
    question: "What kind of jewelry does Milóre offer?",
    answer:
      "Milóre Jewelry specializes in 925 sterling silver jewelry—elegant, delicate pieces including rings, earrings, necklaces, and bracelets designed for everyday wear and meaningful moments.",
  },
  {
    id: "faq-2",
    question: "Where is Milóre based?",
    answer: "Milóre Jewelry is based in New Jersey, United States.",
  },
  {
    id: "faq-3",
    question: "Do you serve customers across the United States?",
    answer:
      "Yes. We serve customers across the United States. For details about a specific piece or ordering, please reach out via WhatsApp—we are happy to help.",
  },
  {
    id: "faq-4",
    question: "How can I learn more about a piece?",
    answer:
      "Open any product to view details, materials, and care notes. From there, you can message us on WhatsApp with the piece name for available options and ordering help.",
  },
  {
    id: "faq-5",
    question: "How should I care for sterling silver jewelry?",
    answer:
      "Store pieces dry, clean gently with a soft cloth suited for sterling silver, and keep them away from harsh chemicals. Silver may develop a natural patina over time. View our care tips for more guidance.",
    action: "care" as const,
  },
  {
    id: "faq-6",
    question: "How can I contact Milóre?",
    answer:
      "Chat with us on WhatsApp at +1 (908) 499-0505, or visit our Instagram for styling inspiration and the latest from the collection.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Our Story", href: "#about" },
  { label: "Jewelry Care", href: "#care" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export function buildWhatsAppProductUrl(productName: string): string {
  const message = `Hi Milóre! I'd like to know more about ${productName}. Could you help me with the available options and ordering?`;
  return `${siteConfig.contact.whatsapp.url}?text=${encodeURIComponent(message)}`;
}

/** Categories that currently have at least one product */
export function getActiveCategories(): Category[] {
  const ids = new Set(products.map((p) => p.category));
  return categories.filter((c) => ids.has(c.id));
}
