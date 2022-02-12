import { Request, Response, NextFunction } from "express";
import { controller, get, post, bodyValidator, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("You are not part of the super secret club.");
}

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <h1>Logged in successfully!</h1>
          <a href="/auth/logout">Log out</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <h1>You are not logged in</h1>
          <a href="/auth/login">Log in</a>
        </div>
      `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send(`
      <div>
        <h1>Welcome to the super secret club!!!</h1>
      </div>
    `);
  }
}
