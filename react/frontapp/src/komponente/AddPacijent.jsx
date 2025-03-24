import React from 'react';
import { useState } from 'react'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const AddPacijent = () => {
    const notify= () =>{ }
    let navigate = useNavigate();

    const [pacijentData, setPacijentData] = useState({
      ime: "",
      email: "",
      datum_rodjenja: "",
      telefon: "",
      });
      
      function handleInput(e) {
        //console.log(e) ;
        let newPacijentData = pacijentData;
        newPacijentData[e.target.name] = e.target.value;
        //console.log(newPacijentData);
        setPacijentData(newPacijentData);
      }
      if(window.sessionStorage.getItem("user_type") === 'lekar' || 
      window.sessionStorage.getItem("user_type") == null) {
          return(
              <div className='text-center'>
                  <h3>Neautorizovan pristup. Mogu pristupiti samo sestre.</h3>
                  <h3>Niste ulogovani?</h3>
                  <a href="/login" 
                  className="text-black-50 fw-bold"><h3>Ulogujte se</h3></a>
              </div>
          )
      }

      function handleSubmit(e) {
        e.preventDefault();  
    
        axios.post("api/pacijenti", pacijentData, {
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
              },
        }).then( (res) => {

           
          console.log(res.data);
          if(res.data[0] === "Pacijent je kreiran uspesno."){
            navigate('/pacijenti')
          } else{
            toast.error("Neispravni podaci! Pokušajte ponovo!", {
              position: "top-center"
            });
          }
          
        }).catch( (e) =>
           console.log(e));
      }
  

  return (
    <div className="formaAdd">
      <h2>Dodaj pacijenta</h2>
      <form onSubmit={handleSubmit}>
        <label>Ime:</label>
        <input type="text" name = "ime"
                    onInput={handleInput} placeholder='Ime prezime'/>
        <br/>
        <label>Email:</label>
        <input type="email" name = "email"
                    onInput={handleInput} placeholder='mail@example.com'/>
        <br/>
        <label>Datum rođenja:</label>
        <input type="text" name = "datum_rodjenja"
                    onInput={handleInput} placeholder='31.12.1999.'/>
        <br/>
        <label>Telefon:</label>
        <input type="text" name = "telefon"
                    onInput={handleInput} placeholder='1234567'/>
        <br/>
        <button type="submit" onClick={notify} >Dodaj pacijenta</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AddPacijent;