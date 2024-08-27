import React from 'react';
import { useState } from 'react'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginStranica = ({addToken}) => {

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  let navigate = useNavigate();

  function handleInput(e) {
    //console.log(e) ;
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    //console.log(newUserData);
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();  

    axios.post("api/login", userData).then( (res) => {
      console.log(res.data);
      if(res.data.success === true){
        window.sessionStorage.setItem("auth_token", res.data.access_token); 
        window.sessionStorage.setItem("user_type", res.data.user_type); 
      }
      addToken(res.data.access_token);
      navigate('/');
    }).catch( (e) =>
       console.log(e));
  }
 

  return (
    <section className="vh-100 gradient-custom">
    <div className="container-fluid py-5 h-100"> 
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <div className="card1 bg-dark text-white" style={{ borderRadius: "1rem  " }}>
            <div className="card1-body p-5 text-center">
            <form onSubmit={handleLogin}>
              <div className="mb-md-5 mt-md-4 pb-5">

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Unesite email i lozinku!</p>

                <div data-mdb-input-init className="form-outline form-white mb-4">
                  <input type="email" 
                    id="typeEmailX" 
                    className="form-control form-control-lg" 
                    placeholder='Unesite ispravnu email adresu.'
                    name = "email"
                    onInput={handleInput} />
                  <label className="form-label" htmlFor="typeEmailX">Email</label>
                </div>

                <div data-mdb-input-init className="form-outline form-white mb-4">
                  <input type="password" 
                    id="typePasswordX" 
                    className="form-control form-control-lg" 
                    placeholder='Unesite lozinku.' 
                    name= "password"
                    onInput={handleInput} />
                  <label className="form-label" htmlFor="typePasswordX">Lozinka</label>
                </div>

                
                <button data-mdb-button-init data-mdb-ripple-init
                 className="btn btn-outline-light btn-lg px-5" 
                 type="submit"> Login </button>

                
              </div>

              <div>
                <p className="mb-0">Nemate nalog? <a href="/register" 
                className="text-white-50 fw-bold">Registrujte se</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default LoginStranica