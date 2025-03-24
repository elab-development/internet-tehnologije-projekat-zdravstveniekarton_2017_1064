import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Karton from './Karton';
import { useParams, useLocation } from 'react-router-dom';


const Kartoni = () => {
    const {id} = useParams();
    const [kartoni, setKartoni ] = useState() ;
    const location = useLocation();

    const [searchTerm, setSearchTerm] = useState('');
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

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    let filteredKartoni = kartoni;
    if (searchTerm !== '') {
      filteredKartoni = kartoni.filter((karton) => {
        const kartonString = `${karton.pacijent.ime} ${karton.id}`;
        return kartonString.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

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
     
      <>
      {location.pathname == "/kartoni" && (
      <div className="search-container">
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Pretraga..." />
        <button className="btn btn-primary">Pretraži</button>
      </div>
      )}
      <div className='kartoni'>
        {filteredKartoni == null ? <></> : filteredKartoni.map( (karton) => (
          <Karton karton ={karton} key={karton.id} />
          ) )}
      </div>
      </>
    )
  }

export default Kartoni