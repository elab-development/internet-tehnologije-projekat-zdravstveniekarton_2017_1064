import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Karton from './Karton';
import { useParams } from 'react-router-dom';


const Kartoni = () => {
    const {id} = useParams();
    const [kartoni, setKartoni ] = useState() ;
    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(kartoni == null ){
        axios.get(id ? `api/kartoni/${id}` : "api/kartoni").then((res) => {
          console.log(res.data);
          if(res.data.kartoni == null)
            setKartoni([res.data.karton])
          else
            setKartoni(res.data.kartoni );
        }).catch( (e) =>
          console.log(e));
      }
    } );

    if( window.sessionStorage.getItem("user_type") == null) {
        return(
            <div className='text-center'>
                <h3>Niste ulogovani?</h3>
                <a href="/login" 
                className="text-black-50 fw-bold"><h3>Ulogujte se</h3></a>
            </div>
        )
    }
    return (
     
      <div className='kartoni'>
        {kartoni == null ? <></> : kartoni.map( (karton) => (
          <Karton karton ={karton} key={karton.id} />
          ) )}
      </div>
    )
  }

export default Kartoni