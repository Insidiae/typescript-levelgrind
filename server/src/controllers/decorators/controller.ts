import "reflect-metadata";
import express from "express";

export const router = express.Router();

export function controller(routePrefix: string) {
  return function (target: Function) {
    //! This `for..in` loop will not work because our compilation target
    //! is ES2015+. Luckily we can still loop over the class methods
    //! using `Object.getOwnPropertyNames().`
    // for (let key in target.prototype) {
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
