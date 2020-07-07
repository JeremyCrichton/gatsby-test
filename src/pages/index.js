import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Todos from "../components/todos"
let netlifyIdentity
if (typeof window !== "undefined") {
  netlifyIdentity = require("netlify-identity-widget")
}

const IndexPage = () => {
  useEffect(() => {
    netlifyIdentity.init({
      namePlaceholder: "Name",
    })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is the Homepage</h1>
      <Link to="/about-page/">Go to the about page</Link> <br />
      <Link to="/form-page/">Send us a message...</Link> <br />
      <Link to="/todo-page/">Go to the todo page</Link> <br />
      <hr />
      <button
        onClick={() => {
          netlifyIdentity.open()
        }}
      >
        Login / Logout
      </button>
      <br />
      <button
        onClick={() => {
          console.log(netlifyIdentity.currentUser())
        }}
      >
        Log Current User
      </button>
    </Layout>
  )
}

export default IndexPage
