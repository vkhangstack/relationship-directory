import express, { Request, Response } from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("tiny"));

app.use("/api/test", [], (req: Request, res: Response) => {
  return res.send("Hello successful!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
