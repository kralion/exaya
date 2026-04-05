# Stack

## Core

- Runtime: Bun
- Language: TypeScript — maintainable, not overly strict
- Framework: React

## TanStack Ecosystem

- TanStack Router — file-based routing, top-level routes/
- TanStack Query — all server state, no exceptions
- TanStack Table — all table implementations

## State Management

- Zustand — feature-scoped stores in features/<x>/store/
- Global stores in shared/stores/ only if 2+ features need it

## Forms

- React Hook Form + Zod
- Zod schema defined in features/<x>/api/types/ first
- Infer form types from schema, never define separately

## UI

- shadcn/ui — defaults only
- Tailwind — only when strictly needed

## Backend

- Supabase + supabase-js
- All calls isolated in features/<x>/api/services/
- Types generated via Supabase CLI, never hardcoded
