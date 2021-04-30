import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        console.log(request.body);
        const { description, assigned_to, email, reOpen } = request.body;

        const createTaskUseCase = container.resolve(CreateTaskUseCase);

        const task = await createTaskUseCase.execute({
            description,
            assigned_to,
            email,
            reOpen,
        });

        return response.status(201).json({ task });
    }
}

export { CreateTaskController };
