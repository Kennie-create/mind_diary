import React, { useState } from "react"
import {Link} from 'react-router-dom'

import JournalTile from "./JournalTile"

const JournalFormContainer = props => {

  const setDefaultForm = {
    title: "",
    body: ""
  }
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
    setFormInput({
      title: "",
      body: ""
    })

  }

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          name="title"
          id="title"
          type="text"
          value={formInput.title}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Your thoughts:
        <textarea
          name="body"
          id="body"
          type="text"
          value={formInput.body}
          onChange={handleInputChange}
        />
      </label>
        <input className="journal-button" type="submit" value="Submit Journal" />

          <div>
            <Link className="redirect-button" to="/welcome"> Homepage </Link> -
          </div>

          <div>
            <Link className="redirect-button" to="/prescriptions"> Go to my prescriptions </Link> -
          </div>

    </form>
  )
}

export default JournalFormContainer
