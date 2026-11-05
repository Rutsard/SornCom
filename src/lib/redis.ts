// ==============================================================================
// Redis Store: Queue, Rate Limiting, and Pub/Sub
// Configured via REDIS_URL with Resilient In-Memory Fallback
// ==============================================================================

import Redis from "ioredis";
import { EventEmitter } from "events";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";

export interface GradingJob {
  submissionId: string;
  taskId: string;
  sourceCode: string;
  userId: string;
  enqueuedAt: string;
}

let redisClient: Redis | null = null;
let isRedisAvailable = false;

// Global singletons for development mode across route reloads
const globalForRedis = globalThis as unknown as {
  memoryQueue: GradingJob[] | undefined;
  localJudgeBus: EventEmitter | undefined;
  memoryRateLimits: Map<string, { count: number; resetAt: number }> | undefined;
};

export const memoryQueue: GradingJob[] = globalForRedis.memoryQueue ?? [];
export const localJudgeBus: EventEmitter = globalForRedis.localJudgeBus ?? new EventEmitter();
localJudgeBus.setMaxListeners(100);

const memoryRateLimits =
  globalForRedis.memoryRateLimits ?? new Map<string, { count: number; resetAt: number }>();

if (process.env.NODE_ENV !== "production") {
  globalForRedis.memoryQueue = memoryQueue;
  globalForRedis.localJudgeBus = localJudgeBus;
  globalForRedis.memoryRateLimits = memoryRateLimits;
}

try {
  redisClient = new Redis(redisUrl, {
    maxRetriesPerRequest: 1,
    retryStrategy: () => null,
    connectTimeout: 2000,
    lazyConnect: true,
  });

  redisClient
    .connect()
    .then(() => {
      isRedisAvailable = true;
      console.log("⚡ Connected to Redis queue store at", redisUrl);
    })
    .catch(() => {
      isRedisAvailable = false;
    });
} catch (e) {
  isRedisAvailable = false;
}

/**
 * Check rate limit (programming.in.th anti-spam)
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
      // Fallback
    }
  }

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
 * Push grading job to Redis queue (judge:queue)
 */
export async function enqueueGradingJob(job: GradingJob): Promise<boolean> {
  const payloadStr = JSON.stringify(job);

  if (isRedisAvailable && redisClient) {
    try {
      await redisClient.lpush("judge:queue", payloadStr);
      await redisClient.publish(`submission:${job.submissionId}:status`, JSON.stringify({ status: "WAITING" }));
      return true;
    } catch (err) {
      // Fallback to memory
    }
  }

  // Memory queue fallback
  memoryQueue.push(job);
  localJudgeBus.emit("new_job", job);
  return true;
}

/**
 * Pull job from queue (used by grading worker)
 */
export async function dequeueGradingJob(timeoutSeconds = 2): Promise<GradingJob | null> {
  if (isRedisAvailable && redisClient) {
    try {
      const res = await redisClient.brpop("judge:queue", timeoutSeconds);
      if (res && res[1]) {
        return JSON.parse(res[1]) as GradingJob;
      }
    } catch (err) {
      // Fallback
    }
  }

  // Check memory queue
  if (memoryQueue.length > 0) {
    return memoryQueue.shift() || null;
  }

  return null;
}

/**
 * Publish real-time verdict update
 */
export async function publishVerdictUpdate(submissionId: string, payload: any) {
  localJudgeBus.emit(`submission:${submissionId}`, payload);

  if (isRedisAvailable && redisClient) {
    try {
      await redisClient.publish(`submission:${submissionId}:verdict`, JSON.stringify(payload));
    } catch {
      // Fallback
    }
  }
}

export { redisClient };
