//precica rfce

import React from 'react'
import  {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className='navBar'>
        <Link to='/'  > Početna </Link>
        <Link to='/lekari' className='all-osoblje' > Lekari </Link>
        <Link to='/sestre' className='all-osoblje'> Medicinske sestre </Link>
    
    </div>
  )
}

export default NavBar