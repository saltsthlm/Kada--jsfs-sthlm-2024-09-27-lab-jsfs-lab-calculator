import { deepEqual } from "node:assert";
import { ok, equal } from "node:assert/strict";
import { test } from "node:test";
import greeter from "./greeter";

test ("greeter", () => {
    const greet = greeter.hello;
    deepEqual(greet, "Hello salt!");
});