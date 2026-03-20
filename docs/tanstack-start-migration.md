# TanStack Start migration plan

This document describes migrating **Exaya** from the **T3 Stack** (Next.js 14 **Pages Router**) to **TanStack Start**. It reflects the repository as of the migration planning pass: tRPC v10, NextAuth v4 (Credentials + JWT), Prisma 6, Ant Design + Tailwind, and no `getServerSideProps` / `getStaticProps` (tRPC client `ssr: false`).

> **Status:** Phase 0 and Phase 1 complete. Last updated: 2026-03-20.

---

## Current stack (source of truth)

> As of Phase 1 completion, the framework is **TanStack Start**. The following describes the migration target state.

| Area            | Implementation                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| Framework       | **TanStack Start v1.167.1** (SSR, Vite 8, Nitro)                                                       |
| Bundler         | Vite 8 (no vinxi)                                                                                      |
| Routing         | TanStack Router file routes (`src/routes/`)                                                            |
| Data            | tRPC → `src/server/api/**`, Prisma (`src/server/db.ts`)                                                |
| Auth            | NextAuth removed (Phase 2 pending)                                                                     |
| UI globals      | `src/routes/__root.tsx`: Ant Design `ConfigProvider`, `MenuProvider`, `MessageProvider`, `ThemeToggle` |
| Styles          | Tailwind v3 + PostCSS                                                                                  |
| Package manager | Bun                                                                                                    |

---

## What changes conceptually

| Layer               | Today                                           | TanStack Start                                                                                    |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Runtime / bundler   | Next                                            | Vite-based Start                                                                                  |
| Routing             | `src/pages/**`                                  | TanStack Router file routes (e.g. `routes/`)                                                      |
| HTTP API            | Next API routes                                 | Start server handlers + same logical endpoints                                                    |
| Auth                | NextAuth catch-all + `req`/`res` session        | Session derived from **Web `Request`** (cookie/JWT)—not Next’s handler                            |
| tRPC client         | `@trpc/next` (`createTRPCNext`, `api.withTRPC`) | `@trpc/react-query` + `httpBatchLink`                                                             |
| tRPC server         | `createNextApiHandler`                          | `fetchRequestHandler` (or equivalent) on a Start route                                            |
| Images / Cloudinary | `next/image`, `next-cloudinary`                 | Plain `<img>` or Vite-friendly helpers; `@cloudinary/react` or upload widget without Next package |

---

## Route map (Pages → Router)

Use this as a checklist when creating file routes. Adjust file naming to your chosen TanStack Router convention (`$param` for dynamics, etc.).

| Next path                     | Notes                                   |
| ----------------------------- | --------------------------------------- |
| `/`                           | `index.tsx`                             |
| `/login`                      | Auth-critical                           |
| `/contacto`                   |                                         |
| `/features`                   |                                         |
| `/planes`                     |                                         |
| `/pasajes`                    |                                         |
| `/soporte`                    |                                         |
| `/dashboard`                  | Likely protected                        |
| `/administracion`             | Likely protected                        |
| `/contable`                   | Likely protected                        |
| `/boletos`                    |                                         |
| `/boletos/viaje/[id]`         | Dynamic                                 |
| `/viaje/[id]`                 | Dynamic (distinct from boletos subtree) |
| `/encomiendas`                |                                         |
| `/encomiendas/rastreo`        |                                         |
| `/programacion/viajes`        |                                         |
| `/programacion/comprobantes`  |                                         |
| `/programacion/bus-conductor` |                                         |
| `/404`, `/500`                | Error / not-found handling in Start     |

**API-only (not user-facing pages):** migrate behavior, not paths—e.g. tRPC mount point and auth session resolution.

---

## Phased plan

### Phase 0 — Inventory ✅

- [x] Confirm all external URLs and redirects (production vs staging).
  - No Next.js redirects in `next.config.mjs`.
  - 20 `next/image` domains allowlisted (icons8, pexels, cloudinary, etc.).
  - Auth redirect: `signIn: "/login"` in `src/server/auth.ts:49`.
- [x] List every `useSession` / `signIn` / `signOut` and every `protectedProcedure` consumer.
  - `useSession`: 15 files (pages + components).
  - `signIn`: 1 file (`src/pages/login/index.tsx`).
  - `signOut`: 1 file (`src/components/common/layout.tsx`).
  - `protectedProcedure`: 17 occurrences across 5 routers (`usuarios.ts`, `viajes.ts`, `rutas.ts`, `conductores.ts`, `boletos.ts`).
- [x] Grep for `next/link`, `next/image`, `next/head`, `next/router` and track refactors.
  - `next/link`: 14 files.
  - `next/image`: 11 files.
  - `next/head`: 2 files (`_app.tsx`, `head.tsx`).
  - `next/router`: 0 files.
- [x] Document env vars (`src/env.mjs`, `NEXT_PUBLIC_*`, `NEXTAUTH_*`, DB, Cloudinary).
  - Server: `NODE_ENV`, `NEXTAUTH_SECRET`, `DATABASE_URL`, `API_RENIEC_TOKEN`, `API_RENIEC_URL`, `CLOUDINARY_API_SECRET`.
  - Client: `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_API_KEY`.

### Phase 1 — Start skeleton ✅

- [x] Rewrite `package.json` — removed Next.js deps, added TanStack Start + Vite + Nitro.
- [x] Rewrite `tsconfig.json` — removed Next.js plugin, set `jsx: "react-jsx"`, `moduleResolution: "Bundler"`.
- [x] Create `vite.config.ts` — `@tanstack/react-start/plugin/vite` + `@vitejs/plugin-react` + `nitro/vite`, Tailwind via PostCSS.
- [x] Create `src/router.tsx` — TanStack Router instance with `getRouter()`.
- [x] Create `src/routes/__root.tsx` — root route with all providers ported from `_app.tsx`.
- [x] Create `src/routes/index.tsx` — minimal landing shell (full page in Phase 4).
- [x] Create `src/contexts/` — moved `MenuContext`, `MessageContext`, `notification`.
- [x] Update `src/styles/globals.css` — Tailwind v3 `@tailwind` directives.
- [x] Delete Next.js files: `next.config.mjs`, `next-env.d.ts`, `src/pages/`, `src/pages/api/`, `src/middleware.ts`, `src/utils/AOS.tsx`, `src/context/`.
- [x] Delete `src/client.tsx` and `src/server.ts` — TanStack Start handles entries automatically.

**Tech decisions made:**

- Package manager: **Bun** (no pnpm).
- Bundler: **Vite 8** (no vinxi).
- Tailwind: **v3** with PostCSS (existing `tailwind.config.ts` compatible).
- SSR: **Nitro** via `nitro/vite` plugin.
- Client entry: **Automatic** via `@tanstack/react-start` plugin.

**Exit criteria met:**

- [x] `bun run dev` starts TanStack Start dev server on port 3000.
- [x] `bun run build` + `bun run start` produces working SSR output.
- [x] Landing shell renders with Ant Design CSS + Tailwind.
- [x] Zero `next/` imports anywhere in `src/`.
- [x] Phase 2 (Auth) can start immediately.

### Phase 2 — Auth (critical path)

NextAuth is wired to Next’s API route and `getServerSession(req, res)`. The app uses **Credentials + JWT** (see `src/server/auth.ts`); tRPC expects `session` on context.

Pick one strategy and implement end-to-end before migrating many pages:

1. **Auth.js (non-Next)** — Reuse JWT/callback concepts; wire cookies to standard `Request`/`Response`. Validate against current Auth.js + Start docs for your target versions.
2. **Custom session** — Port `authorize` (bcrypt + Prisma); issue signed HTTP-only cookie or JWT; validate in tRPC `createTRPCContext`.
3. **Library-assisted** (e.g. Lucia-style) — Same outcome: stable server-side session for tRPC.

**Exit:** Login works; `protectedProcedure` sees the same user fields as today (`id`, `rol`, `sedeId`, etc.).

### Phase 3 — tRPC on Start

- [ ] Replace `createNextApiHandler` with **`fetchRequestHandler`** (tRPC v10) mounted on a Start server route (e.g. `/api/trpc`).
- [ ] Refactor `createTRPCContext` to stop using `CreateNextContextOptions`; build context from the incoming **`Request`** and your new session helper.
- [ ] Replace `createTRPCNext` with **`@trpc/react-query`** + `httpBatchLink`, same `superjson` and `AppRouter` types.

**Exit:** At least one real query/mutation works with unchanged router procedure code.

### Phase 4 — Route migration

- [ ] Implement routes from the route map; use TanStack Router navigation instead of `next/router`.
- [ ] Port layouts per section (landing vs app shell) as needed.

**Exit:** All public and protected URLs behave like today.

### Phase 5 — Next-specific cleanup

- [ ] Replace `next/link` with TanStack `Link` (or `<a>` for external).
- [ ] Replace `next/image` (drop `next.config` `images.domains`; enforce allowlists at CDN/host if needed).
- [ ] Replace `next/head` usage with Start/Router meta patterns.
- [ ] Replace `next-cloudinary` in forms (`conductor-form`, `bus-form`, `usuario-form`) with framework-agnostic Cloudinary UI or `@cloudinary/react`.

### Phase 6 — Prisma, tests, lint

- [ ] Keep `schema.prisma` and migrations; adjust `postinstall` / CI `prisma generate` for the Start package root.
- [ ] Point Vitest and TS path aliases (`@/`) at the new app layout.
- [ ] Replace `eslint-config-next` with an ESLint config appropriate for Vite + React in the Start package.

### Phase 7 — Cutover

- [ ] Single deployment: Start build output; confirm runtime (Node vs edge) supports Prisma and cookie-based auth.
- [ ] Rename env vars if using `VITE_*` / framework conventions; update secrets in the host.
- [ ] Remove Next: `next.config.mjs`, `src/pages`, `@trpc/next`, NextAuth Next entrypoint—only after parity and smoke tests.

---

## Prisma: setup and usage (what actually changes)

Prisma is **not** tied to Next.js. Moving to TanStack Start mostly affects **where env is read** and **never importing `PrismaClient` in the browser**.

### Setup (today → Start)

| Topic             | Notes                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Singleton         | Keep the `globalThis` pattern in dev (`src/server/db.ts`) for hot reload—valid on a Node server.                                   |
| `DATABASE_URL`    | Wire to Start/Vite env (`import.meta.env` or server-only `process.env`, per Start docs).                                           |
| Engine / adapters | Optional: driver adapters, Accelerate, or poolers for serverless/edge. A **normal Node** Start server can keep the default client. |
| Multi-file schema | Optional (`prismaSchemaFolder`); not required for migration.                                                                       |

### Usage (API evolution, optional cleanups)

Core calls (`findMany`, `findUnique`, `create`, `update`, `$transaction`) remain the same.

Optional modernizations when touching code:

- `findUniqueOrThrow` / `findFirstOrThrow` where a missing row should always error.
- `$extends` for repeated cross-cutting behavior (logging, soft deletes).
- Typed SQL / `$queryRaw` patterns if raw SQL grows.

On **Prisma major upgrades**, follow release notes for schema attributes, CLI changes, and Node/TS minimums—not a new query language.

---

## Risks and mitigations

| Risk                           | Mitigation                                                                    |
| ------------------------------ | ----------------------------------------------------------------------------- |
| Auth is the longest pole       | Implement session + one protected tRPC path before bulk route porting.        |
| Ant Design + SSR/hydration     | Test root layout and any `window`-only code early on Start.                   |
| Cloudinary uploads             | Regression-test the three form flows after swapping off `next-cloudinary`.    |
| Connection limits (serverless) | If deployment is per-request isolate, plan pooler or Accelerate before scale. |

---

## Decisions to lock early

1. **Hosting** — Drives cookies, TLS, and whether Prisma runs in a long-lived Node process or per-invocation isolate.
2. **Auth approach** — Auth.js vs custom JWT/cookies vs a small session library.
3. **Repo layout** — Single package replacing Next vs `apps/web-start` strangler until parity.

---

## Decisions to lock early

1. ~~**Hosting**~~ — Drivs cookies, TLS, and whether Prisma runs in a long-lived Node process or per-invocation isolate.
2. ~~**Auth approach**~~ — Auth.js vs custom JWT/cookies vs a small session library.
3. ~~**Repo layout**~~ — Single package replacing Next vs `apps/web-start` strangler until parity.

> **Locked decisions (Phase 1):**
>
> - Bundler: **Vite 8** (no vinxi).
> - SSR: **Nitro** (via `nitro/vite` plugin).
> - Package manager: **Bun**.
> - Tailwind: **v3** (existing config compatible).
> - Repo layout: **Single package**, Next.js fully replaced.

---

## Reference paths in this repo

| Purpose                   | Path                                  |
| ------------------------- | ------------------------------------- |
| Vite config               | `vite.config.ts`                      |
| Router instance           | `src/router.tsx`                      |
| Root route (providers)    | `src/routes/__root.tsx`               |
| Routes directory          | `src/routes/`                         |
| Contexts                  | `src/contexts/`                       |
| Global styles             | `src/styles/globals.css`              |
| tRPC API route            | `src/pages/api/trpc/[trpc].ts`        |
| NextAuth route            | `src/pages/api/auth/[...nextauth].ts` |
| tRPC context & procedures | `src/server/api/trpc.ts`              |
| Router root               | `src/server/api/root.ts`              |
| Auth config               | `src/server/auth.ts`                  |
| Prisma client             | `src/server/db.ts`                    |
| tRPC React client         | `src/utils/api.ts`                    |
| Env validation            | `src/env.ts`                          |
| Schema                    | `prisma/schema.prisma`                |

---

_Last updated: 2026-03-20 — Phase 0 ✅ + Phase 1 ✅ complete._
