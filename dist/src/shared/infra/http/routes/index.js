"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var tasks_routes_1 = require("./tasks.routes");
var router = express_1.Router();
exports.router = router;
router.use("/tasks", tasks_routes_1.tasksRoutes);
