"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        return next();
        return;
    }
    res.status(403);
    res.send("You are not part of the super secret club.");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
      <div>
        <h1>Logged in successfully!</h1>
        <a href="/logout">Log out</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <h1>You are not logged in</h1>
        <a href="/login">Log in</a>
      </div>
    `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send(`
    <div>
      <h1>Welcome to the super secret club!!!</h1>
    </div>
  `);
});
