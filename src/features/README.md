# Features - Feature-Isolated Architecture

This folder implements the **Feature-Isolated** pattern, where each sidebar item is organized as an independent feature with its own frontend components and backend API logic.

## Structure

```
features/
├── dashboard/           # Panel de control
│   ├── components/      # UI components (graphs, cards, etc.)
│   ├── api/            # Backend API routers (if needed)
│   └── index.ts        # Feature exports
│
├── pasajes/            # Venta de pasajes
│   ├── components/     # UI components (tables, modals, tickets)
│   ├── api/           # boletos router
│   └── index.ts
│
├── encomiendas/        # Gestión de encomiendas
│   ├── components/     # UI components (forms, tables, tickets)
│   ├── api/           # encomiendas router
│   └── index.ts
│
├── programacion/       # Planner (parent feature)
│   ├── viajes/         # Sub-feature: Viajes
│   │   ├── components/
│   │   ├── api/        # viajes router
│   │   └── index.ts
│   ├── bus-conductor/  # Sub-feature: Bus y Conductor
│   │   ├── components/
│   │   ├── api/        # buses, conductores routers
│   │   └── index.ts
│   └── comprobantes/   # Sub-feature: Comprobantes
│       ├── components/
│       └── index.ts
│
├── contable/           # Contabilidad
│   ├── components/
│   └── index.ts
│
├── administracion/     # Administración de usuarios/KPIs
│   ├── components/
│   ├── api/            # usuarios router
│   └── index.ts
│
└── soporte/            # Soporte
    ├── components/
    └── index.ts
```

## Shared Resources

The following resources remain in their original locations as they are shared across multiple features:

- **Schemas**: `src/schemas/index.ts`
- **Auth**: `src/shared/auth/`
- **Contexts**: `src/contexts/`
- **Hooks**: `src/hooks/`
- **Utils**: `src/utils/`
- **Common Components**: `src/components/common/`
- **Shared API Routers**: `src/server/api/routers/` (auth, sedes, rutas, clientes)

## Usage

Import components from features using the feature path:

```tsx
// Direct component import
import { PasajesTable } from "@/features/pasajes/components/pasajes-table";

// Or using the feature index
import { PasajesTable } from "@/features/pasajes";
```

## Benefits

1. **Isolation**: Each feature is self-contained with its own components and API
2. **Scalability**: Easy to add new features without affecting existing ones
3. **Maintainability**: Related code is grouped together
4. **Team Collaboration**: Different teams can work on different features independently
5. **Code Splitting**: Natural boundaries for lazy loading
