import React, { useState } from "react"

import JournalTile from "./JournalTile"

const JournalFormContainer = props => {

  const [formInput, setFormInput] = useState ({
    title: "",
    body: ""
  })

  let handleInputChange = event => {
    setFormInput({
      ...formInput,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let handleSubmit = event => {
    event.preventDefault()
    props.addNewJournal(formInput)
  }

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          name="title"
          id="title"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label>
        Your thoughts:
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit Journal" />
      </div>
    </form>
  )
}

export default JournalFormContainer
