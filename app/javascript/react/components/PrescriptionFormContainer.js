import React, { useState, useEffect } from "react"

const PrescriptionFormContainer = props => {

  const setDefaultForm = {
    name:"",
    description:"",
    date:"",
    expiration:"",
    provider:"",
    dosage:"",
    refills:"",
    pharmacy:""
  }

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
    setFormInput({
      name:"",
      description:"",
      date:"",
      expiration:"",
      provider:"",
      dosage:"",
      refills:"",
      pharmacy:""
    })

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
          value={formInput.name}
          onChange={handleInputChange}
        />
      </label>

      <label className="description-box">
        Description:
        <input
          name="description"
          id="description"
          type="text"
          value={formInput.description}
          onChange={handleInputChange}
          />
      </label>

      <label className="date-box">
        Prescription Date:
        <input
          name="date"
          id="date"
          type="text"
          value={formInput.date}
          onChange={handleInputChange}
        />
      </label>

      <label className="expiration-box">
        Expiration date:
        <input
          name="expiration"
          id="expiration"
          type="text"
          value={formInput.expiration}
          onChange={handleInputChange}
        />
      </label>

      <label className="dosage-box">
        Dosage:
        <input
          name="dosage"
          id="dosage"
          type="text"
          value={formInput.dosage}
          onChange={handleInputChange}
        />
      </label>

      <label className="refills-box">
        Refills:
        <input
          name="refills"
          id="refills"
          type="text"
          value={formInput.refills}
          onChange={handleInputChange}
        />
      </label>

      <label className="provider-box">
        Provider:
        <input
          name="provider"
          id="provider"
          type="text"
          value={formInput.provider}
          onChange={handleInputChange}
          />
      </label>

      <label className="pharmacy-box">
        Pharmacy:
        <input
          name="pharmacy"
          id="pharmacy"
          type="text"
          value={formInput.pharmacy}
          onChange={handleInputChange}
        />
      </label>

      <div className="prescription-button-group">
        <input className="submit-button" type="submit" value="Submit Prescription" />
      </div>
    </form>
  )
}

export default PrescriptionFormContainer
