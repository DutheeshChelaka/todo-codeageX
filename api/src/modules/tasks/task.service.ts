import { taskRepository } from './task.repository.js';

export const taskService = {
  create: (title: string, description: string) => taskRepository.create(title, description),
  listRecentPending: (limit = 5) => taskRepository.listRecentPending(limit),
  markDone: (id: number) => taskRepository.markDone(id)
};
