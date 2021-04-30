import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

export async function ensurePassword(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const passwordHeader = request.headers.password;

        if (!passwordHeader || passwordHeader !== "TrabalheNaSaipos") {
            throw new AppError("Please pass password to continue!");
        }
    } catch (error) {
        throw new AppError("Please pass password to continue!");
    }

    next();
}
