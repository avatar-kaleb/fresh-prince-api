import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Show must have a title"]
  },

  genre: {
    type: String,
    required: [true, "Show must have a genre"]
  },

  themeSongUrl: {
    type: String
  },

  startDate: {
    type: String,
    required: [true, "Show must have a start date."]
  },

  endDate: {
    type: String
  }
});

export const Show = mongoose.model("show", showSchema);
