import { env } from "./src/lib/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.SUPABASE_URL,
  },
  schemaFilter: ["public"],
  verbose: true,
  strict: true,
});
