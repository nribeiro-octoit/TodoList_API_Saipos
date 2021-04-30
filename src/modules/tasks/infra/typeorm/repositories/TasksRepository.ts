import { getRepository, Repository } from "typeorm";

import { ICreateTaskDTO } from "@modules/tasks/dtos/ICreateTaskDTO";
import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITaskRepository } from "@modules/tasks/repositories/ITaskRepository";

class TasksRepository implements ITaskRepository {
    private repository: Repository<Task>;

    constructor() {
        this.repository = getRepository(Task);
    }

    async findAll(assigned_to: string, description: string): Promise<Task[]> {
        const tasksQuery = this.repository.createQueryBuilder("c");

        if (assigned_to && description) {
            tasksQuery.where("assigned_to like :assigned_to", {
                assigned_to: `%${assigned_to}%`,
            });
            tasksQuery.andWhere("description like :description", {
                description: `%${description}%`,
            });
        }

        if (assigned_to) {
            tasksQuery.where("assigned_to = :assigned_to", { assigned_to });
        }

        if (description) {
            tasksQuery.where("description = :description", { description });
        }

        const tasks = await tasksQuery.getMany();

        return tasks;
    }

    async findById(id: string): Promise<Task> {
        const task = await this.repository.findOne(id);

        return task;
    }

    async changeStatus(
        id: string,
        status: number,
        reOpen?: number
    ): Promise<Task> {
        if (reOpen) {
            const task = await this.repository.save({
                id,
                status,
                reOpen,
            });
            return task;
        }

        const task = await this.repository.save({
            id,
            status,
        });

        return task;
    }

    async create({
        description,
        assigned_to,
        email,
        reOpen,
    }: ICreateTaskDTO): Promise<Task> {
        const task = this.repository.create({
            description,
            assigned_to,
            email,
            reOpen,
        });

        const savedTask = await this.repository.save(task);

        return savedTask;
    }
}

export { TasksRepository };
