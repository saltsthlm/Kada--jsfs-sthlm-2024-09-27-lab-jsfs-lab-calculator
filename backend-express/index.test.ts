import test from "node:test";
import request from "supertest";
import { app } from "../src/api";
import { deepEqual } from "node:assert";


test("should reject POST request with status 405", async ()=> {
    const res = await request(app).post("?expression=4%2B4");
    deepEqual(res.status, 405);
});

test.skip("should return 500 on unknown internal error 500", ()=> {

});

test.skip("should return 400 bad request when the error is defined as Invalid expressions", ()=> {

});

test.skip("should respond to bad requests with error message", ()=> {

});

test.skip("should respond with bad request when query parameters are missing", ()=> {

});

test.skip("should respond to valid requests with 200", ()=> {

});

test.skip("should respond with result in body", ()=> {

});