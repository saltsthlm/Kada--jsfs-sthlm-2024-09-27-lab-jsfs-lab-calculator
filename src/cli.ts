import calculator from "./Calculator";

export const main = () => {
  const { stdin, stdout } = process;

  const PROMPT = "Write something 👇";

  stdout.write(PROMPT);
  stdin.resume();

  stdin.setEncoding("utf8");

  let result: number | string;

  stdin.on("data", (data) => {
    result = calculator.evaluate(data.toString());
    stdout.write(`\nResult is: ${result}`);
    stdout.write(`\n${PROMPT}`);
  });

  process.on("SIGINT", () => {
    stdout.write("\n\nBye!\n");
    process.exit();
  });
};
