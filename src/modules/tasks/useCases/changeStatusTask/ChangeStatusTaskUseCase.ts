import { inject, injectable } from "tsyringe";

import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
    status: number;
}

@injectable()
class ChangeStatusTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private taskRepository: ITaskRepository
    ) {}

    async execute({ id, status }: IRequest): Promise<Task> {
        const task = await this.taskRepository.findById(id);

        if (!task) {
            throw new AppError("Não foi possível encontrar a task!");
        }

        if (status > 2) {
            throw new AppError("Status não existe!");
        }

        const changedTask = await this.taskRepository.changeStatus(id, status);

        return changedTask;
    }
}

export { ChangeStatusTaskUseCase };
