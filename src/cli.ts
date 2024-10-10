import exp from "node:constants";
import calculator from "./Calculator";

export const main = () => {
  const { stdin, stdout } = process;

  const PROMPT =
    "SALT CALCULATOR 🧮 | Please write an expression (e.g. 4 + 5):";

  stdout.write(PROMPT);
  stdin.resume();

  stdin.setEncoding("utf8");

  let result: number | string;

  stdin.on("data", (data) => {
    let expression = data.toString();
 
    expression = expression.replace(/[\r\n]/g, "");

    result = calculator.evaluate(expression);

    result =
      typeof result === "number"
        ? `The expression ${expression} equals ${result}.`
        : result;

    stdout.write(`\n${result}\n`);
    stdout.write(`\n${PROMPT}`);
  });

  process.on("SIGINT", () => {
    stdout.write("\n\nBye!\n");
    process.exit();
  });
};
