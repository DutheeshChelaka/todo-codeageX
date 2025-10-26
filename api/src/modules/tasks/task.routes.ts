import { Router } from 'express';
import { asyncHandler } from '../../common/http.js';
import { taskController } from './task.controller.js';

export const taskRoutes = Router();

taskRoutes.post('/', asyncHandler(taskController.create));
taskRoutes.get('/', asyncHandler(taskController.list));
taskRoutes.patch('/:id/complete', asyncHandler(taskController.complete));
