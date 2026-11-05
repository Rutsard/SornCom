// ==============================================================================
// Database 1: core_db (PostgreSQL) Prisma Client Singleton
// Manages: Users, Authentication, Learning Tracks, Modules, Progress
// Configured via CORE_DATABASE_URL
// ==============================================================================

import { PrismaClient as CorePrismaClient } from "../generated/core";
import { TRACKS_SEED } from "./seed-data";

const globalForCore = globalThis as unknown as {
  corePrisma: CorePrismaClient | undefined;
};

export const corePrisma =
  globalForCore.corePrisma ??
  new CorePrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForCore.corePrisma = corePrisma;
}

/**
 * Resilient Track fetching helper with fallback
 */
export async function getTracksWithProgress(userId?: string) {
  try {
    const tracks = await corePrisma.track.findMany({
      orderBy: { order: "asc" },
      include: {
        modules: {
          include: { lessons: true },
        },
      },
    });
    if (tracks.length > 0) return tracks;
  } catch (error) {
    console.warn("[core_db] Offline or connecting failed. Using resilient fallback data.");
  }

  // Graceful fallback to static seed data
  return TRACKS_SEED.map((t) => ({
    ...t,
    createdAt: new Date(),
    updatedAt: new Date(),
    modules: [],
  }));
}
