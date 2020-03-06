import React from "react"

const JournalTile = props => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteJournal(props.id)
  }

  return (
    <div>
      <hr></hr>
      <div className="journal-tile">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
      <input onClick={handleDelete}  type="submit" value="Delete Journal"/>
    </div>
  )
}

export default JournalTile
