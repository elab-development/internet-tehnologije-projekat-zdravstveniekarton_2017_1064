import React from 'react'
import jsPDF from 'jspdf'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const IzvestajPregleda = () => {
    const {id} = useParams();
    console.log(id)

    const [loading, setLoading] = useState(true);
    const [pregled, setPregled] = useState() ;

    useEffect( () => {
        //console.log(pregled)
        if(pregled == null ){
          axios.get(`api/pregledi/${id}`).then((res) => {
             setPregled(res.data.pregled);
             //console.log(res.data.pregled)
             setLoading(false);
          }).catch( (e) =>
            console.log(e));;
        }
      })

      console.log(pregled)
        const handlePdf = () =>{
            if(pregled){
                
                const doc = new jsPDF();

                let pdfData = `
                Izveštaj pregleda

                Pacijent: ${pregled.karton.pacijent.ime}
                Datum rodjenja: ${pregled.karton.pacijent.datum_rodjenja}
                Email:${pregled.karton.pacijent.email} 
                
                Alergije: ${pregled.karton.alergije} 
                
                Simptomi: ${pregled.simptomi}
                Dijagnoza: ${pregled.dijagnoza}
                Terapija: ${pregled.terapija}
                
                Datum i vreme pregleda: ${pregled.termin.datum} - ${pregled.termin.vreme}
                Lekar: ${pregled.termin.lekar.ime}
                Sestra: ${pregled.termin.sestra.ime}
                `;  
                
                console.log(pdfData)
                doc.text(pdfData,10,10);
                doc.save(`Izvestaj pregleda ${pregled.id}.pdf`);
            
                
            }
       
    }
  return (
     <div className='izvestaj'>
        {loading? <p>Učitavanje..</p>: (
            <>
            <h2>Izveštaj sa pregleda</h2>
            <button onClick={handlePdf}>Generiši izveštaj</button>
            <h3>Prikaz informacija</h3>
            <p className="cardPregled-text">
                Simptomi: {pregled.simptomi} <br/>
                Dijagnoza: {pregled.dijagnoza} <br/>
                Terapija: {pregled.terapija} <br/>
                Datum i vreme: {pregled.termin.datum} - {pregled.termin.vreme} <br/>
                Lekar: {pregled.termin.lekar.ime} <br/>
                Šifra kartona: {pregled.karton.id}
            </p>  
            </>
        )}
        
     </div>
  )
}

export default IzvestajPregleda