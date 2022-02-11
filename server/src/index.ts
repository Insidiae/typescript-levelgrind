import express, { Request, Response } from "express";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["supersecretkey"] }));
app.use(router);

app.listen(1337, () => {
  console.log("Listening on port 1337...");
});
