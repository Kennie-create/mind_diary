import React from "react"

const PrescriptionTile = props => {
  return (
    <div className="prescription-tile">
        <h2>{props.name}</h2>
        <p>{props.description}</p>

        <li>Provider: {props.provider}</li>
        <li>Date Prescribed: {props.date}</li>
        <li>Dosage: {props.dosage}</li>
        <li>Expiration Date: {props.expiration}</li>
        <li>Refills: {props.refill}</li>
        <li>Pharmacy: {props.pharmacy}</li>
    </div>
  )
}

export default PrescriptionTile
