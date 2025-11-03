import { Router } from "express";
import { getItems } from "../controllers/ItemControllers";

export const ItemRouter = Router();

ItemRouter.get("/", getItems);
