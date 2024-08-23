import React from 'react'

//destrukturiranje objekta umesto da prima props pa dole d pozivamo props.lekar samo stavimo u viticastoj odmah objekat lekar

function Lekar({lekar}) {
  
  return (
    <div className="card" > 
        <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika"  />
        <div className="card-body">
            <h3 className='card-title'> {lekar.ime} </h3>   
            <p className='card-text'> {lekar.info} </p>
        </div>
    </div>

  )
}

export default Lekar