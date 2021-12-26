import { Router } from "express";
import { addInfo, getInfo } from "../controllers/info.controller";

const router = Router();

router.post("/", addInfo);
router.get("/", getInfo);

export { router };
