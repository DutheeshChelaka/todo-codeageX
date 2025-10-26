import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().min(1)
});
export type CreateTaskDTO = z.infer<typeof createTaskSchema>;
