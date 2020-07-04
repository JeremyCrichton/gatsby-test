import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is the Homepage</h1>
    <Link to="/form-page/">Send us a message...</Link> <br />
    <Link to="/todo-page/">Go to the todo page</Link> <br />
    <Link to="/login-page/">Go to the good stuff...</Link> <br />
  </Layout>
)

export default IndexPage
