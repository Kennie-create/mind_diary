import React, { useState, useEffect } from "react"

import PrescriptionTile from "./PrescriptionTile"

const PrescriptionFormContainer = props => {

  const [formInput, setFormInput] = useState ({
    name:"",
    description:"",
    date:"",
    expiration:"",
    provider:"",
    dosage:"",
    refills:"",
    pharmacy:""
  })

  let handleInputChange = event => {
    setFormInput({
      ...formInput,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let handleSubmit = event => {
    event.preventDefault()
    props.addNewPrescription(formInput)
  }

  return (
    <form className="prescription-form" onSubmit={handleSubmit}>
      <h2>Add a new prescription:</h2>
      <label className="name-box">
        Name:
        <input
          name="name"
          id="name"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label className="description-box">
        Description:
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleInputChange}
          />
      </label>

      <label className="date-box">
        Prescription Date:
        <input
          name="date"
          id="date"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label className="expiration-box">
        Expiration date:
        <input
          name="expiration"
          id="expiration"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label className="dosage-box">
        Dosage:
        <input
          name="dosage"
          id="dosage"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label className="refills-box">
        Refills (if none, input N/A):
        <input
          name="refills"
          id="refills"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <label className="provider-box">
        Provider:
        <input
          name="provider"
          id="provider"
          type="text"
          onChange={handleInputChange}
          />
      </label>

      <label className="pharmacy-box">
        Pharmacy:
        <input
          name="pharmacy"
          id="pharmacy"
          type="text"
          onChange={handleInputChange}
        />
      </label>

      <div className="prescription-button-group">
        <button className="clear-button">Clear</button>
        <input className="submit-button" type="submit" value="Submit Prescription" />
      </div>
    </form>
  )
}

export default PrescriptionFormContainer
