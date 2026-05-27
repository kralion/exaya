# AGENTS.md

## 0. Project Stack

- **Frontend:** Vite, React, Tanstack Start, 
- **Backend/DB:** Supabase
- **Auth:** Supabase Auth
- **Hosting:** Netlify
- **UI:** Ant Design

---

## 1. Context

Working with Brayan — expert React developer.
Direct colleague tone. No fluff, no AI empathy, no filler.

---

## 2. Planning Protocol

Before any non-trivial task:
- State the plan: files to touch, approach, and any assumptions.
- Never assume file structure, existing logic, or types — ask first.
- Wait for explicit confirmation before starting implementation.
- Break work into small iterative steps. Confirm each step before proceeding.

---

## 3. Forbidden Commands

- **NEVER** run dev or build commands unless explicitly asked.
- **NEVER** run typecheck automatically. It is run manually by Brayan at end of session. Only run if explicitly requested.

---

## 4. Package Manager

Always use **Bun**. Never use `npm` or `yarn`.

---

## 5. Feature Scope

- All changes must stay within the current feature scope.
- Never modify files outside the feature unless strictly required.
- If a change outside scope is unavoidable, flag it explicitly and wait for confirmation before touching it.

---

## 6. UI Philosophy

- Use **Ant Design** defaults. Never customize component styles.
- No custom colors, borders, gradients, or shadows.
- Use Tailwind only when strictly necessary — no decorative utility classes.
- Stick to design system tokens exclusively.

---

## 7. Pattern Replication

For medium or complex tasks (new functionality, non-trivial integrations, multi-file changes):
- Explore the codebase first and identify how similar problems are already solved.
- Match existing patterns for: fetching, routing, state management, backend interaction, file structure, and component composition.
- Never invent a new pattern if an existing one already covers the case.
- If no clear pattern exists, flag it and ask before proceeding.

Not required for simple tasks (small fixes, isolated UI changes, refactors with clear scope).

---

## 8. Architecture Rules

- Every feature owns one responsibility. No cross-feature logic bleeding.
- Split components into small, single-purpose files.
- Never put business logic inside components.
- Use provided `@file` references. Never assume file paths.

---

## 9. Feature-Isolated Architecture

All features live under `features/`. Each feature maps to a navigation item or a distinct domain unit.

### Structure

```
features/
  <feature-name>/
    api/
      types.ts      # Re-exports or extends types from external generated sources (Supabase, Drizzle, Convex, etc.)
      db.ts         # Direct backend calls (DB queries, server functions, API routes)
      services.ts   # Data transformation — raw backend data shaped for frontend consumption
      queries.ts    # TanStack Query hooks (or equivalent) — what components actually consume
      schemas.ts    # Form validation schemas (Zod, etc.)
    components/     # UI components scoped to this feature
    stores/         # UI state (dialogs, selections, local interface state)
    index.tsx       # Feature entry point — consumed by the router
```

### Rules

- `db.ts` is the only file that talks to the backend. Never call the backend directly from components or services.
- `services.ts` never imports from `queries.ts`. Data flows one way: `db → services → queries → components`.
- `types.ts` centralizes all types the feature needs, regardless of where they originate.
- `stores/` is for UI state only. No backend interaction, no derived server data.
- `index.tsx` is the only file imported by `routes/`. Never import internal feature files from outside the feature.
- Routes live outside `features/` in a dedicated `routes/` folder.

### Stack Adaptations

This structure is stack-agnostic. Only the internals of `api/` change:

| File | Supabase | Neon + Drizzle | Convex |
|------|----------|----------------|--------|
| `types.ts` | Re-exports from generated Supabase types | Re-exports Drizzle `$inferSelect`/`$inferInsert` | Re-exports Convex generated types + UI-only types |
| `db.ts` | Supabase client calls | Drizzle queries or server actions | Convex functions (may be minimal) |
| `services.ts` | Data transformers | Data transformers | Data transformers (if needed) |
| `queries.ts` | TanStack Query hooks | TanStack Query hooks | Convex `useQuery`/`useMutation` or wrapped hooks |
