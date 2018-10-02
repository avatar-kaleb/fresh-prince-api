import express from "express";
import quoteController from "./quote.controller";

export const quoteRouter = express.Router();

quoteRouter.param("id", quoteController.findByParam);

quoteRouter
  .route("/")
  .get(quoteController.getAll)
  .post(quoteController.createOne);

quoteRouter
  .route("/:id")
  .get(quoteController.getOne)
  .put(quoteController.updateOne)
  .delete(quoteController.deleteOne);
