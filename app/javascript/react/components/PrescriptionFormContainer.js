import React, { useState } from "react"
import {Link} from 'react-router-dom'

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
    <form onSubmit={handleSubmit}>
      <h2  className="form-header">Add a new prescription:</h2>
      <label>
        Name:
        <input
          name="name"
          id="name"
          type="text"
          value={formInput.name}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Description:
        <input
          name="description"
          id="description"
          type="text"
          value={formInput.description}
          onChange={handleInputChange}
          />
      </label>

      <label>
        Prescription Date:
        <input
          name="date"
          id="date"
          type="month"
          value={formInput.date}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Expiration date:
        <input
          name="expiration"
          id="expiration"
          type="month"
          value={formInput.expiration}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Dosage:
        <input
          name="dosage"
          id="dosage"
          type="text"
          value={formInput.dosage}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Refills:
        <input
          name="refills"
          id="refills"
          type="number"
          min="0"
          value={formInput.refills}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Provider:
        <input
          name="provider"
          id="provider"
          type="text"
          value={formInput.provider}
          onChange={handleInputChange}
          />
      </label>

      <label>
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

      <div>
        <Link className="redirect-button" to="/welcome"> Homepage </Link> -
      </div>

      <div>
        <Link className="redirect-button" to="/journals"> Go to my journals </Link> -
      </div>

    </form>
  )
}

export default PrescriptionFormContainer
