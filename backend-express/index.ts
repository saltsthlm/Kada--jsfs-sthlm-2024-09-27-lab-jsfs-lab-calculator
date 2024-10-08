import express, { Request, Response } from "express";
import calculator from "../src/Calculator";

const app = express();

app.get('/', (req: Request, res: Response) => {
  const userQuery = req.query.expression as string;
  const result = calculator.evaluate(userQuery);
  res.json({ result });
});

app.listen(8080, () => {
  console.log(`Server is up and running on port 8080`);
});