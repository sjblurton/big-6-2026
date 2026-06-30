# big-6-2026

Next.js + Supabase application with local-first development using pnpm and the Supabase CLI.

## Prerequisites

- **Node.js 22** (use the version from `.nvmrc`)
- **pnpm** (via Corepack)
- **Supabase CLI**
- **Docker Desktop** (required by `supabase start`)

## Local setup

1. **Use the correct Node version**

   ```bash
   nvm use
   ```

   Loads the project Node runtime (22) from `.nvmrc`.

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   Installs all workspace dependencies and hooks.

3. **Start local Supabase services**

   ```bash
   supabase start
   ```

   Boots the local Postgres/Auth/Storage stack in Docker.

4. **Run the app**

   ```bash
   pnpm run dev
   ```

   Starts the Next.js dev server at `http://localhost:3000`.

## Database commands

Use these when you change the Drizzle schema:

```bash
pnpm db:generate
pnpm db:migrate
```

- `pnpm db:generate` creates migration SQL from the current schema changes.
- `pnpm db:migrate` applies the generated migrations to your local Supabase database.
- Run `supabase start` first so the local database is available.

## Storybook

Use Storybook for component development, documentation, and interaction testing.

```bash
pnpm storybook
pnpm build-storybook
```

- `pnpm storybook` starts Storybook locally on `http://localhost:6006`.
- `pnpm build-storybook` creates a production build of the Storybook site.
- Prefer Storybook for reusable UI component docs and interaction coverage.

## Environment variables (`.env`)

Create a local env file from the example and fill in values:

```bash
cp .env.example .env
```

- Use `.env.example` as the source of truth for required keys.
- Set `NEXT_PUBLIC_SUPABASE_URL` to your Supabase project URL (same base URL as `SUPABASE_URL`) so browser-side Supabase clients can initialize.
- Never commit real secrets in `.env`.

## Testing

Run the unit/integration test suite:

```bash
pnpm run test
```

## CI and deployment

- **GitHub Actions** runs CI on PRs and pushes to `main` (typecheck, lint, tests, and build).
- **Vercel** handles deployment and preview environments for pull requests.

## Troubleshooting

- **`supabase start` hangs**: make sure Docker Desktop is running and healthy, then retry.
- **Port conflicts (`54321`, `54322`, `54323`, `3000`)**: stop conflicting local services or change ports in config.
- **Env validation errors on startup**: verify `.env.local` exists and includes all keys from `.env.example`.
