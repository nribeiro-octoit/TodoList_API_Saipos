import { ICreateTaskDTO } from "@modules/tasks/dtos/ICreateTaskDTO";

import { Task } from "../infra/typeorm/entities/Task";

interface ITaskRepository {
    create(data: ICreateTaskDTO): Promise<Task>;
    findById(id: string): Promise<Task>;
    changeStatus(id: string, status: number, reOpen?: number): Promise<Task>;
    findAll(assigned_to: string, description: string): Promise<Task[]>;
}

export { ITaskRepository };
