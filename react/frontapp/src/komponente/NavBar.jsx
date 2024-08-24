//precica rfce

import React from 'react'
import  {Link} from "react-router-dom";
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function NavBar({token}) {
  function handleLogout() {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'api/logout',
      headers: {  
        Authorization : 'Bearer '+window.sessionStorage.getItem("auth_token")
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      window.sessionStorage.setItem("auth_token", null);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div >

      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E-karton</a>
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Početna
              </a>
            </li>
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
            <li className="nav-item">
              <a className="nav-link" href="/pacijenti">
                Pacijenti
              </a>
            </li>

            
            
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
            {token == null ?
              <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
              </li> :
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={handleLogout}>
                  Logout
                </a>
              </li>}
            
          </ul>

        </div>
      </div>
    </nav>  
    <Outlet />
  </div>
  )
}

export default NavBar