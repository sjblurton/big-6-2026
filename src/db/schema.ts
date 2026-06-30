import { pgSchema, pgTable, text, uuid } from "drizzle-orm/pg-core";

const auth = pgSchema("auth");
const authUsers = auth.table("users", {
  id: uuid("id").primaryKey(),
});

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .primaryKey()
    .references(() => authUsers.id, { onDelete: "cascade" }),
  displayName: text("display_name"),
  email: text("email").notNull(),
  avatar_url: text("avatar_url"),
  timestamps: text("timestamps").notNull().default("now()"),
});
