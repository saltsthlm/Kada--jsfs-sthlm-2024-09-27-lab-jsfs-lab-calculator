import express, { Request, Response, NextFunction } from "express";
import calculator from "../src/Calculator";

export const app = express();

function acceptOnlyGetReq(req: Request, res: Response, next: NextFunction) {
  if (req.method !== "GET") {
    res.status(405).json("405 Method Not Allowed");
    return;
  }
  next();
}
app.use(acceptOnlyGetReq);

app.get("/", (req: Request, res: Response) => {
  try {
    if (!req.query.expression) {
      res.status(400).json({ message: "Missing query parameter: expression" });
      return;
    }

    const userQuery = req.query.expression as string;
    const result = calculator.evaluate(userQuery);

    res.json({ result });
    return;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "input must be valid numbers") {
        res.status(400).json({ message: error.message });
        return;
      } else {
        res.status(500).json("500 ERROR_INTERNAL_SERVER_ERROR");
        return;
      }
    }
    res.status(500).json("500 ERROR_INTERNAL_SERVER_ERROR");
    return;
  }
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "404 ERROR_PAGE_NOT_FOUND",
  });
});
