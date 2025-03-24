import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pregled from './Pregled';
import { useParams, useLocation } from 'react-router-dom';

const Pregledi = () => {
    const {id} = useParams();
    const [pregledi, setPregledi ] = useState() ;
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    //ako se nesto izmeni u komponenti (da se ucita samo jednom)
    useEffect( () => {
      if(pregledi == null ){
        axios.get(id? `api/pregledi/${id}` :"api/pregledi").then((res) => {
          console.log(res.data);
          if(res.data.pregledi == null)
            setPregledi([res.data.pregled]);
          else
            setPregledi(res.data.pregledi );
        }).catch( (e) =>
          console.log(e));
      }
    } );

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    let filteredPregledi = pregledi;
    if (searchTerm !== '') {
      filteredPregledi = pregledi.filter((pregled) => {
        const pregledString = `${pregled.karton.pacijent.ime} ${pregled.termin.datum} ${pregled.termin.vreme} 
        ${pregled.simptomi} ${pregled.dijagnoza} ${pregled.terapija} ${pregled.termin.lekar.ime}
         ${pregled.termin.lekar.specijalizacija} ${pregled.termin.sestra.ime}`;
        return pregledString.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

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
     <>
     {location.pathname == "/pregledi" && (
      <div className="search-container">
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Pretraga..." />
      <button className="btn btn-primary">Pretraži</button>
    </div>
      )}
      <div className='pregledi'>
        {filteredPregledi == null ? <></> : filteredPregledi.map( (pregled) => (
          <Pregled pregled ={pregled} key={pregled.id} />   
          ) )}
      </div>
      </>
    )
}

export default Pregledi