import React from 'react'
import Lekar from './Lekar.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Lekari = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const [lekari, setLekari ] = useState() ;
  const {id} =useParams();
  //ako se nesto izmeni u komponenti (da se ucita samo jednom)
  useEffect( () => {
    if(lekari == null ){

      axios.get(id ? `api/lekari/${id}` : `api/lekari?page=${currentPage}&per_page=${itemsPerPage}`).then((res) => {
        console.log(res.data);
        if(res.data.lekari == null)
        {  
          setLekari([res.data.lekar])
        }
        else
          setLekari(res.data.lekari );
      }).catch( (e) =>
        console.log(e));
    }
  }, [currentPage] );

  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
              <span aria-hidden="true">«</span>
            </a>
          </li>
          
          {/* pravi niz odredjene duzine i onda mapira preko da napravi novi niz jsx elemenata
          racuna potreban broj strana da prikaze sve lekare ako je ogranicenje 5 po str //
           (_, i) poziva se za svaki(_ jer nam nije bitno sta, i index) */}
          {lekari && lekari.length > 0 && 
          Array.from({ length: Math.ceil(lekari.length / itemsPerPage) }, (_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}` }>
              <a className="page-link" href="#" onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>  
        <div className="all-osoblje">
        {lekari && lekari.length > 0 ? (
          //slice ekstrahuje sekciju niza i vraca kao niz tih elemenata niz.slice(start index, end index)
          lekari.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((lekar) => (
            <Lekar lekar={lekar} key={lekar.id} />
          ))
        ) : (
          <div>Loading...</div>
        )}
        </div>
    </div>
    
    
    
    
    // <div className='all-osoblje'>
    //   {lekari == null ? <></> : lekari.map( (lekar) => (
    //     <Lekar lekar ={lekar} key= {lekar.id} />
    //     ) )}
    // </div>
  )
}

export default Lekari