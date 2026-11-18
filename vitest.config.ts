import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["tests/setup.ts"],
    isolate: true,
    testTimeout: 30000,
    hookTimeout: 60000,
  },
});
