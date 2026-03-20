import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock environment variables
vi.mock("@/env.mjs", () => ({
  env: {
    NEXTAUTH_SECRET: "test-secret",
  },
}));

// Mock prisma client
vi.mock("@/server/db", () => ({
  prisma: {
    usuario: {
      findUnique: vi.fn(),
    },
  },
}));

// Mock bcrypt
vi.mock("bcrypt", () => ({
  compare: vi.fn().mockResolvedValue(true),
}));
