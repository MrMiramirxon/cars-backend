/** @format */

import express from "express";
import { bmw2024 } from "../db/cars.mjs";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send(200);
});
export const handler2 = ServerlessHttp(app);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
