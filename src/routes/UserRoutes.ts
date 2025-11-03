import { Router } from "express";
import { getUsers } from "../controllers/UserControllers";

const UserRouter = Router();

UserRouter.get("/", getUsers);

export default UserRouter;
