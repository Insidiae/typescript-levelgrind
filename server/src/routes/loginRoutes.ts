import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.send(`
    <div>
      <h1>Hello from express!</h1>
    </div>
  `);
});

router.get("/login", (req: Request, res: Response): void => {
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
});

router.post("/login", (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (email) {
    res.send(`
      <form method="POST">
        <h1>Logged In!</h1>
        <p>Email: ${email}</p>
      </form>
    `);
  } else {
    res.send("Error: You must provide an email.");
  }
});

export { router };
