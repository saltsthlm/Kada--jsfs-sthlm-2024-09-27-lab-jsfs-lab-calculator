import express, { Request, Response, NextFunction } from "express";
import calculator from "../src/Calculator";


export const app = express();

function acceptOnlyGetReq(req: Request, res:Response, next:NextFunction) {
    if(req.method !== 'GET') {
        res.status(405).json("405 Method Not Allowed");
    }
    next();
}
app.use(acceptOnlyGetReq);

app.get('/', (req: Request, res: Response) => {
  const userQuery = req.query.expression as string;
  const result = calculator.evaluate(userQuery);
  res.json({ result });
});