//rafce precica arrow function komponenta
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pacijent from './Pacijent';
import { useParams , useLocation } from 'react-router-dom';


const Pacijenti = () => {

  const location = useLocation();
  const {id} = useParams();
  const [pacijenti, setPacijenti ] = useState() ;
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)

  const [sortOrder, setSortOrder] = useState('');

  useEffect( () => {
    if(pacijenti == null ){
      axios.get(id ? `api/pacijenti/${id}` : "api/pacijenti").then((res) => {
        console.log(res.data);
        if(res.data.pacijenti == null)
          setPacijenti([res.data.pacijent])
        else
          setPacijenti(res.data.pacijenti );
      }).catch( (e) =>
        console.log(e));
    }
  } );

  const handleSort = (event) => {
    const sortBy = event.target.value;
    setSortOrder(sortBy);
    let sortedPacijenti;
    if (sortBy === 'ime') {
      sortedPacijenti = [...pacijenti].sort((a, b) => {
        if (a.ime < b.ime) return -1;
        if (a.ime > b.ime) return 1;
        return 0;
      });
    } else if (sortBy === 'email') {
      sortedPacijenti = [...pacijenti].sort((a, b) => {
        if (a.email < b.email) return -1;
        if (a.email > b.email) return 1;
        return 0;
      });
    } else {
      sortedPacijenti = pacijenti;
    }
    setPacijenti(sortedPacijenti);
  };

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
      {location.pathname == "/pacijenti" && (
      <div className="sort-container">
          <label>Sortiraj po: </label>
          <select value={sortOrder} onChange={handleSort}>
            <option value=""> Odaberite </option>
            <option value="ime"> Ime</option>
            <option value="email"> E-mail</option>
          
          </select>
        </div>
       )} 
      <div className='pacijentKontejner'>
        
          {pacijenti == null ? <></> : pacijenti.map( (pacijent) => (
            <Pacijent pacijent ={pacijent} key={pacijent.id} />
            ) )}
        </div>
    </>    
  )
}

export default Pacijenti