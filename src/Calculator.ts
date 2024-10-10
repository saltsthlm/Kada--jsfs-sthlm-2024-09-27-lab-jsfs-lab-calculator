import { isNumber } from "./helper-functions";
import { validateInputString } from "./validate-input-string";

class Calculator {
  evaluate(numberString: string) {
    try {
      if (isNumber(numberString)) return Number(numberString);

      validateInputString(numberString);

      if (numberString.includes("+")) {
        const numberArray = numberString.split("+");
        return Number(numberArray[0]) + Number(numberArray[1]);
      }
      if (numberString.includes("-")) {
        const numberArray = numberString.split("-");
        return Number(numberArray[0]) - Number(numberArray[1]);
      }
      if (numberString.includes("*")) {
        const numberArray = numberString.split("*");
        return Number(numberArray[0]) * Number(numberArray[1]);
      }

      const numberArray = numberString.split("/");
      if (Number(numberArray[1]) === 0)
        throw new Error("Can't be divided by zero.");
      return Number(numberArray[0]) / Number(numberArray[1]);
    } catch (error) {
      const faultyExpression = "You entered a faulty expression.";

      if (error instanceof Error) {
        return `${faultyExpression} ${error.message}`;
      } else {
        return faultyExpression;
      }
    }
  }
}

export default new Calculator();
