import React, { useState, useReducer } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const todosReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [{ completed: false, body: action.payload }, ...state]
    case "toggleTodoCompleted":
      const newState = [...state]
      console.log(action.payload)
      newState[action.payload] = {
        completed: !state[action.payload].completed,
        body: state[action.payload].body,
      }
      return newState
  }
}

const TodoPage = () => {
  const [newTodoBody, setNewTodoBody] = useState("")
  // const [todos, setTodos] = useState([])
  const [todos, dispatch] = useReducer(todosReducer, [])

  const handleSubmit = e => {
    e.preventDefault()

    dispatch({ type: "addTodo", payload: newTodoBody })
  }

  return (
    <Layout>
      <SEO title="Todo" />
      <h1>This is the Todo Page</h1>
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
      <ul style={{ listStyle: "none", marginLeft: "0" }}>
        {todos.map((todo, i) => (
          <li key={i}>
            <input
              onChange={() => {
                dispatch({
                  type: "toggleTodoCompleted",
                  payload: i,
                })
              }}
              checked={todo.completed}
              type="checkbox"
            />
            <span style={{ marginLeft: "10px" }}>{todo.body}</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TodoPage
