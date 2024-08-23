import React from 'react'
import Lekar from './Lekar.jsx'

const Lekari = () => {
  //const ime = "Ime i prezime";
  //const info = "Dodatne informacije";
  const lekar ={
    ime : "Ime i prezime",
    info : "Dodatne informacije"
  };
  return (
    <div className='all-osoblje'>
        <Lekar lekar={lekar}/>
        <Lekar lekar={lekar}/>  
        <Lekar lekar={lekar}/>
        
    </div>
  )
}

export default Lekari