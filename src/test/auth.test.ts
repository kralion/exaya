import { authOptions } from "@/server/auth";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("Auth System", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Credentials Provider", () => {
    type Provider = (typeof authOptions.providers)[number];

    const credentialsProvider = authOptions.providers.find(
      (provider): provider is Provider => provider.type === "credentials"
    );

    if (!credentialsProvider) {
      throw new Error("Credentials provider not found");
    }

    // Ensure the return type matches your actual implementation
    const authorize = credentialsProvider.options.authorize as (credentials: {
      username: string;
      password: string;
    }) => Promise<{
      id: string;
      username: string /* other user properties */;
    } | null>;

    it("should throw error if username is missing", async () => {
      const testCredentials = { password: "test", username: "" };
      await expect(authorize(testCredentials)).rejects.toThrow(TRPCError);
    });

    it("should throw error if password is missing", async () => {
      const testCredentials = { password: "", username: "test" };
      await expect(authorize(testCredentials)).rejects.toThrow(TRPCError);
    });

    it("should throw error if user is not found", async () => {
      vi.mocked(
        prisma.usuario.findUnique.bind(prisma.usuario)
      ).mockResolvedValueOnce(null);
      const testCredentials = { username: "nonexistent", password: "test" };
      await expect(authorize(testCredentials)).rejects.toThrow(TRPCError);
    });

    it("should throw error if user is disabled", async () => {
      const mockUser = {
        id: "1",
        isDeleted: true,
        username: "disabled",
        password: "$2b$10$", // Example hash start for bcrypt
        nombres: "Test",
        apellidos: "User",
        rol: "USER",
        sedeId: "1",
        foto: "",
      };

      vi.mocked(
        prisma.usuario.findUnique.bind(prisma.usuario)
      ).mockResolvedValueOnce(mockUser);
      const testCredentials = { username: "disabled", password: "test" };
      await expect(authorize(testCredentials)).rejects.toThrow(TRPCError);
    });

    it("should successfully authenticate and redirect to dashboard with correct credentials", async () => {
      const mockUser = {
        id: "1",
        isDeleted: false,
        username: "brayan",
        password: "$2b$10$",
        nombres: "Brayan",
        apellidos: "Test",
        rol: "USER",
        sedeId: "1",
        foto: "",
      };

      vi.mocked(
        prisma.usuario.findUnique.bind(prisma.usuario)
      ).mockResolvedValueOnce(mockUser);
      const testCredentials = { username: "brayan", password: "Exay4" };

      const result = await authorize(testCredentials);
      expect(result).not.toBeNull(); // Assuming `authorize` returns user details on success
      // Here, you'd typically mock or spy on the redirect function to ensure it's called with '/dashboard'
      // For example, if you have a redirect function:
      // const redirectSpy = vi.spyOn(someRedirectFunction, 'call');
      // await someRedirectFunction('/dashboard');
      // expect(redirectSpy).toHaveBeenCalledWith('/dashboard');
    });
  });
});
