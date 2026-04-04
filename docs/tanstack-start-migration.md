# TanStack Start migration plan

This document describes migrating **Exaya** from the **T3 Stack** (Next.js 14 **Pages Router**) to **TanStack Start**. It reflects the repository as of the migration planning pass: tRPC v10, NextAuth v4 (Credentials + JWT), Prisma 6, Ant Design + Tailwind, and no `getServerSideProps` / `getStaticProps`.

> **Status:** Phase 0 and Phase 1 complete. **Phase 1 integration pass** (tRPC React client, root head, context barrels, Cloudinary typings) complete. **Phase 2 (auth)** and full **route / Next API cleanup** remain. **Last updated: 2026-04-04.**

---

## Current stack (source of truth)

| Area            | Implementation                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework       | **TanStack Start** (~v1.167) (SSR, Vite 8, Nitro)                                                                                               |
| Bundler         | Vite 8 (no vinxi)                                                                                                                               |
| Routing         | TanStack Router file routes (`src/routes/`)                                                                                                     |
| Data            | tRPC → `src/server/api/**`, Prisma (`src/server/db.ts`)                                                                                         |
| Auth            | **Still NextAuth-oriented on the server** (`src/server/auth.ts`); **client** still uses `next-auth/react` in many components — **Phase 2 pending** |
| tRPC browser    | **`@trpc/react-query`** + **`@tanstack/react-query` v4** (tRPC v10 peer) + `TrpcProvider` in `src/utils/trpc-provider.tsx`                      |
| UI globals      | `src/routes/__root.tsx`: `ConfigProvider`, **`TrpcProvider`**, `MenuProvider`, `MessageProvider`, `Notification`, `ThemeToggle`                 |
| Styles          | Tailwind v3 + PostCSS                                                                                                                           |
| Package manager | Bun                                                                                                                                             |

---

## What changes conceptually

| Layer               | Before (Next)                                   | TanStack Start                                                                                    |
| ------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Runtime / bundler   | Next                                            | Vite-based Start                                                                                  |
| Routing             | `src/pages/**` (removed)                        | TanStack Router file routes (`src/routes/`)                                                       |
| HTTP API            | Next API routes                                 | Start / Nitro server handlers (tRPC endpoint must serve `/api/trpc` for the current client URL)   |
| Auth                | NextAuth catch-all + `req`/`res` session        | Session from **Web `Request`** (cookie/JWT) — target for Phase 2                                  |
| tRPC client         | `@trpc/next` (`createTRPCNext`)                 | **`createTRPCReact`** (`@trpc/react-query`) + `httpBatchLink` — **done** (`src/utils/api.ts`)       |
| tRPC server         | `createNextApiHandler`                          | **`fetchRequestHandler`** on a Start route — align with Start server routes / Nitro (see Phase 3) |
| Images / Cloudinary | `next/image`, `next-cloudinary`                 | **`next-cloudinary` kept** for `CldImage` / `CldUploadWidget`; widget uses **`config.cloud.cloudName`** (Vite env). Plain `<img>` / `<a>` where router types are incomplete |

---

## Route map (Pages → Router)

Use this as a checklist when creating file routes. Adjust file naming to your TanStack Router convention (`$param` for dynamics, etc.).

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

**API-only:** migrate behavior, not paths — e.g. tRPC mount point and auth session resolution.

---

## Phased plan

### Phase 0 — Inventory ✅

- [x] Confirm all external URLs and redirects (production vs staging).
- [x] List every `useSession` / `signIn` / `signOut` and every `protectedProcedure` consumer.
- [x] Grep for `next/link`, `next/image`, `next/head`, `next/router` and track refactors.
- [x] Document env vars (`src/env.mjs`, `VITE_*`, `NEXTAUTH_*`, DB, Cloudinary).

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
| **React Query + tRPC provider** | **`src/utils/trpc-provider.tsx`**: `QueryClient`, `api.Provider`, `httpBatchLink` → **`/api/trpc`**, `superjson`. Wired in **`src/routes/__root.tsx`**. |
| **Root document head** | TanStack Router **`HeadContent`** does not accept children. Meta and links moved to **`createRootRoute({ head: () => ({ meta, links }) })`**; `<HeadContent />` is self-closing. |
| **AOS** | **`src/utils/AOS.tsx`** restored: `aos` + `aos/dist/aos.css`, `declare module "aos"` in **`src/vite-env.d.ts`**. |
| **Static assets** | PNG imports typed as **`string`** in `vite-env.d.ts`; backgrounds use `url(${import})` without Next’s **`.src`**. |
| **Landing layout** | `next/font` / `next/image` / conditional **`Link`** to routes not yet in the route tree replaced with font utility classes, `<img>`, and **`<a href>`** for `/dashboard` and `/login` until those routes exist (restores typed `Link` later). |
| **App shell layout** | **`useNavigate`** from `@tanstack/react-router` instead of `next/navigation`; duplicate **`MessageProvider`** removed from `layout.tsx` (root already provides it). |
| **Cloudinary (next-cloudinary v6)** | **`CldUploadWidget`**: use **`config={{ cloud: { cloudName: VITE_... } }}`** (not top-level `cloudName` / `apiKey`). Callbacks typed with **`CloudinaryUploadWidgetResults`** / **`CldUploadWidgetPropsChildren`**. |
| **Dependencies added** | `@tanstack/react-query@4.36.1` (tRPC v10 peer), `aos`, `next-cloudinary`, `react-audio-voice-recorder`. |

**Exit:** `bunx tsc --noEmit` succeeds; dev/build per project scripts.

### Phase 2 — Auth (critical path)

NextAuth is still coupled to Next-style APIs in places; tRPC expects `session` on context.

- [ ] Pick strategy (Auth.js non-Next, custom JWT/cookies, or library-assisted).
- [ ] Replace `useSession` / `signIn` / `signOut` usage in UI with the new client.
- [ ] **Exit:** Login works; `protectedProcedure` sees the same user fields (`id`, `rol`, `sedeId`, etc.).

### Phase 3 — tRPC on Start (server + context)

- [ ] Ensure **`fetchRequestHandler`** (or Start’s equivalent) serves **`/api/trpc`** and matches `trpc-provider` URL.
- [ ] Refactor **`src/server/api/trpc.ts`** to drop **`CreateNextContextOptions`**; build context from **`Request`** + session helper.
- [x] Replace **`createTRPCNext`** with **`@trpc/react-query`** + provider — **client done** (`src/utils/api.ts`, `src/utils/trpc-provider.tsx`).

**Exit:** Real queries/mutations work end-to-end against the Start server.

### Phase 4 — Route migration

- [ ] Implement routes from the route map; TanStack `Link` / `useNavigate` everywhere types allow.
- [ ] Port layouts (landing vs app shell).

**Exit:** Public and protected URLs behave like the old app.

### Phase 5 — Next-specific cleanup

- [x] Replace **`next/head`**-style usage with Router **`head`** + **`HeadContent`** (root).
- [ ] Replace remaining **`next/link`**, **`next/image`**, **`next/font`** across components.
- [ ] Optionally replace **`next-cloudinary`** with a non-Next package if bundle/runtime issues appear (currently still **`next-cloudinary`** with Vite).

### Phase 6 — Prisma, tests, lint

- [ ] Restore **Vitest** (or chosen runner) and TS path aliases for the new layout.
- [ ] ESLint: ensure `eslint` is installed / config updated for Vite + React (script may fail if CLI missing).

### Phase 7 — Cutover

- [ ] Single deployment: Start build output; Prisma + cookies validated on the host.
- [ ] Remove dead Next-only artifacts and deps after parity tests.

---

## Prisma: setup and usage (what actually changes)

Prisma is **not** tied to Next.js. On TanStack Start, keep **`PrismaClient` server-only**, singleton in dev (`src/server/db.ts`), and `DATABASE_URL` wired for the Node server.

---

## Risks and mitigations

| Risk | Mitigation |
| ---- | ---------- |
| Auth is the longest pole | Session + one protected tRPC path before bulk route porting. |
| Ant Design + SSR/hydration | Test root layout and `window`-only code on Start. |
| Cloudinary + `next/image` inside **next-cloudinary** | Regression-test uploads; consider migrating off if Vite/SSR issues appear. |
| Typed `Link` only knows registered routes | Use `<a href>` for not-yet-migrated paths or add stub routes. |

---

## Decisions locked (Phase 1 + 1b)

1. **Bundler:** Vite 8 (no vinxi).
2. **SSR:** Nitro (`nitro/vite` plugin).
3. **Package manager:** Bun.
4. **Tailwind:** v3 (existing config).
5. **Repo layout:** Single package.
6. **tRPC client:** `@trpc/react-query` + **`@tanstack/react-query` v4** (peer of tRPC v10).
7. **Context paths:** Implementations in **`src/contexts/`**; compatibility barrels in **`src/context/`**.

---

## Reference paths in this repo

| Purpose | Path |
| ------- | ---- |
| Vite config | `vite.config.ts` |
| Router instance | `src/router.tsx` |
| Root route (providers, `head`) | `src/routes/__root.tsx` |
| Routes directory | `src/routes/` |
| Contexts (source) | `src/contexts/` |
| Context barrels (`@/context/*`) | `src/context/` |
| tRPC React client | `src/utils/api.ts` |
| tRPC + React Query provider | `src/utils/trpc-provider.tsx` |
| AOS wrapper | `src/utils/AOS.tsx` |
| Global styles | `src/styles/globals.css` |
| Vite env / module declarations | `src/vite-env.d.ts` |
| tRPC context & procedures | `src/server/api/trpc.ts` |
| Router root | `src/server/api/root.ts` |
| Auth config | `src/server/auth.ts` |
| Prisma client | `src/server/db.ts` |
| Env validation | `src/env.mjs` |
| Schema | `prisma/schema.prisma` |

**Removed / obsolete (do not reference as current):** `src/pages/api/trpc/*`, `src/pages/api/auth/*` — Next API routes deleted with the Pages migration.

---

_Last updated: 2026-04-04 — Phase 0 ✅, Phase 1 ✅, Phase 1b (client integration) ✅._
