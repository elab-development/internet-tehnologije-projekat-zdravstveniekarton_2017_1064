import React from 'react'
import { useLocation } from 'react-router-dom';

//destrukturiranje objekta umesto da prima props pa dole d pozivamo props.lekar samo stavimo u viticastoj odmah objekat lekar

function Lekar({lekar}) {
  const location = useLocation();
  return (

      <div className="card">
        <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika"  />
        <div className="card-body">
          <h5 className="card-title text-center">{lekar.ime}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">{lekar.specijalizacija}</h6>
          {location.pathname != "/lekari" && (
            <div>
              <p className="card-text text-center">Email:<br/>{lekar.email}</p>
              <p className="card-text text-center">Telefon:<br/>{lekar.telefon}</p>
              <p className="card-text text-center">Datum rodjenja:<br/>{lekar.datum_rodjenja}</p>
            </div>
          )}
          {location.pathname == "/lekari" && (
            <a href={`/lekari/${lekar.id}`} className="btn btn-primary">
                Više informacija
            </a>
          )}
          
        </div>
      </div>

  )
}

export default Lekar