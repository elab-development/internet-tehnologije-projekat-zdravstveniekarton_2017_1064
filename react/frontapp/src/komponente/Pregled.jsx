import React from 'react'
import { useLocation } from 'react-router-dom';

function Pregled({pregled}) {
  const location = useLocation();
  return (
    <div className="cardPregled ">
    {location.pathname === '/pregledi' && (
        <div className="cardPregled-header">
          Pacijent: {pregled.karton.pacijent.ime} <br />
          {/* Alergije: {pregled.karton.alergije} */}
          <a href={`/pacijenti/${pregled.karton.pacijent.id}`} className="btn btn-secondary">
            Informacije o pacijentu
          </a> 
        </div>
      )}
    
     <div className="cardPregled-body">
        <h5 className="cardPregled-title">
          Datum i vreme pregleda: {pregled.termin.datum} - {pregled.termin.vreme}
        </h5>   
        <p className="cardPregled-text">
          
            Simptomi: {pregled.simptomi} <br/>
            Dijagnoza: {pregled.dijagnoza} <br/>
            Terapija: {pregled.terapija}
        </p>       
    </div>
    <div className="card-footer text-muted">
    Lekar: {pregled.termin.lekar.ime} <br/>
    Sestra: {pregled.termin.sestra.ime}
    </div>
</div>
  )
}

export default Pregled