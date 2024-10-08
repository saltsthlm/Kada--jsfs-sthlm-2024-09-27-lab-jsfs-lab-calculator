class Calculator {
  evaluate(numberString: string) {
    if (numberString.includes("+")) {
      const numberArray = numberString.split("+");
      return Number(numberArray[0]) + Number(numberArray[1]);
    }
    return "Wrong input";
  }
}

export default new Calculator();
