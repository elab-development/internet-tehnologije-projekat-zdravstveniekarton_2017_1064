import React from 'react'
import { useLocation } from 'react-router-dom'

function Sestra({sestra}) {
  const location = useLocation();
  return (
    <div className="card">
    <img className='card-img-top' src="https://cdn-cmdne.nitrocdn.com/hNJckCstFVQjUckKaelcVKoVJrzdTVkW/assets/images/optimized/rev-3c83def/www.provocollege.edu/wp-content/uploads/2023/02/shutterstock_1724802532-1030x687.jpg" alt="Slika"  />
    <div className="card-body">
      <h5 className="card-title">{sestra.ime}</h5>
      
      
      {location.pathname == "/sestre" && (
        <a href={`/sestre/${sestra.id}`} className="btn btn-primary">
        Više informacija
        </a>
      )}
      {location.pathname != "/sestre" && (
        <div>
          <p className="card-text">Email: <br/>{sestra.email}</p>
          <p className="card-text">Telefon: <br/>{sestra.telefon}</p>
          <p className="card-text">Datum rodjenja: <br/>{sestra.datum_rodjenja}</p>
        </div>
      )}
    </div>
  </div>
  )
}

export default Sestra