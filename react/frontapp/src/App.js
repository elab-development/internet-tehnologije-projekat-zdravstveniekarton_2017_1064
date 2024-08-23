
import './App.css';
import Lekari from './komponente/Lekari';
import LoginStranica from './komponente/LoginStranica';
import NavBar from './komponente/NavBar';
import RegisterStranica from './komponente/RegisterStranica';
import Sestre from './komponente/Sestre';
//moze i alijasi npr BrowserRouter as BRouter
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter className="App">
     <NavBar> </NavBar>
     <Routes>
      <Route path='/login' element = { <LoginStranica> </LoginStranica> } />  
      <Route path='/register' element = {   <RegisterStranica/> } />
      <Route path='/lekari' element = { <Lekari> </Lekari> } />  
      <Route path='/sestre' element={ <Sestre> </Sestre> }/>
     </Routes>
     
    

    </BrowserRouter>
  );
}

export default App;
