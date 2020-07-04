import React, { useState } from "react"

const Form = () => {
  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [message, setmessage] = useState("This site is amazing...")
  return (
    <form name="contact" method="POST" data-netlify="true">
      <label htmlFor="name">Your name: </label>
      <p>
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </p>
      <label htmlFor="level">How awesome am I?</label>
      <p>
        <select
          value={level}
          onChange={e => setLevel(e.target.value)}
          name="level"
          id="level"
        >
          <option value="most">The most</option>
          <option value="more">Even more than that</option>
        </select>
      </p>
      <label htmlFor="message">Write a nice message to me: </label>
      <p>
        <textarea
          name="message"
          value={message}
          onChange={e => setmessage(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default Form
