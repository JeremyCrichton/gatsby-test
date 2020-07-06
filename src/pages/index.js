import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Login from "../components/login"

let netlifyIdentity
if (typeof window !== "undefined") {
  netlifyIdentity = require("netlify-identity-widget")
}

const IndexPage = () => {
  useEffect(() => {
    netlifyIdentity.init({})
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is the Homepage</h1>
      <Link to="/form-page/">Send us a message...</Link> <br />
      <Link to="/todo-page/">Go to the todo page</Link> <br />
      <Login />
    </Layout>
  )
}

export default IndexPage
