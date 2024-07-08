// deno-lint-ignore-file no-explicit-any
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Status,
  CustomRequest,
  CustomResponseWithMiddleware,
  NextFunction,
} from "../deps.ts";

import { jwtVerify } from "../jwt.ts";

const use_token = async (
  req: CustomRequest<any>,
  res: CustomResponseWithMiddleware,
  next: NextFunction
) => {
  req["token"] =
    req.headers.get("authorization") ??
    req.headers.get("token") ??
    req.query?.authorization ??
    req.query?.token;
  if (!req["token"]) {
    return res.setStatus(Status.Forbidden).encrypt({
      message: "token is required!",
    });
  }
  try {
    req["user"] = await jwtVerify(req, req["token"]);
  } catch (error) {
    return res.setStatus(Status.Unauthorized).send(error.message);
  }
  return next();
};

export default use_token;
