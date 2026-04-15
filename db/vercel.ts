import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

let db: ReturnType<typeof drizzle> | null = null;
let pool: pg.Pool | null = null;

export function getDb() {
  if (!db) {
    if (!process.env.POSTGRES_URL) {
      throw new Error("POSTGRES_URL must be set.");
    }
    pool = new pg.Pool({
      connectionString: process.env.POSTGRES_URL,
      max: 1,
    });
    db = drizzle(pool);
  }
  return db;
}
