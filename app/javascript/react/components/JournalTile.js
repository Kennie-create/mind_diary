import React from "react"

const JournalTile = props => {
  return (
    <div className="journal-tile">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default JournalTile
