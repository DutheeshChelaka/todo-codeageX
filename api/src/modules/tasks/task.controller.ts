import { Request, Response } from 'express';
import { createTaskSchema } from '../../common/validation.js';
import { taskService } from './task.service.js';

export const taskController = {
  create: async (req: Request, res: Response) => {
    const parsed = createTaskSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ errors: parsed.error.flatten() });
    const task = await taskService.create(parsed.data.title, parsed.data.description);
    res.status(201).json(task);
  },
  list: async (_: Request, res: Response) => {
    const tasks = await taskService.listRecentPending(5);
    res.json(tasks);
  },
  complete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ message: 'Invalid id' });
    const updated = await taskService.markDone(id);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  }
};
