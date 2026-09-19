import { beforeAll, beforeEach, afterAll, vi } from "vitest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongo: MongoMemoryServer;

beforeAll(async () => {
  console.log = vi.fn();
  console.info = vi.fn();
  console.warn = vi.fn();

  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri());

  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-06-15T00:00:00.000Z"));
});

afterAll(async () => {
  vi.useRealTimers();

  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (mongo) await mongo.stop();
});

beforeEach(async () => {
  await Promise.all(
    Object.values(mongoose.connection.collections).map((c) => c.deleteMany({})),
  );
});
