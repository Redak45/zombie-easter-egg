import React from 'react';
import '../styles/record.css';
import Timer from '../Timer';
import iconYoutube from '../icons/youtube.png';
import iconTwitch from '../icons/twitch.png';


const Record = ({records,maps}) => {
  

  return (
    <div className="ContainerRecord">
      
      <div className="banner bannerTranzit">
        <h2> {maps} : SPEEDRUN RECORD </h2> 
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
            <li>Game</li>
          </ul>  

          {records.map((record) => (
         <div className="recordplayer" key={record.id}>
         <li>
            <span>{record.id}</span>
            <span>{record.name}</span>
            <span>{record.time}</span>
          {record.link.includes('youtube') ? (
            <a href={record.link}>
          <img src={iconYoutube} alt="youtube" width="30" />
            </a>
            ) : (
            <a href={record.link}>
          <img src={iconTwitch} alt="twitch" width="27" />
            </a>
            )}
            </li>
          </div>
          ))}
        </div> 
   
      </div>
    </div>
  ); 

};

export default Record;
