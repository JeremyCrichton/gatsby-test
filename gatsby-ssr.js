import React from "react"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client"
import fetch from "isomorphic-fetch"
import { setContext } from "apollo-link-context"
import netlifyIdentity from "netlify-identity-widget"

const authLink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser()
  const token = user.token.access_token
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const httpLink = new HttpLink({
  fetch,
  uri: "https://dummy-heads.netlify.app/.netlify/functions/graphql",
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export const wrapRootElement = ({ element }) => {
  console.log("gatsby ssr running")
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
