import { deepEqual } from "node:assert";
import { test } from "node:test";
import calculator from "./Calculator";
import assert from "node:assert";

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

test("should calculate division expressions", () => {
  const result = calculator.evaluate("15/5");
  deepEqual(result, 3);
});

test("should return a number", () => {
  const result = calculator.evaluate("15");
  deepEqual(result, 15);
});

test("should throw an exception when the denominator in division is zero", () => {
  const result = calculator.evaluate("15/0");
  deepEqual(result, `You entered a faulty expression. Can't be divided by zero.`);  
});

test("should throw an exception when expression is not valid (invalid mathematical expression)", () => {
  const result = calculator.evaluate("15/banan");
  deepEqual(result, `You entered a faulty expression. Input must be valid numbers.`);  
});

test("should handle spaces in expression", () => {
  const result = calculator.evaluate("        15  +                                    10      ");
  deepEqual(result, 25);
});

test("should contain opperand", () => {
  const result = calculator.evaluate("15banan");
  deepEqual(result, `You entered a faulty expression. Needs to contain an opperand.`);
});

test("should throw an exception when entering white space(s) ", () => {
  const result = calculator.evaluate("     ");
  deepEqual(result, `You entered a faulty expression. Needs to contain an opperand.`);
});
