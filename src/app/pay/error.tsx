"use client";

import Link from "next/link";

export default function PayError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <div className="island p-6 sm:p-10">
        <h1 className="earth-heading text-2xl font-semibold tracking-tight">
          Payment could not be started
        </h1>
        <p className="earth-prose mt-3 text-sm">
          Something went wrong while opening checkout. You can try again in a
          moment.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <button type="button" className="island-btn" onClick={() => reset()}>
            Try again
          </button>
          <Link href="/" className="island-btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
