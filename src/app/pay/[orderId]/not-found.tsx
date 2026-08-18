import Link from "next/link";

export default function PayOrderNotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <div className="island p-6 sm:p-10">
        <h1 className="earth-heading text-2xl font-semibold tracking-tight">
          Order not found
        </h1>
        <p className="earth-prose mt-3 text-sm">
          This payment link is invalid or the order no longer exists.
        </p>
        <div className="mt-8">
          <Link href="/" className="island-btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
