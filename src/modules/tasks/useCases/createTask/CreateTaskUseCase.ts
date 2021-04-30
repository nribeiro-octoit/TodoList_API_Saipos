import { inject, injectable } from "tsyringe";

import { ICreateTaskDTO } from "@modules/tasks/dtos/ICreateTaskDTO";
import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

@injectable()
class CreateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private taskRepository: ITaskRepository
    ) {}

    async execute({
        description,
        assigned_to,
        email,
        reOpen,
    }: ICreateTaskDTO): Promise<Task> {
        const task = await this.taskRepository.create({
            description,
            assigned_to,
            email,
            reOpen,
        });

        return task;
    }
}

export { CreateTaskUseCase };
