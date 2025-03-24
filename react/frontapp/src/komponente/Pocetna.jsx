import React from 'react'
import slika from '../slike/slika1.jpg'

const Pocetna = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${slika})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1><strong>Dobrodošli na E-karton!</strong></h1>
    </div>
  )
}

export default Pocetna