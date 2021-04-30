"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var TasksRepository_1 = require("@modules/tasks/infra/typeorm/repositories/TasksRepository");
tsyringe_1.container.registerSingleton("TasksRepository", TasksRepository_1.TasksRepository);
