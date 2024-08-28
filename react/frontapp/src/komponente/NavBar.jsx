//precica rfce

import React from 'react'
import  {Link} from "react-router-dom";
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({token}) => {
 
  let navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    //console.log("ovde pocinje logout")
    let config = {
      method: "post",
      url: 'api/logout',
      headers: {
         Authorization: "Bearer " + token,
      },
    };
    //console.log("ovde pocinje axios")
    console.log(config)

    axios.request(config).then((response) => {
      console.log(response)
      if (response.status === 200) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.removeItem("auth_token");
        window.sessionStorage.removeItem("user_type");
        navigate("/login");
      } else {
        console.error("Logout failed");
        
      }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div >

      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/pocetna">E-karton</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Početna
              </a>  
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/lekari">
                Lekari
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sestre">
                Sestre
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pacijenti
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/pacijenti">Lista pacijenata</Link></li>
                <li><Link className="dropdown-item" to="/pacijenti/dodaj">Dodaj pacijenta</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Kartoni
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/kartoni">Lista kartona</Link></li>
                <li><Link className="dropdown-item" to="/kartoni/dodaj">Dodaj karton</Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pregledi
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/pregledi">Lista pregleda</Link></li>
                <li><Link className="dropdown-item" to="/pregledi/dodaj">Dodaj pregled</Link></li>
              </ul>
            </li>

           <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Termini
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/termini">Lista termina</Link></li>
                <li><Link className="dropdown-item" to="/termini/dodaj">Dodaj termin</Link></li>
              </ul>
            </li>
            
            {/*             
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
             */}
            {(token == null) ? ( <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
              </li> )
              : (<li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogout}>
                  Logout
                </a>
              </li>)
              }
            
          </ul>

        </div>
      </div>
    </nav>  
    <Outlet />
  </div>
  )
}

export default NavBar