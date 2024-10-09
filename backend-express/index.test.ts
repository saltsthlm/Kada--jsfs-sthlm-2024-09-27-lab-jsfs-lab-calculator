import test from "node:test";
import request from "supertest";
import { app } from "../src/api";
import { deepEqual } from "node:assert";

test("should reject POST request with status 405", async () => {
  const res = await request(app).post("?expression=4%2B4");
  deepEqual(res.status, 405);
});

test("should return 400 bad request when the error is defined as Invalid expressions", async () => {
  const res = await request(app).get(
    "?expression=bananärinteettvalidexpression",
  );
  deepEqual(res.status, 400);
});

test("should respond to bad requests with error message", async () => {
  const res = await request(app).get(
    "/?expression=trettonhundratrettiosju1337",
  );
  deepEqual(res.status, 400);
  deepEqual(res.body.message, "input must be valid numbers");
});

test("should respond with bad request when query parameters are missing", async () => {
  const res = await request(app).get("/");
  deepEqual(res.status, 400);
  deepEqual(res.body.message, "Missing query parameter: expression");
});
test("should respond to valid requests with 200", async () => {
  const res = await request(app).get("?expression=4%2B4");
  deepEqual(res.status, 200);
});

test("should respond with result in body", async () => {
  const res = await request(app).get("?expression=4%2B4");
  const data = res.body;
  deepEqual(data.result, 8);
});
