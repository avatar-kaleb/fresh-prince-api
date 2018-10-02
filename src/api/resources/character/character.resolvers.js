import { Character } from "./character.model";

const allCharacters = () => {
  return Character.find({}).exec();
};

const getCharacter = (_, { id }) => {
  return Character.findById(id).exec();
};

const newCharacter = (_, { input }) => {
  return Character.create(input);
};

const updateCharacter = (_, { input }) => {
  const { id, ...update } = input;

  return Character.findByIdAndUpdate(id, update, { new: true }).exec();
};

export const characterResolvers = {
  Query: {
    allCharacters,
    getCharacter
  },
  Mutation: {
    newCharacter,
    updateCharacter
  }
};
