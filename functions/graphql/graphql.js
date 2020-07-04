const { ApolloServer, gql } = require("apollo-server-lambda")

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    todos: [Todo]!
  }
  type Todo {
    id: ID!
    body: String!
    completed: Boolean!
  }
  type Mutation {
    addTodo(body: String!): Todo
    updateTodoCompleted(id: ID!): Todo
  }
`
const todos = {}
let todoIndex = 0

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello Launch School world!",
    todos: () => {
      return Object.values(todos)
    },
  },
  Mutation: {
    addTodo: (_, { body }) => {
      todoIndex++
      const id = `key-${todoIndex}`
      todos[id] = { id, body, completed: false }
      return todos[id]
    },
    updateTodoCompleted: (_, { id }) => {
      todos[id].completed = true
      return todos[id]
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,

  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // the `playground` and `introspection` options must be set explicitly to `true`.
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
