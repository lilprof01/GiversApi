import { json, Router, urlencoded } from "express";
import UserRouter from "./UserRoutes";
import { ItemRouter } from "./ItemRoutes";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    message:
      "Welcome to Givers API\n\nPlease go to /docs for swagger documentation!",
  });
});

router.use("/users", UserRouter);
router.use("/items", ItemRouter);

export { router as routes };
