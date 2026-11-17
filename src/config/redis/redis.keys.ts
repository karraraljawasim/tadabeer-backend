const REDIS_KEY = {
  auth: {
    blacklist: (tokenHash: string) =>
      `tadabeer:auth:blacklist:${tokenHash}`,
  },

  rateLimiter: (userId?: string, ip?: string) =>
    `tadabeer: rateLimiter: ${userId || ip || "unknown"}`,

  categories: (userId: string) => `tadabeer: categories: ${userId}`,

  report: {
    summary: (userId: string) => `tadabeer: report: summary: ${userId}`,
  },

  expenses: (userId: string) => `tadabeer: expenses: ${userId}`,
} as const;

export default REDIS_KEY;
