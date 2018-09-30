import express from "express";
import { userRouter } from "./resources/user";
import { characterRouter } from "./resources/character";

import { characterRouter } from "./resources/character";
import { apiErrorHandler } from "./modules/errorHandler";

export const restRouter = express.Router();

restRouter.use("/user", userRouter);
restRouter.use("/character", characterRouter);
restRouter.use(apiErrorHandler);
