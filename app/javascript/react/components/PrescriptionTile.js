import React from "react"

const PrescriptionTile = props => {

  const handleDelete = (event) => {
    event.preventDefault()
    props.deletePrescription(props.id)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    props.editPrescription(props.id)
  }

  return (
    <div className="prescription-tile">
        <h2>{props.name}</h2>
        <div className="description-tile"> <p>{props.description}</p></div>
        <li>Provider: {props.provider}</li>
        <li>Date Prescribed: {props.date}</li>
        <li>Dosage: {props.dosage}</li>
        <li>Expiration Date: {props.expiration}</li>
        <li>Refills: {props.refills}</li>
        <li>Pharmacy: {props.pharmacy}</li>
        <div className="edit-delete-buttons">
          <input onClick={handleEdit} type="submit" value="Edit"/>
          <input onClick={handleDelete}  type="submit" value="Delete"/>
        </div>

    </div>
  )
}

export default PrescriptionTile
