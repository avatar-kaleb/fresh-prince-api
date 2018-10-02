import { makeExecutableSchema } from "graphql-tools";
import { userType, userResolvers } from "./resources/user";
import { showType, showResolvers } from "./resources/show";
import { quoteType, quoteResolvers } from "./resources/quote";
import { characterType, characterResolvers } from "./resources/character";

import merge from "lodash.merge";
import { graphqlExpress } from "apollo-server-express";

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [baseSchema, characterType, quoteType, showType, userType],
  resolvers: merge({}, characterResolvers, quoteResolvers, showResolvers, userResolvers)
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user
  }
}));
