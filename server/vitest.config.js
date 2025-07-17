// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node", // ou 'happy-dom' pour frontend
    globals: true, // pour utiliser `describe`/`test` sans import
  },
});
