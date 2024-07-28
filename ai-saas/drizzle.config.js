import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL,
  },

})
