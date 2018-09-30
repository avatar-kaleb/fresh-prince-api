import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Character must have a name"]
  },

  relationshipToWill: {
    type: String,
    required: [true, "Character must have relationship to Will."]
  },

  quotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "quote"
    }
  ]
});

export const Character = mongoose.model("character", characterSchema);
