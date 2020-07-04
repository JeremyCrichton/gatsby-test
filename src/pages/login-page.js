import React, { useEffect } from "react"
// import netlifyIdentity from "netlify-identity-widget"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LoginPage = () => {
  // useEffect(() => {
  //   netlifyIdentity.init({})
  // })

  return (
    <Layout>
      <SEO title="Login" />
      <h1>Login</h1>
      <button
        onClick={() => {
          // netlifyIdentity.open()
        }}
      >
        Login
      </button>
      <br />
      <button
        onClick={() => {
          // console.log(netlifyIdentity.currentUser())
          console.log("Hi")
        }}
      >
        Log Current User
      </button>
    </Layout>
  )
}

export default LoginPage
