import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./db/schema.ts",
    out: "./db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_SUPABASE_CONNECTION_STRING as string
    }
});