// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Recipe {
    name: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedRecipes: [Recipe]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getSingleUser(username: String!): User
    getUser: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(
      name: String!
      id: Number!
      ingredients: [String]
      directions: [String]
      ): User
    removeRecipe(bookId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
