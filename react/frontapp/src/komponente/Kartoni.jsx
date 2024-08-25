import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Karton from './Karton';


const Kartoni = () => {
    const [kartoni, setKartoni ] = useState() ;
    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(kartoni == null ){
        axios.get("api/kartoni").then((res) => {
          console.log(res.data);
          setKartoni(res.data.kartoni );
        });
      }
    } );
    return (
     
      <div className='kartoni'>
        {kartoni == null ? <></> : kartoni.map( (karton) => (
          <Karton karton ={karton} key={karton.id} />
          ) )}
      </div>
    )
  }

export default Kartoni