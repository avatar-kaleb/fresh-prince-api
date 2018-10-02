import { Quote } from "./quote.model";

const allQuotes = () => {
  return Quote.find({}).exec();
};

const getQuote = (_, { id }) => {
  return Quote.findById(id).exec();
};

const newQuote = (_, { input }) => {
  return Quote.create(input);
};

const updateQuote = (_, { input }) => {
  const { id, ...update } = input;

  return Quote.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const quoteResolvers = {
  Query: {
    allQuotes,
    getQuote
  },
  Mutation: {
    newQuote,
    updateQuote
  }
};
