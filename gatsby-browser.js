export { wrapRootElement } from "./gatsby-ssr"

// import React from "react"

// import {
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
//   HttpLink,
// } from "@apollo/client"

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: "https://dummy-heads.netlify.app/.netlify/functions/graphql",
//   }),
// })

// export const wrapRootElement = ({ element }) => (
//   <ApolloProvider client={client}>{element}</ApolloProvider>
// )
