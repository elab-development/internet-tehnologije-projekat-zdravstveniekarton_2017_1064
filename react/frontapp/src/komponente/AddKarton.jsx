import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const AddKarton = () => {
    
    let navigate = useNavigate();

    const [kartonData, setKartonData] = useState({
        alergije: "",
        pacijent_id: null,
    });

    const [pacijenti, setPacijenti] = useState([]);
    const [selectedPacijent, setSelectedPacijent] = useState();

    useEffect(() => {
    axios.get('api/pacijenti').then((res) => {
        setPacijenti(res.data.pacijenti)
        }).catch( (e) =>
          console.log(e));;
    }, []);

    const handlePacijentChange = (e) => {
        setSelectedPacijent(e.target.value);
        setKartonData((prevData) => ({ ...prevData, pacijent_id: parseInt(e.target.value) }));
   };



      
      function handleInput(e) {
        //console.log(e) ;
        let newKartonData = kartonData;
        newKartonData[e.target.name] = e.target.value;
        //console.log(newKartonData);
        setKartonData(newKartonData);
      }

      if(window.sessionStorage.getItem("user_type") === 'pacijent' || 
      window.sessionStorage.getItem("user_type") == null) {
          return(
              <div>
                  Neautorizovan pristup. Mogu pristupiti samo lekari i sestre. <br/>
                  Niste ulogovani?
                  <a href="/login" 
                  className="text-black-50 fw-bold">Ulogujte se</a>
              </div>
          )
      }

      function handleSubmit(e) {
        e.preventDefault();  
    
        axios.post("api/kartoni", kartonData, {
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
              },
        }).then( (res) => {

           
          console.log(res.data);
          if(res.data[0] === 'Karton je uspesno kreiran'){
            navigate('/kartoni')
          }
          
        }).catch( (e) =>
           console.log(e));
      }
  

  return (
    <div className="formaAdd">
      <h2>Dodaj karton</h2>
      <form onSubmit={handleSubmit}>
        <label>Alergije:</label>
        <textarea type="text" name = "alergije"
                    onInput={handleInput} />
        <br/>
        <label>Pacijent:</label>
        <select value={selectedPacijent} onChange={handlePacijentChange}>
          <option value="" name = "pacijent_id">Odaberite pacijenta</option>
          {pacijenti.map((pacijent) => (
            <option key={pacijent.id} value={pacijent.id}>
              Ime: {pacijent.ime} <></>
              Datum rodjenja:   {pacijent.datum_rodjenja}  <></>
              {pacijent.email} 
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button type="submit">Dodaj karton</button>
      </form>
    </div>
  );
}

export default AddKarton;