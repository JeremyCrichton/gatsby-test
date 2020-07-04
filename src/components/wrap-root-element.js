import React from "react"
import { render } from "react-dom"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://dummy-heads.netlify.app/.netlify/functions/graphql",
  }),
})

module.exports = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
