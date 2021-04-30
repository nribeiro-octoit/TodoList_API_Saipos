import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChangeStatusTaskUseCase } from "./ChangeStatusTaskUseCase";

class ChangeStatusTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, status } = request.params;

        const numStatus = Number(status);

        const changeStatusTaskUseCase = container.resolve(
            ChangeStatusTaskUseCase
        );

        const task = await changeStatusTaskUseCase.execute({
            id: id as string,
            status: numStatus,
        });

        return response.status(201).json({ task });
    }
}

export { ChangeStatusTaskController };
