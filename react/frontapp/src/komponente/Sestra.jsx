import React from 'react'

function Sestra({sestra}) {
  return (
    <div className="card">
    <img className='card-img-top' src="https:/picsum.photos/200" alt="Slika"  />
    <div className="card-body">
      <h5 className="card-title">{sestra.ime}</h5>
      <p className="card-text">{sestra.email}</p>
    </div>
  </div>
  )
}

export default Sestra