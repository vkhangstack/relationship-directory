import express, { Request, Response } from "express";
import morgan from "morgan";
import { connecting, disconnect } from "./config/database";
import * as dotenv from "dotenv";
import { router } from "./routes/router";

dotenv.config();
connecting();

const app = express();
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/test", [], (req: Request, res: Response) => {
  return res.send("Hello successful!");
});
app.use("/api/contacts", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
