CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY,
	"display_name" text,
	"email" text NOT NULL,
	"avatar_url" text,
	"timestamps" text DEFAULT 'now()' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE CASCADE;