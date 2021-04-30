"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(message, statuscode) {
        if (statuscode === void 0) { statuscode = 400; }
        this.message = message;
        this.statusCode = statuscode;
    }
    return AppError;
}());
exports.AppError = AppError;
