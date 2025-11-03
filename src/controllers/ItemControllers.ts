import type { RequestHandler } from "express";
import { db } from "../config/firebase";
import { helper } from "../helper";
import { BadRequestError, NotFoundError } from "../types/error";

const { requireAuth } = helper;

export const getItems: RequestHandler = async (req, res, next) => {
  const user = requireAuth(req);
  if (!user) throw new BadRequestError("User not authenticated");

  try {
    const q = db
      .collection("give")
      .where("itemStatus", "==", "available")
      .orderBy("createdAt", "desc");

    if (!q) throw new NotFoundError("No items found");

    res.status(200).json({
      status: "success",
      message: "Items fetched successfuly",
    });
  } catch (error) {
    return next(error);
  }
};
