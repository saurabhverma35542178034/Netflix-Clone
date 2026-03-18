import React, { useEffect, useRef, useState } from 'react'
import './Title.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title,category }) => {
    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }
    const cardsRef = useRef();
  
    
     
const [apiData, setApiData] = useState(null);

useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=62b816d8')
        .then((res) => res.json())
        .then((data) => setApiData(data));

    if (cardsRef.current) {
        cardsRef.current.addEventListener('wheel', handleWheel);
    }

    return () => {
        if (cardsRef.current) {
            cardsRef.current.removeEventListener('wheel', handleWheel);
        }
    };
}, []);

useEffect(() => {
    console.log(apiData);
}, [apiData]);
    
  return (
    <div className='title-cards'>
          <h2>{title?title:'Popular on Netflix'}</h2>
          <div className="card-list" ref={ cardsRef}>
              {cards_data.map((card,index) => {
                  return <div className="card" key={index}>
                      <img src={card.image} alt="" />
                      <p>{card.name}</p>
                  </div>
               })}
          </div>
    </div>
  )
}

export default TitleCards
