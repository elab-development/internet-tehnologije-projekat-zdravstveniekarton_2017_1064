import React from 'react'
import { useLocation } from 'react-router-dom'

function Pacijent({pacijent}) {
  const location = useLocation();
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{pacijent.ime}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{pacijent.email}</h6>
      {location.pathname == "/pacijenti" && (
        <a href={`/pacijenti/${pacijent.id}`} className="btn btn-primary">
        Više informacija
        </a> 
      )}

      {location.pathname != "/pacijenti" && (
          <div className="card-text">
            Datum rodjenja:<br/>{pacijent.datum_rodjenja} <br/>
            Telefon: <br/> {pacijent.telefon} <br/>
            Šifra: {pacijent.id}
          </div>
      )}
      
      

    </div>
  </div>
  )
}

export default Pacijent