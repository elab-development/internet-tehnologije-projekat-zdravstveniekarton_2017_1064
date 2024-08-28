//rafce precica arrow function komponenta
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pacijent from './Pacijent';
import { useParams } from 'react-router-dom';
import slika from '../slike/slika2.jpg'


const Pacijenti = () => {
  const {id} = useParams();
  const [pacijenti, setPacijenti ] = useState() ;
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(pacijenti == null ){
      axios.get(id ? `api/pacijenti/${id}` : "api/pacijenti").then((res) => {
        console.log(res.data);
        if(res.data.pacijenti == null)
          setPacijenti([res.data.pacijent])
        else
          setPacijenti(res.data.pacijenti );
      }).catch( (e) =>
        console.log(e));
    }
  } );
  return (
    
    <div className='pacijentKontejner'>
        {pacijenti == null ? <></> : pacijenti.map( (pacijent) => (
          <Pacijent pacijent ={pacijent} key={pacijent.id} />
          ) )}
      </div>
    
  )
}

export default Pacijenti