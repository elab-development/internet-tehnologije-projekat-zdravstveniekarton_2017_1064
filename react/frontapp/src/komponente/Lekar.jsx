import React from 'react'

//destrukturiranje objekta umesto da prima props pa dole d pozivamo props.lekar samo stavimo u viticastoj odmah objekat lekar

function Lekar({lekar}) {
  
  return (

      <div className="card">
        <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika"  />
        <div className="card-body">
          <h5 className="card-title">{lekar.ime}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{lekar.specijalizacija}</h6>
          <p className="card-text">{lekar.email}</p>
        </div>
      </div>

  )
}

export default Lekar