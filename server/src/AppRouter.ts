import { Router } from "express";

export class AppRouter {
  private static _instance: Router;

  static getInstance(): Router {
    if (!AppRouter._instance) {
      AppRouter._instance = Router();
    }

    return AppRouter._instance;
  }
}
