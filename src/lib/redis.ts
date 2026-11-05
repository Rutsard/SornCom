// ==============================================================================
// Redis Store: Queue, Rate Limiting, and Pub/Sub
// Configured via REDIS_URL
// ==============================================================================

import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

let redisClient: Redis | null = null;
let isRedisAvailable = false;

try {
  redisClient = new Redis(redisUrl, {
    maxRetriesPerRequest: 1,
    retryStrategy: () => null, // Don't spam retries if offline
    connectTimeout: 2000,
    lazyConnect: true,
  });

  redisClient.connect().then(() => {
    isRedisAvailable = true;
    console.log("⚡ Connected to Redis queue store at", redisUrl);
  }).catch(() => {
    console.warn("⚠️ Redis not reachable at", redisUrl, "- operating in in-memory queue mode.");
    isRedisAvailable = false;
  });
} catch (e) {
  isRedisAvailable = false;
}

// In-memory rate limiting map for fallback
const memoryRateLimits = new Map<string, { count: number; resetAt: number }>();

/**
 * Check rate limit (programming.in.th style anti-spam)
 * Returns { allowed: boolean, remaining: number, resetInSeconds: number }
 */
export async function checkRateLimit(
  identifier: string,
  limit = 5,
  windowSeconds = 30
): Promise<{ allowed: boolean; remaining: number; resetInSeconds: number }> {
  const key = `ratelimit:sub:${identifier}`;
  const now = Math.floor(Date.now() / 1000);

  if (isRedisAvailable && redisClient) {
    try {
      const current = await redisClient.incr(key);
      if (current === 1) {
        await redisClient.expire(key, windowSeconds);
      }
      const ttl = await redisClient.ttl(key);
      return {
        allowed: current <= limit,
        remaining: Math.max(0, limit - current),
        resetInSeconds: Math.max(0, ttl),
      };
    } catch {
      // Fallback to memory
    }
  }

  // Memory fallback
  const record = memoryRateLimits.get(identifier);
  if (!record || record.resetAt <= now) {
    memoryRateLimits.set(identifier, { count: 1, resetAt: now + windowSeconds });
    return { allowed: true, remaining: limit - 1, resetInSeconds: windowSeconds };
  }

  record.count += 1;
  const allowed = record.count <= limit;
  const remaining = Math.max(0, limit - record.count);
  const resetInSeconds = Math.max(0, record.resetAt - now);

  return { allowed, remaining, resetInSeconds };
}

/**
 * Push submission task to grading queue
 */
export async function enqueueSubmission(submissionId: string, payload: unknown) {
  if (isRedisAvailable && redisClient) {
    try {
      await redisClient.lpush("judge:queue", JSON.stringify({ submissionId, ...payload }));
      return true;
    } catch {
      // Fallback
    }
  }
  return true;
}

export { redisClient };
