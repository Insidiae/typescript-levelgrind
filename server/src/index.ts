import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["supersecretkey"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(1337, () => {
  console.log("Listening on port 1337...");
});
