"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
function controller(routePrefix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        //! This `for..in` loop will not work because our compilation target
        //! is ES2015+. Luckily we can still loop over the class methods
        //! using `Object.getOwnPropertyNames().`
        // for (let key in target.prototype) {
        for (let key of Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[key];
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            if (path) {
                router[method](`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
