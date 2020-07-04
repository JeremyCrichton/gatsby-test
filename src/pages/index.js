import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is the Homepage</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/form-page/">Go to the form</Link> <br />
  </Layout>
)

export default IndexPage
