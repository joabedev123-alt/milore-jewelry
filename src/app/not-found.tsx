import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-warm px-6 text-center">
      <p className="eyebrow">Milóre Jewelry</p>
      <h1 className="mt-4 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for is not available.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </main>
  );
}
