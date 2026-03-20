/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { authorizeUser } from "@/server/session";
import { prisma } from "@/server/db";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Rol } from "@/types/auth";

describe("Auth System", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("authorizeUser", () => {
    it("should return null if username is missing", async () => {
      const result = await authorizeUser("", "test");
      expect(result).toBeNull();
    });

    it("should return null if user is not found", async () => {
      vi.mocked(prisma.usuario.findUnique).mockResolvedValueOnce(null);
      const result = await authorizeUser("nonexistent", "test");
      expect(result).toBeNull();
    });

    it("should return null if user is disabled", async () => {
      const mockUser = {
        id: "1",
        isDeleted: true,
        username: "disabled",
        password: "$2b$10$",
        nombres: "Test",
        apellidos: "User",
        rol: "USER" as Rol,
        sedeId: "1",
        foto: "",
        usuarioDni: "12345678",
        telefono: "123456789",
      };
      vi.mocked(prisma.usuario.findUnique)
        .mockResolvedValueOnce(mockUser)
        .mockResolvedValueOnce(mockUser);
      const result = await authorizeUser("disabled", "test");
      expect(result).toBeNull();
    });

    it("should return user on correct credentials", async () => {
      const mockUser = {
        id: "1",
        isDeleted: false,
        username: "brayan",
        password: "$2b$10$rQZ8K8K8K8K8K8K8K8K8Ou",
        nombres: "Brayan",
        apellidos: "Test",
        rol: "USER" as Rol,
        sedeId: "1",
        foto: "",
        usuarioDni: "87654321",
        telefono: "987654321",
      };
      vi.mocked(prisma.usuario.findUnique)
        .mockResolvedValueOnce(mockUser)
        .mockResolvedValueOnce(null);
      const result = await authorizeUser("brayan", "Exay4");
      expect(result).not.toBeNull();
      expect(result?.id).toBe("1");
    });
  });
});
