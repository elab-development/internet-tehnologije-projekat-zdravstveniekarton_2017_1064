import React from 'react'

function Termin({termin}) {
  return (
    <div className="card cardTermin">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Datum:</strong> <span>{termin.datum}</span>
      </li>
      <li className="list-group-item">
        <strong>Vreme:</strong> <span>{termin.vreme}</span>
      </li>
      <li className="list-group-item">
        <strong>Lekar:</strong> <span>{termin.lekar.ime}</span>
      </li>
      <li className="list-group-item">
        <strong>Sestra:</strong> <span>{termin.sestra.ime}</span>
      </li>
    </ul>
  </div>
  )
}

export default Termin