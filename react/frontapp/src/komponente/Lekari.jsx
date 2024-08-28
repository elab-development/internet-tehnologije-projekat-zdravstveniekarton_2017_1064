import React from 'react'
import Lekar from './Lekar.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Lekari = () => {
  
  const [lekari, setLekari ] = useState() ;
  const {id} =useParams();
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(lekari == null ){

      axios.get(id ? `api/lekari/${id}` : "api/lekari").then((res) => {
        console.log(res.data);
        if(res.data.lekari == null)
        {  
          setLekari([res.data.lekar])
        }
        else
          setLekari(res.data.lekari );
      }).catch( (e) =>
        console.log(e));
    }
   
  } );
  return (
    <div className='all-osoblje'>
      {lekari == null ? <></> : lekari.map( (lekar) => (
        <Lekar lekar ={lekar} key= {lekar.id} />
        ) )}
    </div>
  )
}

export default Lekari