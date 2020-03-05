import React, {useState, useEffect} from "react"

import JournalTile from "./JournalTile"
import JournalFormContainer from "./JournalFormContainer"

const JournalContainer = props => {
  const [journals, setJournals] = useState([])
  const [errors, setErrors] = useState([])
  const [deleted, setDeleted] = useState(false)

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
      if(!Array.isArray(responseToServer)){
        setJournals([
          ...journals, responseToServer
      ])


      } else {
        setErrors(responseToServer)
      }
    })
    .catch(error => console.error(`Error in fetch ${error.message}`)
  )}

  const deleteJournal = (journalId) => {
    fetch(`/api/v1/journals/${journalId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(allJournals => {
      setJournals(allJournals)
    })
    .catch(error => console.error(`Error in fetch ${error.message}`))
  }

    const journalTiles = journals.map(journal => {

      return (
        <JournalTile
          key={journal.id}
          id={journal.id}
          title={journal.title}
          body={journal.body}
          deleteJournal={deleteJournal}
        />
      )
    })

    const errorList = errors.map((error, index) => {
      return (
        <li key={index}>{error}</li>
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
          <ul>
            {errorList}
          </ul>
          <JournalFormContainer addNewJournal={addNewJournal} />
        </div>
      </div>
    )
  }

export default JournalContainer
