import { UnauthorizedRequestError } from "./types/error";
import type { Request } from "express";

export const helper = {
  requireAuth: (req: Request) => {
    if (!req.account) {
      throw new UnauthorizedRequestError("Authentication required");
    }
    return req.account;
  },
};
