"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootController = void 0;
const decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("You are not part of the super secret club.");
}
let RootController = class RootController {
    getRoot(req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.send(`
        <div>
          <h1>Logged in successfully!</h1>
          <a href="/auth/logout">Log out</a>
        </div>
      `);
        }
        else {
            res.send(`
        <div>
          <h1>You are not logged in</h1>
          <a href="/auth/login">Log in</a>
        </div>
      `);
        }
    }
    getProtected(req, res) {
        res.send(`
      <div>
        <h1>Welcome to the super secret club!!!</h1>
      </div>
    `);
    }
};
__decorate([
    (0, decorators_1.get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RootController.prototype, "getRoot", null);
__decorate([
    (0, decorators_1.get)("/protected"),
    (0, decorators_1.use)(requireAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RootController.prototype, "getProtected", null);
RootController = __decorate([
    (0, decorators_1.controller)("")
], RootController);
exports.RootController = RootController;
