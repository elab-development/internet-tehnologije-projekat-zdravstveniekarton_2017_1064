
import './App.css';
import Lekari from './komponente/Lekari';
import LoginStranica from './komponente/LoginStranica';
import NavBar from './komponente/NavBar';
import RegisterStranica from './komponente/RegisterStranica';
import Sestre from './komponente/Sestre';
//moze i alijasi npr BrowserRouter as BRouter
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import Pacijenti from './komponente/Pacijenti';
import Kartoni from './komponente/Kartoni';

import Pregledi from './komponente/Pregledi';
import PreglediKartona from './komponente/PreglediKartona';
import Termini from './komponente/Termini';
import AddPacijent from './komponente/AddPacijent';
import AddPregled from './komponente/AddPregled';
import IzvestajPregleda from './komponente/IzvestajPregleda';
import AddKarton from './komponente/AddKarton';
import AddTermin from './komponente/AddTermin';
import Pocetna from './komponente/Pocetna';


function App() {
 
  // const [token, setToken] = useState();
  // function addToken(auth_token) {
  //   setToken(auth_token);  
  //   console.log("evo ga token i app.jsa",  token)
  // }
  
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
      const storedToken = window.sessionStorage.getItem('auth_token');
      if (storedToken) {
        setToken(storedToken);
        console.log("Token updated:", storedToken);
      }
      setLoading(false);
    }, [token]);


    function addToken(auth_token) {
      setToken(auth_token);
    }
  
  
  return ( 
    <BrowserRouter className="App">
      {loading? (<p>Loading..</p>) : (
        <Routes>
        
        <Route path='/login' element = { <LoginStranica addToken={addToken}  /> } />  
        <Route path='/register' element = {   <RegisterStranica/> } />
        <Route path='/' element = {<NavBar token={token} />} >
          < Route path='/pocetna' element={<Pocetna/>} />  
          <Route path='lekari' element = { <Lekari> </Lekari> } /> 
          <Route path='lekari/:id' element = { <Lekari> </Lekari> } /> 
          
          <Route path='sestre' element={ <Sestre> </Sestre> }/>
          <Route path='sestre/:id' element={ <Sestre> </Sestre> }/>
          
          <Route path='pacijenti' element={ <Pacijenti/> }/>
          <Route path='pacijenti/:id' element={ <Pacijenti/> }/>
          <Route path='pacijenti/dodaj' element={ <AddPacijent/> }/>
          
          <Route path='kartoni' element={ <Kartoni/> }/>
          <Route path='kartoni/:id' element={ <Kartoni/> }/> 
          <Route path="/kartoni/:id/pregledi" element={<PreglediKartona />} />
          <Route path='kartoni/dodaj' element={ <AddKarton/> }/>
          
          <Route path='pregledi' element={ <Pregledi/> }/>
          <Route path='pregledi/:id' element={ <Pregledi/> }/>
          <Route path='/pregledi/dodaj' element={<AddPregled />}/>
         
          <Route path='termini' element={ <Termini/> }/>
          <Route path='termini/:id' element={ <Termini/> }/>
          <Route path='termini/dodaj' element={ <AddTermin/> }/>
  
          <Route path='/izvestajpregleda/:id' element= {<IzvestajPregleda/> }/>
  
        </Route>
        
       </Routes>

      )}
        
    </BrowserRouter>
  );
}

export default App;
