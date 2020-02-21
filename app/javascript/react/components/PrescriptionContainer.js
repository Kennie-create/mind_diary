import React, {useState, useEffect} from "react"

import PrescriptionTile from "./PrescriptionTile"
import PrescriptionFormContainer from "./PrescriptionFormContainer"

const  PrescriptionContainer = props => {
  const [prescriptions, setPrescriptions] = useState([])
const [errors, setErrors] = useState([])

  useEffect(() => {
  fetch('/api/v1/prescriptions')
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
      setPrescriptions(responseFromServer)
  })
  .catch(error => console.error(`Error in fetch ${error.message}`))
}, [])

  const addNewPrescription = formInput => {
    fetch('/api/v1/prescriptions',{
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
        setPrescriptions([
          ...prescriptions, responseToServer
      ])


      } else {
        setErrors(responseToServer)
      }
    })
    .catch(error => console.error(`Error in fetch ${error.message}`)
  )}

    const prescriptionTiles = prescriptions.map(prescription => {

      return (
        <PrescriptionTile
          key={prescription.id}
          id={prescription.id}
          name={prescription.name}
          description={prescription.description}
          date={prescription.date}
          expiration={prescription.expiration}
          provider={prescription.provider}
          dosage={prescription.dosage}
          refill={prescription.refill}
          pharmacy={prescription.pharmacy}
        />
      )
    })
    const errorList = errors.map((error, index) => {
      return (
        <li key={index}>{error}</li>
      )
    })
    return (
      <div className="row">
        <div className="all-prescriptions">
          <h1>My Medicine Cabinet</h1>
          <hr />
          {prescriptionTiles}
          <hr/>
          <div className="prescription-form">
            <ul>
              {errorList}
            </ul>
            <PrescriptionFormContainer addNewPrescription={addNewPrescription} />
        </div>
        </div>
      </div>
    )
  }

export default PrescriptionContainer
