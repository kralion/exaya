# Architecture

## Folder Structure

src/
shared/
components/
layout/ ← shared layouts
ui/ ← shadcn primitives, never touch manually
hooks/ ← shared custom hooks
stores/ ← global zustand stores
lib/ ← utils, supabase client, helpers
types/
database.types.ts ← supabase generated, NEVER edit manually

features/
<feature>/
components/ ← feature-only, split by single responsibility
store/ ← zustand, feature-scoped only
api/
services/ ← supabase-js calls only, zero business logic
queries/ ← tanstack query hooks wrapping services
types/ ← derived from database.types.ts + feature interfaces

routes/ ← tanstack router file-based, top level
styles/ ← global styles
config/ ← app-level config, env constants

## Dependency Direction (unidirectional, never reverse)

routes/ → features/<x>/components
routes/ → features/<x>/store
features/<x>/api/queries → features/<x>/api/services
features/<x>/api/services → shared/lib/supabase
shared/ ← used by any feature, never imports from features/

## Hard Rules

- No feature imports from another feature
- services/ never imports from queries/ or components/
- queries/ only wraps services/, no direct supabase calls
- components/ never calls supabase directly
- shared/types/database.types.ts is the single source of truth for DB types
