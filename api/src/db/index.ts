import { Pool } from 'pg';
import { env } from '../config/env.js';

export const pool = new Pool({ connectionString: env.databaseUrl });

export async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS task (
      id SERIAL PRIMARY KEY,
      title VARCHAR(120) NOT NULL,
      description TEXT NOT NULL,
      is_completed BOOLEAN NOT NULL DEFAULT FALSE,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_task_created_at ON task (created_at DESC);
  `);
}
