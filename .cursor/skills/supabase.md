# Supabase Conventions

## Generated Types

- Run: supabase gen types typescript --project-id <id> > src/shared/types/database.types.ts
- Run after every schema change
- Never manually edit database.types.ts
- Never hardcode DB types anywhere

## Deriving Feature Types

// features/<x>/api/types/index.ts
import type { Database } from '@/shared/types/database.types'

export type Project = Database['public']['Tables']['projects']['Row']
export type ProjectInsert = Database['public']['Tables']['projects']['Insert']
export type ProjectUpdate = Database['public']['Tables']['projects']['Update']

## Services Layer

- Only place supabase-js gets called
- No business logic, pure DB interaction
- Always typed using derived types
- Returns data or throws, never handles UI state

## Queries Layer

- Wraps services with TanStack Query
- Query keys scoped to feature
- Mutations invalidate feature-level keys only
- No direct supabase imports allowed here
