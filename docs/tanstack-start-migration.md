# TanStack Start migration plan

This document describes migrating **Exaya** from the **T3 Stack** (Next.js 14 **Pages Router**) to **TanStack Start**. Historical context: tRPC v10, Prisma 6, Ant Design + Tailwind. Next.js data APIs (`getServerSideProps` / `getStaticProps`) were not used.

> **Status:** Phase 0, 1, 1b, **Phase 2 (auth)**, and **Phase 3 (tRPC on Start)** for the auth/tRPC path are **done**. Full route parity (Phase 4) and Next-import cleanup (Phase 5) remain. **Last updated: 2026-04-04.**

---

## Current stack (source of truth)

| Area            | Implementation                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework       | **TanStack Start** (~v1.167) (SSR, Vite 8, Nitro)                                                                                               |
| Bundler         | Vite 8 (no vinxi)                                                                                                                               |
| Routing         | TanStack Router file routes (`src/routes/`)                                                                                                     |
| Data            | tRPC → `src/server/api/**`, Prisma (`src/server/db.ts`)                                                                                         |
| Auth            | **Supabase Auth** + **`@supabase/ssr`** (browser + server clients). Session for tRPC from **`getAppSession`** (`src/server/auth.ts`) via cookies + `getUser()`. |
| tRPC browser    | **`@trpc/react-query`** + **`@tanstack/react-query` v4** (tRPC v10 peer) + `TrpcProvider` in `src/utils/trpc-provider.tsx` (`credentials: "include"`) |
| tRPC server     | **`fetchRequestHandler`** on route **`/api/trpc`** (`src/routes/api/trpc.tsx`); context from **`Request` + `Headers`** (`src/server/api/trpc.ts`) |
| UI globals      | `src/routes/__root.tsx`: `SupabaseAuthProvider`, `ConfigProvider`, **`TrpcProvider`**, `MenuProvider`, `MessageProvider`, `Notification`, `ThemeToggle` |
| Styles          | Tailwind v3 + PostCSS                                                                                                                           |
| Package manager | Bun                                                                                                                                             |

---

## What changed with Supabase Auth (Phase 2–3)

| Area | Change |
| ---- | ------ |
| **Identity** | **Supabase `auth.users`** is the credential store. **`Usuario.supabaseUserId`** links Prisma to Supabase (migration `20260404140000_add_supabase_user_id`). |
| **Login identifier** | UI still uses **username**; it maps to a synthetic email **`username@auth.exaya.app`** for Supabase (`src/shared/auth/auth-email.ts`). |
| **Passwords in Prisma** | **`Usuario.password`** is **not** used for login anymore; mutations keep a **placeholder hash** for schema compatibility. Real passwords are updated via **Supabase Admin** in `usuarios` router. |
| **Client session** | **`useSession` / `useSignOut`** in `src/hooks/use-session.ts` replace `next-auth/react`. Session data comes from **`auth.session`** (tRPC) + Supabase cookie refresh (`AuthStateSync`). |
| **Server session** | **`getAppSession`** uses **`createServerClient`** (`src/server/supabase/server-client.ts`), then loads **`Usuario`** (by `supabaseUserId` or linked email). |
| **Env** | **`VITE_SUPABASE_URL`**, **`VITE_SUPABASE_ANON_KEY`**, **`SUPABASE_SERVICE_ROLE_KEY`** (server only, admin API). **`NEXTAUTH_SECRET`** removed. |

---

## Deprecated or removed (do not use for new work)

| Item | Notes |
| ---- | ----- |
| **NextAuth** (`next-auth`, `@next-auth/*`) | Removed from dependencies. No `getServerSession`, `CredentialsProvider`, or `PrismaAdapter`. |
| **NextAuth-style `session` types** | Replaced by **`AppSession` / `AppSessionUser`** (`src/shared/auth/session.ts`). |
| **tRPC `CreateNextContextOptions`** | Replaced by **`{ req: Request, resHeaders: Headers }`** for the fetch adapter. |
| **Per-user bcrypt login** | Login is **Supabase-only**; bcrypt remains only for **placeholder** `Usuario.password` + legacy code paths if any. |
| **`next-auth/react` hooks** | Use **`@/hooks/use-session`** instead. |

---

## What changes conceptually (historical)

| Layer               | Before (Next)                                   | TanStack Start                                                                                    |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Runtime / bundler   | Next                                            | Vite-based Start                                                                                  |
| Routing             | `src/pages/**` (removed)                        | TanStack Router file routes (`src/routes/`)                                                       |
| HTTP API            | Next API routes                                 | Start server route handlers (e.g. tRPC at **`/api/trpc`**)                                        |
| Auth                | NextAuth + `req`/`res`                          | Supabase session cookies + **`Request`**-scoped server client                                     |
| tRPC client         | `@trpc/next` (`createTRPCNext`)                 | **`createTRPCReact`** (`@trpc/react-query`) + `httpBatchLink` — **done** (`src/utils/api.ts`)       |
| tRPC server         | `createNextApiHandler`                          | **`fetchRequestHandler`** — **done** (`src/routes/api/trpc.tsx`)                                  |
| Images / Cloudinary | `next/image`, `next-cloudinary`                 | **`next-cloudinary` kept** for `CldImage` / `CldUploadWidget`; plain `<img>` / `<a>` where needed |

---

## Route map (Pages → Router)

Use this as a checklist when creating file routes. Adjust file naming to your TanStack Router convention (`$param` for dynamics, etc.).

| Next path                     | Notes                                   |
| ----------------------------- | --------------------------------------- |
| `/`                           | `index.tsx`                             |
| `/login`                      | **Implemented** (`src/routes/login.tsx`) |
| `/dashboard`                  | **Stub** (`src/routes/dashboard.tsx`)   |
| `/contacto`                   |                                         |
| `/features`                   |                                         |
| `/planes`                     |                                         |
| `/pasajes`                    |                                         |
| `/soporte`                    |                                         |
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

**API:** tRPC **`/api/trpc`** (`src/routes/api/trpc.tsx`).

---

## Phased plan

### Phase 0 — Inventory ✅

- [x] Confirm all external URLs and redirects (production vs staging).
- [x] List every `useSession` / `signIn` / `signOut` and every `protectedProcedure` consumer.
- [x] Grep for `next/link`, `next/image`, `next/head`, `next/router` and track refactors.
- [x] Document env vars (`src/env.mjs`, `VITE_*`, DB, Cloudinary, Supabase).

### Phase 1 — Start skeleton ✅

- [x] Rewrite `package.json` — TanStack Start + Vite + Nitro; Bun.
- [x] `vite.config.ts`, `src/router.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`.
- [x] `src/contexts/` — `MenuContext`, `MessageContext`, `notification`.
- [x] Delete legacy Next app files (`src/pages/**`, `next.config.mjs`, etc.) per prior migration commit.

### Phase 1b — Client integration (2026-04) ✅

Follow-up work so **`tsc --noEmit`** passes and the app matches TanStack Router / Vite semantics:

| Item | Notes |
| ---- | ----- |
| **Context import path** | Canonical implementations live in **`src/contexts/`**. Thin barrels **`src/context/MenuContext.tsx`** and **`src/context/MessageContext.tsx`** re-export for existing `@/context/...` imports. |
| **tRPC React client** | **`src/utils/api.ts`**: `createTRPCReact<AppRouter>()`, exports `RouterInputs` / `RouterOutputs`, **`AppTRPCClientError`** (`TRPCClientErrorLike<AppRouter>`). |
| **React Query + tRPC provider** | **`src/utils/trpc-provider.tsx`**: `QueryClient`, `api.Provider`, `httpBatchLink` → **`/api/trpc`**, `superjson`, **`credentials: "include"`**. Wired in **`src/routes/__root.tsx`**. |
| **Root document head** | TanStack Router **`HeadContent`** does not accept children. Meta and links moved to **`createRootRoute({ head: () => ({ meta, links }) })`**; `<HeadContent />` is self-closing. |
| **AOS** | **`src/utils/AOS.tsx`**: `aos` + `aos/dist/aos.css`, `declare module "aos"` in **`src/vite-env.d.ts`**. |
| **Static assets** | PNG imports typed as **`string`** in `vite-env.d.ts`; backgrounds use `url(${import})` without Next’s **`.src`**. |
| **Landing layout** | Prefer TanStack **`Link`** where routes exist; **`<a href>`** for routes not yet in the route tree. |
| **App shell layout** | **`useNavigate`** from `@tanstack/react-router` instead of `next/navigation`. |
| **Cloudinary (next-cloudinary v6)** | **`CldUploadWidget`**: **`config={{ cloud: { cloudName: VITE_... } }}`**. |
| **Dependencies added** | `@tanstack/react-query@4.36.1` (tRPC v10 peer), `aos`, `next-cloudinary`, `react-audio-voice-recorder`, `@supabase/supabase-js`, `@supabase/ssr`, `cookie`. |

**Exit:** `bunx tsc --noEmit` succeeds; dev/build per project scripts.

### Phase 2 — Auth ✅

- [x] **Supabase Auth** + `@supabase/ssr`; **`SupabaseAuthProvider`** in **`src/routes/__root.tsx`**.
- [x] Replace **`useSession` / sign-out** with **`src/hooks/use-session.ts`** (tRPC **`auth.session`** + Supabase `signOut`).
- [x] **Exit:** Login at **`/login`**; `protectedProcedure` receives **`id`, `rol`, `sedeId`, `nombres`, `apellidos`, `foto`** via **`AppSession`**.

### Phase 3 — tRPC on Start (server + context) ✅

- [x] **`fetchRequestHandler`** serves **`/api/trpc`** (`src/routes/api/trpc.tsx`); matches **`trpc-provider`** URL.
- [x] **`src/server/api/trpc.ts`** uses **`Request` + `Headers`**, not **`CreateNextContextOptions`**.
- [x] **`@trpc/react-query`** + provider — **client** (`src/utils/api.ts`, `src/utils/trpc-provider.tsx`).

**Exit:** tRPC + Supabase session end-to-end on the Start server.

### Phase 4 — Route migration

- [ ] Implement remaining routes from the route map; TanStack `Link` / `useNavigate` everywhere types allow.
- [ ] Port layouts (landing vs app shell); protect routes as needed.

**Exit:** Public and protected URLs behave like the old app.

### Phase 5 — Next-specific cleanup

- [x] Replace **`next/head`**-style usage with Router **`head`** + **`HeadContent`** (root).
- [ ] Replace remaining **`next/link`**, **`next/image`**, **`next/font`** across components.
- [ ] Optionally replace **`next-cloudinary`** with a non-Next package if bundle/runtime issues appear (currently still **`next-cloudinary`** with Vite).

### Phase 6 — Prisma, tests, lint

- [ ] Restore **Vitest** (or chosen runner) and TS path aliases for the new layout.
- [ ] ESLint: ensure `eslint` is installed / config updated for Vite + React (script may fail if CLI missing).

### Phase 7 — Cutover

- [ ] Single deployment: Start build output; Prisma + Supabase cookies validated on the host.
- [ ] Remove dead Next-only artifacts after parity tests.

---

## Prisma: setup and usage (what actually changes)

Prisma is **not** tied to Next.js. On TanStack Start, keep **`PrismaClient` server-only**, singleton in dev (`src/server/db.ts`), and `DATABASE_URL` wired for the Node server.

**Auth-related:** optional **`Usuario.supabaseUserId`** links to Supabase Auth; application FKs (`boleto.usuarioId`, etc.) still use **`Usuario.id`**.

---

## Risks and mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Supabase + Prisma drift | Link users on first login; admin mutations set **`supabaseUserId`**. |
| Ant Design + SSR/hydration | Test root layout and `window`-only code on Start. |
| Cloudinary + `next/image` inside **next-cloudinary** | Regression-test uploads; consider migrating off if Vite/SSR issues appear. |
| Typed `Link` only knows registered routes | Use `<a href>` for not-yet-migrated paths or add stub routes. |

---

## Decisions locked (Phase 1 + 1b + auth)

1. **Bundler:** Vite 8 (no vinxi).
2. **SSR:** Nitro (`nitro/vite` plugin).
3. **Package manager:** Bun.
4. **Tailwind:** v3 (existing config).
5. **Repo layout:** Single package.
6. **tRPC client:** `@trpc/react-query` + **`@tanstack/react-query` v4** (peer of tRPC v10).
7. **Context paths:** Implementations in **`src/contexts/`**; compatibility barrels in **`src/context/`**.
8. **Auth:** **Supabase Auth** (not NextAuth / Auth.js on the server).

---

## Reference paths in this repo

| Purpose | Path |
| ------- | ---- |
| Vite config | `vite.config.ts` |
| Router instance | `src/router.tsx` |
| Root route (providers, `head`) | `src/routes/__root.tsx` |
| Routes directory | `src/routes/` |
| Login / dashboard stubs | `src/routes/login.tsx`, `src/routes/dashboard.tsx` |
| tRPC HTTP route | `src/routes/api/trpc.tsx` |
| Supabase browser provider | `src/contexts/SupabaseAuthContext.tsx` |
| Session hooks (replaces next-auth) | `src/hooks/use-session.ts` |
| Auth email helpers | `src/shared/auth/auth-email.ts` |
| Session types | `src/shared/auth/session.ts` |
| Server auth + `Usuario` resolution | `src/server/auth.ts` |
| Supabase server / admin clients | `src/server/supabase/server-client.ts`, `admin-client.ts` |
| Contexts (source) | `src/contexts/` |
| Context barrels (`@/context/*`) | `src/context/` |
| tRPC React client | `src/utils/api.ts` |
| tRPC + React Query provider | `src/utils/trpc-provider.tsx` |
| Auth state → tRPC invalidation | `src/utils/auth-state-sync.tsx` |
| AOS wrapper | `src/utils/AOS.tsx` |
| Global styles | `src/styles/globals.css` |
| Vite env / module declarations | `src/vite-env.d.ts` |
| tRPC context & procedures | `src/server/api/trpc.ts` |
| Auth router | `src/server/api/routers/auth.ts` |
| Router root | `src/server/api/root.ts` |
| Prisma client | `src/server/db.ts` |
| Env validation | `src/env.mjs` |
| Schema | `prisma/schema.prisma` |

**Removed / obsolete (do not reference as current):** `src/pages/api/trpc/*`, `src/pages/api/auth/*`, **NextAuth** packages, **`NEXTAUTH_*`** env.

---

## Environment variables (auth-related)

| Variable | Where | Purpose |
| -------- | ----- | ------- |
| `VITE_SUPABASE_URL` | Client + server (validated in `env.mjs`) | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Client + server | Supabase anon key (browser + cookie session) |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server only** | Admin API (`usuarios` create/update/delete/disable) — never expose to client |

Also: `DATABASE_URL`, Reniec, Cloudinary, `VITE_APP_URL`, etc. — see **`src/env.mjs`**.

---

_Last updated: 2026-04-04 — Phases 0–1b ✅, Phase 2 (Supabase Auth) ✅, Phase 3 (tRPC fetch + context) ✅._
