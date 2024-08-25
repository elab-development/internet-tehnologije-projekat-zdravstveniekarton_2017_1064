import React from 'react'
import PreglediKartona from './PreglediKartona'
import { Link } from 'react-router-dom'


 function Karton({karton}) {
    
  return (
    <div className="cardKarton">
        <div className="cardKarton-header">
            Šifra kartona: {karton.id}
        </div>
        <div className="cardKarton-body">
            <h5 className="cardKarton-title">{karton.pacijent.ime} </h5>
            <p className="cardKarton-text">
                Alergije: {karton.alergije} <br/>
                Datum rodjenja: {karton.pacijent.datum_rodjenja}
            </p>

            
              {/* <a href={`/kartoni/${karton.id}/pregledi`} className="btn btn-primary">Svi pregledi </a> */}
              
              <Link to={`/kartoni/${karton.id}/pregledi`} className="btn btn-primary">
                Svi pregledi
              </Link>
              {/* <div>
                <PreglediKartona karton ={karton} key={karton.id} />
              </div> */}
       
           
             

        </div>
        <div className="card-footer text-muted">
        Email:{karton.pacijent.email} 
        <br/> Telefon: {karton.pacijent.telefon} 
        </div>
    </div>
  )
}

export default Karton