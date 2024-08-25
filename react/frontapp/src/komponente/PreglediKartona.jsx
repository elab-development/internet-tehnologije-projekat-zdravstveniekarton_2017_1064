import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import Pregled from './Pregled';
import { useParams } from 'react-router-dom';



const PreglediKartona = () => {
    
    const { id } = useParams();
    const [pregledi, setPregledi ] = useState() ;
    
    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(pregledi == null ){
        axios.get(`api/kartoni/${id}/pregledi`).then((res) => {
          console.log(res.data);
          setPregledi(res.data.pregledi );
        });
      }
    },[pregledi] );
    return (
     
      <div className='preglediKartona'>
        {pregledi == null ? <></> : pregledi.map( (pregled) => (
          <Pregled pregled ={pregled} key={pregled.id} />   
          ) )}
      </div>
    )
}

export default PreglediKartona