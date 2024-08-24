import React from 'react'

function Pacijent({pacijent}) {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{pacijent.ime}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{pacijent.email}</h6>
      <p className="card-text">Datum rodjenja:<br/>{pacijent.datum_rodjenja} <br/>Telefon: {pacijent.telefon} </p>
      

    </div>
  </div>
  )
}

export default Pacijent