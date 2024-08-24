import React from 'react'
import Lekar from './Lekar.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Lekari = () => {
  
  const [lekari, setLekari ] = useState() ;
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(lekari == null ){
      axios.get("api/lekari").then((res) => {
        console.log(res.data);
        setLekari(res.data.lekari );
      });
    }
  } );
  return (
   
    <div className='all-osoblje'>
      {lekari == null ? <></> : lekari.map( (lekar) => (
        <Lekar lekar ={lekar} key={lekar.id} />
        ) )}
    </div>
  )
}

export default Lekari