import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pregled from './Pregled';
import { useParams } from 'react-router-dom';

const Pregledi = () => {
    const {id} = useParams();
    const [pregledi, setPregledi ] = useState() ;
    
    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(pregledi == null ){
        axios.get(id? `api/pregledi/${id}` :"api/pregledi").then((res) => {
          console.log(res.data);
          if(res.data.pregledi == null)
            setPregledi([res.data.pregled]);
          else
            setPregledi(res.data.pregledi );
        });
      }
    } );
    return (
     
      <div className='pregledi'>
        {pregledi == null ? <></> : pregledi.map( (pregled) => (
          <Pregled pregled ={pregled} key={pregled.id} />   
          ) )}
      </div>
    )
}

export default Pregledi