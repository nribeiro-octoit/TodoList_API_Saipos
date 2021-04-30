import { inject, injectable } from "tsyringe";

import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

interface IRequest {
    assigned_to: string;
    description: string;
}

@injectable()
class ListTasksUseCase {
    constructor(
        @inject("TasksRepository")
        private taskRepository: ITaskRepository
    ) {}

    async execute({ assigned_to, description }: IRequest): Promise<Task[]> {
        const tasks = await this.taskRepository.findAll(
            assigned_to,
            description
        );

        return tasks;
    }
}

export { ListTasksUseCase };
