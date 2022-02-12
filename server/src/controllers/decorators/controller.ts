import "reflect-metadata";

import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    //! This `for..in` loop will not work because our compilation target
    //! is ES2015+. Luckily we can still loop over the class methods
    //! using `Object.getOwnPropertyNames().`
    // for (let key in target.prototype) {
    for (let key of Object.getOwnPropertyNames(target.prototype)) {
      const routeHandler = target.prototype[key];
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
