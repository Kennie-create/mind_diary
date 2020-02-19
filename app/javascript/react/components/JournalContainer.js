import React, {useState, useEffect} from "react"

import JournalTile from "./JournalTile"
import JournalFormContainer from "./JournalFormContainer"

const JournalContainer = props => {
  const [journals, setJournals] = useState([])

  useEffect(() => {
  fetch('/api/v1/journals')
  .then(response => {
    if (response.ok){
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error)
    }
  })
  .then(response => response.json())
  .then (responseFromServer => {
      setJournals(responseFromServer)
  })

  .catch(error => console.error(`Error in fetch ${error.message}`))
}, [])

  const addNewJournal = formInput => {
    fetch('/api/v1/journals',{
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then (response => {
      if(response.ok){
        return response;
      } else {
        let errorMessage = `{response.status} ($response.statusText)`,
          error = new Error(errorMessage);
        throw(error)
      }
    })
    .then(response => response.json())
    .then(responseToServer => {
      setJournals([
        ...journals,
      responseToServer])
    })
    .catch(error => console.error(`Error in fetch ${error.message}`)
  )}

    const journalTiles = journals.map(journal => {

      return (
        <JournalTile
          key={journal.id}
          id={journal.id}
          title={journal.title}
          body={journal.body}
        />
      )
    })

    return (
      <div className="top">
        <div className="title">
          <h3>My</h3>
          <h1>Journals</h1>
        </div>
        <div className="page">
          <div className="parallax1"></div>
          <div className="paragraph">
            <p>{journalTiles}</p>
          </div>
          <h2 className="add-journal-section">Add a new journal</h2>
          <div className="parallax2"></div>
        </div>
        <div className="journal-form">
          <JournalFormContainer addNewJournal={addNewJournal} />
        </div>
      </div>
    )
  }

export default JournalContainer
