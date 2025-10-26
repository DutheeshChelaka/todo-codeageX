import { pool } from '../../db/index.js';
import type { Task } from './task.types.js';

export const taskRepository = {
  async create(title: string, description: string): Promise<Task> {
    const { rows } = await pool.query(
      'INSERT INTO task (title, description) VALUES ($1,$2) RETURNING *',
      [title, description]
    );
    return rows[0];
  },

  async listRecentPending(limit: number): Promise<Task[]> {
    const { rows } = await pool.query(
      'SELECT * FROM task WHERE is_completed = FALSE ORDER BY created_at DESC LIMIT $1',
      [limit]
    );
    return rows;
  },

  async markDone(id: number): Promise<Task | null> {
    const { rows } = await pool.query(
      'UPDATE task SET is_completed = TRUE WHERE id = $1 RETURNING *',
      [id]
    );
    return rows[0] || null;
  }
};
