import "reflect-metadata";
import { RequestHandler } from "express";

import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const patch = routeBinder(Methods.patch);
export const del = routeBinder(Methods.del);
