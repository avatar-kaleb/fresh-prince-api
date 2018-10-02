import express from "express";
import { userRouter } from "./resources/user";
import { characterRouter } from "./resources/character";
import { quoteRouter } from "./resources/quote";
import { showRouter } from "./resources/show";

import { apiErrorHandler } from "./modules/errorHandler";

export const restRouter = express.Router();

restRouter.use("/user", userRouter);
restRouter.use("/character", characterRouter);
restRouter.use("/quote", quoteRouter);
restRouter.use("/show", showRouter);
restRouter.use(apiErrorHandler);
