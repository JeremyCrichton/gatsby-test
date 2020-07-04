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

// export const wrapRootElement = ({ element }) => {
//   console.log("gatsby browser running")
//   return <ApolloProvider client={client}>{element}</ApolloProvider>
// }
