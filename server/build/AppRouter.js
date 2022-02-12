"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = require("express");
class AppRouter {
    static getInstance() {
        if (!AppRouter._instance) {
            AppRouter._instance = (0, express_1.Router)();
        }
        return AppRouter._instance;
    }
}
exports.AppRouter = AppRouter;
