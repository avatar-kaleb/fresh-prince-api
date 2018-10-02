import mongoose, { Mongoose } from "mongoose";

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: [true, "Quote must have a quote...inception"]
  },

  category: {
    type: String,
    required: [true, "Quote must have a category"]
  },

  episodeNumber: {
    type: Number
  },

  character: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "character"
  }
});

export const Quote = mongoose.model("quote", quoteSchema);
