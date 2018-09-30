import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash.merge";
import { graphqlExpress } from "apollo-server-express";

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [baseSchema],
  resolvers: merge({})
});

export const graphQLRouter = graphqlExpress(req => ({
  schema,
  context: {
    req,
    user: req.user
  }
}));
