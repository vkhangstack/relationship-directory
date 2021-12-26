import { Request, Response } from "express";
import infoModel from "../models/info.model";

const getInfo = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await infoModel.find();
    if (!data) {
      return res.send("Data wrong");
    }
    return res.send(data);
  } catch (error) {
    console.log("Errors have shows", error);
  }
};

const addInfo = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await new infoModel(req.body).save();
    if (!data) {
      return res.send("Data wrong");
    }
    return res.send(data);
  } catch (error) {
    console.log("Errors have shows", error);
  }
};

export { addInfo, getInfo };
