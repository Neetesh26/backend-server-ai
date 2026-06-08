import Redis from "ioredis";

const redis = new Redis(
  process.env.REDIS_URL || "redis://default:gQAAAAAAAjG8AAIgcDI0MDZlODE4M2RiNjU0MmUyOTllZDA4MTgyZmRhOGNhMw@certain-yeti-143804.upstash.io:6379",
  {
    maxRetriesPerRequest: null
  }
);

redis.on("connect", () => {
  console.log("[REDIS CLIENT CONNECTED]");
});

redis.on("error", (err) => {
  console.log("[REDIS CLIENT WARNING] Offline:", err.message);
});

export default redis;