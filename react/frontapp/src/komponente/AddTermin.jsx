import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const AddTermin = () => {
    
  const notify=() => {}
    let navigate = useNavigate();

    const [terminData, setTerminData] = useState({
        datum: "",
        vreme: "",
        lekar_id: null,
        sestra_id: null,
    });

    const [lekari, setLekari] = useState([]);
    const [selectedLekar, setSelectedLekar] = useState();

    useEffect(() => {
    axios.get('api/lekari').then((res) => {
        setLekari(res.data.lekari)
        }).catch( (e) =>
          console.log(e));;
    }, []);

    const handleLekarChange = (e) => {
        setSelectedLekar(e.target.value);
        setTerminData((prevData) => ({ ...prevData, lekar_id: parseInt(e.target.value) }));
   };

   const [sestre, setSestre] = useState([]);
    const [selectedSestra, setSelectedSestra] = useState();

    useEffect(() => {
    axios.get('api/sestre').then((res) => {
        setSestre(res.data.sestre)
        }).catch( (e) =>
          console.log(e));;
    }, []);

    const handleSestraChange = (e) => {
        setSelectedSestra(e.target.value);
        setTerminData((prevData) => ({ ...prevData, sestra_id: parseInt(e.target.value) }));
   };


      function handleInput(e) {
        //console.log(e) ;
        let newTerminData = terminData;
        newTerminData[e.target.name] = e.target.value;
        //console.log(newterminData);
        setTerminData(newTerminData);
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
    
        axios.post("api/termini", terminData, {
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem("auth_token")}`,
              },
        }).then( (res) => {
          console.log(res.data);
          if(res.data[0] === 'Termin je kreiran uspesno.'){
            navigate('/termini')
          }else{
            toast.error("Neispravni podaci! Pokušajte ponovo!", {
              position: "top-center"
            });
          }
          
        }).catch( (e) =>
           console.log(e));
      }
  

  return (
    <div className="formaAdd">
      <h2>Dodaj termin</h2>
      <form onSubmit={handleSubmit}>
        <label>Datum:</label>
        <input type="text" name = "datum"
                    onInput={handleInput} placeholder='31.12.1999.' />
        <br/>
        <label>Vreme:</label>
        <input type="text" name = "vreme"
                    onInput={handleInput} placeholder='08:54' />
        <br/>
       
        <label>Lekar:</label>
        <select value={selectedLekar} onChange={handleLekarChange}>
          <option value="" name = "lekar_id">Odaberite lekara</option>
          {lekari.map((lekar) => (
            <option key={lekar.id} value={lekar.id}>
              {lekar.ime} <></>
              - {lekar.specijalizacija}  
            </option>
          ))}
        </select>
        <br/>
        <label>Sestra:  </label>
        <select value={selectedSestra} onChange={handleSestraChange}>
          <option value="" name = "sestra_id">Odaberite sestru</option>
          {sestre.map((sestra) => (
            <option key={sestra.id} value={sestra.id}>
              {sestra.ime} 
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button type="submit" onClick={notify}>Dodaj termin</button>
        <ToastContainer/>
      </form>
    </div>
  );
}

export default AddTermin;