import { env } from "@/lib/env/server";
import { DrizzleConfig } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = env.SUPABASE_URL;

if (!databaseUrl) throw new Error("SUPABASE_URL is not set");

let connectionString = databaseUrl;

if (connectionString.includes("postgres:postgres@supabase_db_")) {
  const url = new URL(connectionString);
  url.hostname = url.hostname.split("_")[1];
  connectionString = url.href;
}

const config = {
  schema,
} satisfies DrizzleConfig<typeof schema>;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });

export const db = drizzle({ client, ...config });
