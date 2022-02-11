"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    res.send(`
    <div>
      <h1>Hello from express!</h1>
    </div>
  `);
});
router.get("/login", (req, res) => {
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
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email) {
        res.send(`
      <form method="POST">
        <h1>Logged In!</h1>
        <p>Email: ${email}</p>
      </form>
    `);
    }
    else {
        res.send("Error: You must provide an email.");
    }
});
