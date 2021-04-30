import { container } from "tsyringe";

import { TasksRepository } from "@modules/tasks/infra/typeorm/repositories/TasksRepository";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

container.registerSingleton<ITaskRepository>(
    "TasksRepository",
    TasksRepository
);
