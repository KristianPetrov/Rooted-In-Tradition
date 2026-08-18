import { Pool } from "pg";

declare global {
  var __pgPool: Pool | undefined;
}

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  return url;
}

export function getPool(): Pool {
  if (!globalThis.__pgPool) {
    globalThis.__pgPool = new Pool({
      connectionString: getDatabaseUrl(),
      max: 5,
    });
  }

  return globalThis.__pgPool;
}

export type DbOrder = {
  id: string;
  order_number: string;
  status: string;
  customer_email: string;
  subtotal: string;
  shipping_cost: string | null;
  total_amount: string | null;
};

export async function getOrderById(orderId: string): Promise<DbOrder | null> {
  const pool = getPool();
  const result = await pool.query<DbOrder>(
    `select
      id,
      order_number,
      status,
      customer_email,
      subtotal,
      shipping_cost,
      total_amount
    from public.orders
    where id = $1
    limit 1`,
    [orderId],
  );

  return result.rows[0] ?? null;
}
