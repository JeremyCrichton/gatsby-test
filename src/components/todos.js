import React, { useState, useReducer } from "react"
import { gql, useMutation, useQuery } from "@apollo/client"

import Layout from "../components/layout"
import SEO from "../components/seo"

let netlifyIdentity
if (typeof window !== "undefined") {
  netlifyIdentity = require("netlify-identity-widget")
}

const ADD_TODO = gql`
  mutation AddTodo($body: String!) {
    addTodo(body: $body) {
      id
    }
  }
`

const UPDATE_TODO_COMPLETED = gql`
  mutation UpdateTodoCompleted($id: ID!) {
    updateTodoCompleted(id: $id) {
      body
      completed
    }
  }
`

const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      body
      completed
    }
  }
`
const Todos = () => {
  const [newTodoBody, setNewTodoBody] = useState("")
  // data we need is coming from the query below so don't need 2nd const {data} here
  const [addTodo] = useMutation(ADD_TODO)
  const [updateTodoCompleted] = useMutation(UPDATE_TODO_COMPLETED)
  const { loading, error, data, refetch } = useQuery(GET_TODOS)
  console.log(data)

  const handleSubmit = async e => {
    e.preventDefault()
    await addTodo({ variables: { body: newTodoBody } })
    setNewTodoBody("")
    await refetch()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add a todo</label>
        <p>
          <input
            name="name"
            value={newTodoBody}
            onChange={e => setNewTodoBody(e.target.value)}
          />
        </p>
        <input type="submit" value="Add" />
      </form>
      {loading && <div>loading...</div>}
      {error && <div>{error.message}</div>}
      {!loading && !error && (
        <ul style={{ listStyle: "none", marginLeft: "0" }}>
          {data.todos.map(todo => (
            <li key={todo.id}>
              <input
                onChange={async () => {
                  await updateTodoCompleted({ variables: { id: todo.id } })
                  await refetch()
                }}
                checked={todo.completed}
                type="checkbox"
              />
              <span style={{ marginLeft: "10px" }}>{todo.body}</span>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          console.log(netlifyIdentity.currentUser())
        }}
      >
        Log current user
      </button>
    </>
  )
}

export default Todos
