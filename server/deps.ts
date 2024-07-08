/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

export {
  opine,
  json,
  urlencoded,
  Router,
} from "https://deno.land/x/opine@2.3.4/mod.ts";
import {
  OpineRequest,
  OpineResponse,
  NextFunction,
} from "https://deno.land/x/opine@2.3.4/src/types.ts";
export type { OpineRequest, OpineResponse, NextFunction };

export {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.148.0/http/http_status.ts";
export { contentType } from "https://deno.land/std@0.153.0/media_types/mod.ts";

export { opineCors as cors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
export { default as morgan } from "npm:morgan";
export * as djwt from "https://deno.land/x/djwt@v3.0.2/mod.ts";
export type { Payload } from "https://deno.land/x/djwt@v3.0.2/mod.ts";
import { Payload } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

export { default as io } from "npm:socket.io-client";

export {
  MongoClient,
  ObjectId,
} from "https://deno.land/x/mongo@v0.32.0/mod.ts";
export type {
  Document,
  Database,
} from "https://deno.land/x/mongo@v0.32.0/mod.ts";
export { default as knex } from "npm:knex";

export { default as axios } from "npm:axios";

export * as Colors from "https://deno.land/std@0.154.0/fmt/colors.ts";
export { parsePhoneNumber } from "npm:awesome-phonenumber";

// @deno-types="npm:@types/crypto-js@4.2.2"
export { default as CryptoJS } from "npm:crypto-js@4.2.0";
export { default as base64 } from "npm:base-64";
export * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import * as bcrypt_worker from "https://deno.land/x/bcrypt@v0.4.1/src/worker.ts";

export { v4 as uuidv4 } from "jsr:@std/uuid";

export interface User extends Payload {
  id: string;
  username: string;
  role: string[];
  jti: string;
}

export interface CustomRequest<Body> extends OpineRequest {
  token: string;
  user: User;
  body: Body;
}

export interface CustomResponse<Resp> {
  statusCode: number;
  header?: { [key: string]: string };
  response: Resp;
}

export interface CustomResponseWithMiddleware extends OpineResponse {
  // deno-lint-ignore no-explicit-any
  encrypt: (data: object) => any;
}

export interface ErrorResponse {
  message?: string;
  error?: string;
}

export interface IOnlyMessageResponse extends ErrorResponse {}
