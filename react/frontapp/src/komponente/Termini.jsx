import React from 'react'
import Termin from './Termin';
import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

const Termini = () => {
    const [termini, setTermini ] = useState() ;
    const {id} =useParams();

    
    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(termini == null ){
        axios.get(id ? `api/termini/${id}` : "api/termini").then((res) => {
          console.log(res.data);
          if(res.data.termini == null)
            setTermini([res.data.termin])
          else
          setTermini(_.sortBy(res.data.termini, [
            (item) => new Date(item.datum.split('.').reverse().join('-')),
            'vreme'
          ]));
         
        }).catch( (e) =>
        console.log(e));;
      }
    })
    
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
     
      <div className='termini'>
        {termini == null ? <></> : termini.map( (termin) => (
          <Termin termin ={termin} key={termin.id} />   
          ) )}
      </div>
    )
}

export default Termini