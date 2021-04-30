import { inject, injectable } from "tsyringe";

import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class ReOpenTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private taskRepository: ITaskRepository
    ) {}

    async execute({ id }: IRequest): Promise<Task> {
        const task = await this.taskRepository.findById(id);

        if (!task) {
            throw new AppError("Task does not exists!");
        }

        if (task.reOpen >= 2) {
            throw new AppError("You can't open this task again!");
        }

        const taskReOpen = await this.taskRepository.changeStatus(
            id,
            1,
            task.reOpen
        );

        return taskReOpen;
    }
}

export { ReOpenTaskUseCase };
