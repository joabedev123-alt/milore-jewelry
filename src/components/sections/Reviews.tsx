import { siteConfig } from "@/config/site";

/**
 * Reviews section — hidden when no real testimonials are configured.
 * Add entries to siteConfig.reviews to publish.
 */
export function Reviews() {
  const reviews = siteConfig.reviews;
  if (!reviews.length) return null;

  return (
    <section
      className="section-pad bg-sand/70"
      aria-labelledby="reviews-heading"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="reviews-heading"
            className="section-title"
          >
            Words from our customers.
          </h2>
        </div>

        <ul className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.id} className="border-t border-line pt-8">
              <blockquote>
                <p className="font-serif text-xl leading-relaxed text-ink">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-5 text-[13px] tracking-[0.06em] text-muted uppercase">
                  — {review.name}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
