import React from 'react';
import {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import  './ChatiCards.css';


function ChatiCards() {
    const [people, setPeople] =  useState([])

    useEffect(() => {
         database.collection("people").onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data)))

    }, [])
    return (
        <div>
          <h2>ChatiCards</h2>
           <div className="chatiCard__cardContainer">
          {people.map(person => (
             <TinderCard 
             className="swipe"
             key={person.name} 
             preventSwipe={['up', 'down']}
             > 
                 <div className="card" 
                  style={{ backgroundImage: `url(${person.url})` }}>
                     <h3>{person.name}</h3>
                 </div>
             </TinderCard>
          ))}
         </div>
        </div>
    )
}

export default ChatiCards
