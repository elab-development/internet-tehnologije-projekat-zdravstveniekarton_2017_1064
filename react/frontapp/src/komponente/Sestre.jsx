import React from 'react'
import Sestra from './Sestra'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Sestre = () => {
  const {id} =useParams();
  const [sestre, setSestre ] = useState() ;


  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(sestre == null ){
      axios.get(id ? `api/sestre/${id}` : "api/sestre").then((res) => {
        console.log(res.data);
        if(res.data.sestre == null)
          {  
            setSestre([res.data.sestra])
          }
          else
            setSestre(res.data.sestre );
        
      });
    }
  } );
  return (
   
    <div className='all-osoblje'>
      {sestre == null ? <></> : sestre.map( (sestra) => (
        <Sestra sestra ={sestra} key={sestra.id} />
        ) )}
    </div>
  )
}
export default Sestre