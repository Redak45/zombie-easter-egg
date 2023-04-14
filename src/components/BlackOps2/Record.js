import React from 'react';
import '../styles/record.css';
import Timer from '../Timer';


const TranzitRecord = ({records}) => {
  

  return (
    <div className="ContainerRecord">
      <h1> ZOMBIE EE </h1>
      
      <div className="banner bannerTranzit">
        <h2> TRANZIT : SPEEDRUN RECORD </h2> 
      </div>

      <div className="trophydescription">
        <p> Vous trouverez ci-dessous le top 7 des joueurs les plus rapides à réaliser le speedrun sur <span> TRANZIT </span> </p> 
      </div>
    
      <Timer /> 
        
      <div className="record">
        <div className="recordtitle"> 
          <ul>
            <li>Rang</li>
            <li>Joueur</li>
            <li>Temps</li>
          </ul>  
        </div>

        <div className="recordplayer">
          {records.map((record) => (
            <li key={record.id}>
              <span>{record.id}</span>
              <span>{record.name}</span>
              <span>{record.time}</span>
            </li>
          ))}
        </div> 

       
      </div>
    </div>
  ); 

};

export default TranzitRecord;
