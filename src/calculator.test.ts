import { deepEqual } from "node:assert";
import { test } from "node:test";
import calculator from "./Calculator";

test("should calculate add expressions", () => {
  const result = calculator.evaluate("4+5");
  deepEqual(result, 9);
});

test("should calculate subtract expressions", () => {
  const result = calculator.evaluate("5-4");
  deepEqual(result, 1);
});

test("should calculate multiply expressions", () => {
  const result = calculator.evaluate("4*5");
  deepEqual(result, 20);
});

test.skip("should calculate division expressions", () => {
  const result = calculator.evaluate("15/5");
  deepEqual(result, 3);
});

test.skip("should throw an exception when the denominator in division is zero", () => {
  const result = calculator.evaluate("15/0");
  deepEqual(result, "cant divide by zero");
});

test.skip("should throw an exception when expression is not valid (invalid mathematical expression)", () => {
  const result = calculator.evaluate("15/banan");
  deepEqual(result, "input must be valid numbers");
});

test.skip("should handle spaces in expression", () => {
  const result = calculator.evaluate("15  +   10");
  deepEqual(result, 25);
});
