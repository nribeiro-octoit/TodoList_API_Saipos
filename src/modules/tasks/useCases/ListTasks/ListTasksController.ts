import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTasksUseCase } from "./ListTasksUseCase";

class ListTasksController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { assigned_to, description } = request.query;

        const listTasksuseCase = container.resolve(ListTasksUseCase);

        const tasks = await listTasksuseCase.execute({
            assigned_to: assigned_to as string,
            description: description as string,
        });

        return response.json(tasks);
    }
}

export { ListTasksController };
