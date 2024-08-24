//rafce precica arrow function komponenta
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pacijent from './Pacijent';

const Pacijenti = () => {
    const [pacijenti, setPacijenti ] = useState() ;
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(pacijenti == null ){
      axios.get("api/pacijenti").then((res) => {
        console.log(res.data);
        setPacijenti(res.data.pacijenti );
      });
    }
  } );
  return (
   
    <div className='all-osoblje'>
      {pacijenti == null ? <></> : pacijenti.map( (pacijent) => (
        <Pacijent pacijent ={pacijent} key={pacijent.id} />
        ) )}
    </div>
  )
}

export default Pacijenti