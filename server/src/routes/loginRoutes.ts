import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    return next();
    return;
  }

  res.status(403);
  res.send("You are not part of the super secret club.");
}

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <h1>Logged in successfully!</h1>
        <a href="/logout">Log out</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <h1>You are not logged in</h1>
        <a href="/login">Log in</a>
      </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response): void => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response): void => {
  res.send(`
    <div>
      <h1>Welcome to the super secret club!!!</h1>
    </div>
  `);
});

export { router };
