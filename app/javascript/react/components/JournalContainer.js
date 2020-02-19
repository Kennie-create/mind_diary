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
      <div className="row">
        <div className="small-8 small-centered columns">
          <h1>My Past Entries</h1>
          {journalTiles}
          <JournalFormContainer addNewJournal={addNewJournal} />
        </div>
      </div>
    )

  }


export default JournalContainer
