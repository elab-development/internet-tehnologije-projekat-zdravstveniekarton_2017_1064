
import './App.css';
import Lekari from './komponente/Lekari';
import LoginStranica from './komponente/LoginStranica';
import NavBar from './komponente/NavBar';
import RegisterStranica from './komponente/RegisterStranica';
import Sestre from './komponente/Sestre';
//moze i alijasi npr BrowserRouter as BRouter
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Pacijenti from './komponente/Pacijenti';

function App() {
 
  const [token, setToken] = useState();
  function addToken(auth_token) {
    setToken(auth_token);  
  }
  return (
    <BrowserRouter className="App">
     <Routes>
      <Route path='/login' element = { <LoginStranica addToken={addToken}  /> } />  
      <Route path='/register' element = {   <RegisterStranica/> } />
      <Route path='/' element = {<NavBar token={token} />} >
        <Route path='lekari' element = { <Lekari> </Lekari> } />  
        <Route path='sestre' element={ <Sestre> </Sestre> }/>
        <Route path='pacijenti' element={ <Pacijenti/> }/>
      </Route>
      
     </Routes>
     
    

    </BrowserRouter>
  );
}

export default App;
