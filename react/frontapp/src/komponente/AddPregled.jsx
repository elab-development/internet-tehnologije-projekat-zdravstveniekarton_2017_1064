import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import _ from 'lodash'



const AddPregled = () => {
    
    let navigate = useNavigate();

    

    const [termini, setTermini] = useState([]);
    const [selectedTermin, setSelectedTermin] = useState();
    const [kartoni, setKartoni] = useState([]);
    const [selectedKarton, setSelectedKarton] = useState();

    

    useEffect(() => {
    axios.get('api/termini').then((res) => {
     
      setTermini(_.sortBy((res.data.termini),['datum', 'vreme'] ));
        }).catch( (e) =>
          console.log(e));
    }, []);
    
    useEffect(() => {
        axios.get('api/kartoni').then((res) => {
          setKartoni(res.data.kartoni);
            }).catch( (e) =>
              console.log(e));
        }, []);
    

    const handleKartonChange = (e) => {
        setSelectedKarton(e.target.value);
        setPregledData((prevData) => ({ ...prevData, karton_id: parseInt(e.target.value) }));
    };

    
    const handleTerminChange = (e) => {
         setSelectedTermin(e.target.value);
         setPregledData((prevData) => ({ ...prevData, termin_id: parseInt(e.target.value) }));
    };

    const [PregledData, setPregledData] = useState({
        simptomi: "",
        dijagnoza: "",
        terapija: "",
        termin_id: null,
        karton_id: null
      });


      
      function handleInput(e) {
        console.log(e) ;
        let newPregledData = PregledData;
        newPregledData[e.target.name] = e.target.value;
        console.log(newPregledData);
        setPregledData(newPregledData);
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
    
        axios.post("api/pregledi", PregledData, {
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
              },
        }).then( (res) => {

           
          console.log(res.data);
          if(res.data[0] === "Pregled je kreiran uspesno."){
             navigate('/pregledi')
            
          }
          
        }).catch( (e) =>
           console.log(e));     
      }
  

  return (
    <div className="formaAdd">
      <h2>Dodaj Pregled</h2>
      <form onSubmit={handleSubmit}>
        <label>Simptomi:</label>
        <textarea type="text" name = "simptomi"
                    onInput={handleInput} />
        <br/>
        <label>Dijagnoza:</label>
        <input type="text" name = "dijagnoza"
                    onInput={handleInput} />

          <a href='https://mediately.co/rs/icd'  target="_blank"> Pretrazi diganoze</a>
        <br/>
        <br/>
        <label>Terapija:</label>
        <textarea  type="text" name = "terapija"
                    onInput={handleInput} />
        <br/>
        <label>Termin:</label>
        <select value={selectedTermin} onChange={handleTerminChange}>
          <option value="" name = "termin_id">Izaberite termin</option>
          {termini.map((termin) => (
            <option key={termin.id} value={termin.id}>
              Datum: {termin.datum} <>  </>
              Vreme: {termin.vreme}   <>    </>
              Lekar: {termin.lekar.ime}
            </option>
          ))}
        </select> 
        <br/>
        <label>Karton:</label>
        <select value={selectedKarton} onChange={handleKartonChange}>
          <option value="">Izaberite karton</option>
          {kartoni.map((karton) => (
            <option key={karton.id} value={karton.id}>
              Ime: {karton.pacijent.ime} <></>
              Datum rodjenja: {karton.pacijent.datum_rodjenja} <></>
              {karton.pacijent.email} 
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button type="submit">Dodaj Pregled</button>
      </form>
    </div>
  );
}

export default AddPregled;