import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReOpenTaskUseCase } from "./ReOpenTaskUseCase";

class ReOpenTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const reOpenTaskUseCase = container.resolve(ReOpenTaskUseCase);

        const task = await reOpenTaskUseCase.execute({ id });

        return response.json({ task });
    }
}

export { ReOpenTaskController };
