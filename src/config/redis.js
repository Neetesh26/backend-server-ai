import Redis from "ioredis";

const redis = new Redis(
  process.env.REDIS_URL,
  {
    maxRetriesPerRequest: null
  }
);

redis.on("error", (err) => {
  console.log("[REDIS CLIENT WARNING] Offline:", err.message);
});

export default redis;