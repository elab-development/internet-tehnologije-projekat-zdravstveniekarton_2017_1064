import React from 'react'
import {  useLocation } from 'react-router-dom'


 function Karton({karton}) {
  const location = useLocation();  
  return (
    <div className="cardKarton">
        <div className="cardKarton-header">
            Šifra kartona: {karton.id}
        </div>
        <div className="cardKarton-body">
            <h5 className="cardKarton-title">{karton.pacijent.ime} </h5>
        
              {location.pathname == "/kartoni" && (
                <a href={`/kartoni/${karton.id}`} className="btn btn-primary">
                  Otvori karton
                </a>
              )}


              {location.pathname != "/kartoni" && (    
                <div>
                    <p className="cardKarton-text">
                    <a href={`/pacijenti/${karton.pacijent.id}`} className="btn btnK">
                                    Informacije o pacijentu
                                </a>
                                <br/><br/>
                      Alergije: {karton.alergije} <br/>
                      Datum rodjenja: {karton.pacijent.datum_rodjenja} <br/>
                       
                    </p>

                  <a href={`/kartoni/${karton.id}/pregledi`} className="btn btnK ">
                    Svi pregledi
                  </a>

                  <div className="card-footer text-muted">
                    Email: {karton.pacijent.email} 
                    <br/> Telefon: {karton.pacijent.telefon} 
                  </div>

                </div>
              )}
              
        </div>
        
    </div>
  )
}

export default Karton