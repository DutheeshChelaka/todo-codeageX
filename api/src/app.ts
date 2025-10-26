import express from 'express';
import cors from 'cors';
import { taskRoutes } from './modules/tasks/task.routes.js';
import { migrate } from './db/index.js';

export const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ ok: true }));
app.use('/api/tasks', taskRoutes);

export async function init() { await migrate(); }
