import { validateInputString } from "./validate-input-string";

class Calculator {
  evaluate(numberString: string) {
    const regex = /[+\-*/]/;
    if(!regex.test(numberString)) throw new Error ("needs to contain opperand");
    
    if(!validateInputString(numberString))throw new Error("input must be valid numbers");
      
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
    if (numberString.includes("/")) {
      const numberArray = numberString.split("/");
      if (Number(numberArray[1]) === 0) throw new Error("can't be divided by zero");
      return Number(numberArray[0]) / Number(numberArray[1]);
    }
    return "Wrong input";
  }
}

export default new Calculator();
