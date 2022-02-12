import { Request, Response } from "express";
import { controller, get } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <h1>Log In</h1>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}
