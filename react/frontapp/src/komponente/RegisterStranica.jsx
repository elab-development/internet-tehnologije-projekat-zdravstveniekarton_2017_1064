import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterStranica = () => {
    const [userData, setUserData] = useState({
        name:"",
        email: "",
        password: "",
        user_type: ""
      });

      let navigate = useNavigate(); 
    
      function handleInput(e) {
        //console.log(e) ;
        let newUserData = userData;
        newUserData[e.target.name] = e.target.value;
        console.log(newUserData);
        setUserData(newUserData);
      } 

      function handleRegister(e) {
        e.preventDefault();  
    
        axios.post("api/register", userData).then( (res) => {
          console.log(res.data);
          navigate('/login');
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
            
            <form onSubmit={handleRegister}>
              <div className="mb-md-5 mt-md-4 pb-5">

                <h2 className="fw-bold mb-2 text-uppercase">Registracija</h2>
                <p className="text-white-50 mb-5">Unesite svoje podatke!</p>

                <div data-mdb-input-init className="form-outline form-white mb-4">
                  <input type="name" 
                    id="typeNameX" 
                    className="form-control form-control-lg" 
                    placeholder='Unesite ime.' 
                    name= "name"
                    onInput={handleInput} />
                  <label className="form-label" htmlFor="typeNameX">Ime</label>
                </div>

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
                    placeholder='Unesite lozinku. Minimum 6 karaktera!' 
                    name= "password"
                    onInput={handleInput} />
                  <label className="form-label" htmlFor="typePasswordX">Lozinka</label>
                </div>

                <div data-mdb-input-init className="form-outline form-white mb-4">
                <select 
                    id="typeUserTypeX" 
                    className="form-select form-control-lg" 
                    name="user_type" 
                    onChange={handleInput}>
                    <option value="">Izaberite tip korisnika</option>
                    <option value="lekar">Lekar</option>
                    <option value="sestra">Sestra</option>
                    <option value="pacijent">Pacijent</option>
                </select>
                <label className="form-label" htmlFor="typeUserTypeX">Tip korisnika</label>
                </div>
                
                <button data-mdb-button-init data-mdb-ripple-init
                 className="btn btn-outline-light btn-lg px-5" 
                 type="submit"> Register </button>
            
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

export default RegisterStranica