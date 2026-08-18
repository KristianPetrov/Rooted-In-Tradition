import Link from "next/link";

export default async function PayCancelPage({
  searchParams,
}: {
  searchParams: Promise<{ orderId?: string }>;
}) {
  const { orderId } = await searchParams;

  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <div className="island p-6 sm:p-10">
        <h1 className="earth-heading text-2xl font-semibold tracking-tight">
          Payment canceled
        </h1>
        <p className="earth-prose mt-3 text-sm">
          No charge was made. You can try again whenever you&apos;re ready.
        </p>
        {orderId ? (
          <p className="earth-prose mt-4 break-all text-sm">
            Order ID: <span className="font-mono">{orderId}</span>
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-6">
          {orderId ? (
            <Link
              href={`/pay/${encodeURIComponent(orderId)}`}
              className="island-btn"
            >
              Try payment again
            </Link>
          ) : null}
          <Link href="/" className="island-btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
