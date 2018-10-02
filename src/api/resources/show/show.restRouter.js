import express from "express";
import showController from "./show.controller";

export const showRouter = express.Router();

showRouter.param("id", showController.findByParam);

showRouter
  .route("/")
  .get(showController.getAll)
  .post(showController.createOne);

showRouter
  .route("/:id")
  .get(showController.getOne)
  .put(showController.updateOne)
  .delete(showController.deleteOne);
