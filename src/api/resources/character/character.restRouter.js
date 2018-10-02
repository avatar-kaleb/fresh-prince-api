import express from "express";
import characterController from "./character.controller";

export const characterRouter = express.Router();

characterRouter.param("id", characterController.findByParam);

characterRouter
  .route("/")
  .get(characterController.getAll)
  .post(characterController.createOne);

characterRouter
  .route("/:id")
  .get(characterController.getOne)
  .put(characterController.updateOne)
  .delete(characterController.deleteOne);
