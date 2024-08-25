import React from 'react'

function Termin({termin}) {
  return (
    <div className="card cardTermin">
    < ul className="list-group list-group-flush">
        <li className="list-group-item">Datum:{termin.datum}</li>
        <li className="list-group-item">Vreme:  {termin.vreme}      </li>
        <li className="list-group-item">Lekar: {termin.lekar.ime} </li>
        <li className="list-group-item">Sestra: {termin.sestra.ime}</li>
  </ul>
</div>
  )
}

export default Termin