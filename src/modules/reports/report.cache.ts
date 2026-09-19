import { initializeRedisClient } from "../../config/redis/redis.client.js";
import REDIS_KEY from "../../config/redis/redis.keys.js";

const client = await initializeRedisClient();

export async function setCacheSummary(
  userId: string,
  summary: any,
  ttlInSeconds = 3600,
) {
  const key = REDIS_KEY.report.summary(userId);

  await client.set(key, JSON.stringify(summary), { EX: ttlInSeconds });
}

export async function getCachedSummary(userId: string) {
  const key = REDIS_KEY.report.summary(userId);
  const data = await client.get(key);

  if (data === null) return null;
  return JSON.parse(data);
}

export async function clearCachedSummary(userId: string) {
  const key = REDIS_KEY.report.summary(userId);

  await client.del(key);
}
