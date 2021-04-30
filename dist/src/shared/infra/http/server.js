"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var AppError_1 = require("@shared/errors/AppError");
var typeorm_1 = __importDefault(require("@shared/infra/typeorm"));
var routes_1 = require("./routes");
require("@shared/container");
typeorm_1.default();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response
            .status(err.statusCode)
            .json({ message: err.message });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - " + err.message,
    });
});
app.listen(3333, function () { return console.log("Server is running!"); });
