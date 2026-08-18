import { redirect } from "next/navigation";

export default async function PaySuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    orderNumber?: string;
    orderId?: string;
    orderAmount?: string;
    paymentMethod?: string;
  }>;
}) {
  const { orderNumber, orderId, orderAmount, paymentMethod } =
    await searchParams;
  const query = new URLSearchParams();

  if (orderNumber) query.set("orderNumber", orderNumber);
  if (orderId) query.set("orderId", orderId);
  if (orderAmount) query.set("orderAmount", orderAmount);
  if (paymentMethod) query.set("paymentMethod", paymentMethod);

  const thankYouUrl = `https://www.affordablepeptides.life/checkout/thank-you${
    query.size ? `?${query.toString()}` : ""
  }`;

  redirect(thankYouUrl);
}
