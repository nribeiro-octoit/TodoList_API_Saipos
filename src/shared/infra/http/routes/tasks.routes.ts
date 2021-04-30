import { Router } from "express";

import { ChangeStatusTaskController } from "@modules/tasks/useCases/changeStatusTask/ChangeStatusTaskController";
import { CreateTaskController } from "@modules/tasks/useCases/createTask/CreateTaskController";
import { ListTasksController } from "@modules/tasks/useCases/ListTasks/ListTasksController";
import { ReOpenTaskController } from "@modules/tasks/useCases/reOpenTask/ReOpenTaskController";

import { ensurePassword } from "../middlewares/ensurePassword";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const changeStatusTaskController = new ChangeStatusTaskController();
const listTasksController = new ListTasksController();
const reOpenTaskController = new ReOpenTaskController();

tasksRoutes.post("/", createTaskController.handle);
tasksRoutes.patch("/:id/:status", changeStatusTaskController.handle);
tasksRoutes.get("/", listTasksController.handle);
tasksRoutes.patch("/:id", ensurePassword, reOpenTaskController.handle);

export { tasksRoutes };
