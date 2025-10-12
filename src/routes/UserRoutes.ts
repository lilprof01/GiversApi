import { Router } from "express";
import { getUsers } from "../controllers/UserControllers";

const router = Router();

router.get("/", getUsers);

export default router;
