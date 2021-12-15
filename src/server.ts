import express, { Request, Response } from "express";
import morgan from "morgan";
import { connecting } from "./config/database";
import * as dotenv from "dotenv";
dotenv.config();
connecting();

const app = express();
app.use(morgan("tiny"));

app.use("/api/test", [], (req: Request, res: Response) => {
  return res.send("Hello successful!");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
