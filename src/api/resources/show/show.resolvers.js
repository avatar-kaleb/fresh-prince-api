import { Show } from "./show.model";

const allShows = () => {
  return Show.find({}).exec();
};

const getShow = (_, { id }) => {
  return Show.findById(id).exec();
};

const newShow = (_, { input }) => {
  return Show.create(input);
};

const updateShow = (_, { input }) => {
  const { id, ...update } = input;

  return Show.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const showResolvers = {
  Query: {
    allShows,
    getShow
  },
  Mutation: {
    newShow,
    updateShow
  }
};
