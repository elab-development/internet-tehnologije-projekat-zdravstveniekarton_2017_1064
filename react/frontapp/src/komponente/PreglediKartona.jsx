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
        }).catch( (e) =>
          console.log(e));;
      }
    },[pregledi] );

    if(window.sessionStorage.getItem("user_type") === 'sestra' || 
    window.sessionStorage.getItem("user_type") == null) {
        return(
            <div className='text-center'>
                <h3>Neautorizovan pristup. Mogu pristupiti samo lekari.</h3>
                <h3>Niste ulogovani?</h3>
                <a href="/login" 
                className="text-black-50 fw-bold"><h3>Ulogujte se</h3></a>
            </div>
        )
    }
    return (
     
      <div className='preglediKartona'>
        {pregledi == null ? <></> : pregledi.map( (pregled) => (
          <Pregled pregled ={pregled} key={pregled.id} />   
          ) )}
      </div>
    )
}

export default PreglediKartona