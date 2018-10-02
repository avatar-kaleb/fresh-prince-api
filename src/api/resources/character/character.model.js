import mongoose, { Mongoose } from "mongoose";

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Character must have a name"]
  },

  fromLocation: {
    type: String
  },

  pictureUrl: {
    type: String
  },

  relationshipToMain: {
    type: String,
    required: [true, "Character must have relationship to main character."]
  },

  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "show"
  }
});

export const Character = mongoose.model("character", characterSchema);
