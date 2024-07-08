// deno-lint-ignore-file no-explicit-any
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Status,
  CustomRequest,
  CustomResponseWithMiddleware,
  NextFunction,
} from "../deps.ts";

export const errorHandler = (
  err: Error,
  _req: CustomRequest<any>,
  res: CustomResponseWithMiddleware,
  _next: NextFunction
) => {
  console.error(err.stack);
  return res
    .setStatus(Status.InternalServerError)
    .json({ message: "Internal Server Error" });
};
