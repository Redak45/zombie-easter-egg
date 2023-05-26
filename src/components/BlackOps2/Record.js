import '../styles/record.css';
import iconYoutube from '../icons/youtube.png';
import iconTwitch from '../icons/twitch.png';
import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/userContext'


const Record = ({ records, maps, mapName }) => {

  const { timeElapsed, setTimeElapsed, mapTimes, setMapTimes } = useContext(UserContext);
  const [timerActive, setTimerActive] = useState(false);

  const [isTimeValidated, setIsTimeValidated] = useState(false);

  const { handleValidation } = useContext(UserContext)


  const handleClick = () => {
    if (mapTimes.hasOwnProperty(mapName)) {
      handleValidation(mapName, timeElapsed);
      setIsTimeValidated(true);
      handleResetTimer();
    }
  };

  useEffect(() => {
    if (timerActive) {
      const interval = setInterval(() => {
        setTimeElapsed(prevTimeElapsed => {
          const seconds = prevTimeElapsed.seconds + 1;
          const minutes = prevTimeElapsed.minutes + Math.floor(seconds / 60);
          return {
            minutes: minutes,
            seconds: seconds % 60
          };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerActive, setTimeElapsed]);

  const handleStartTimer = () => {
    setTimerActive(true);
  };

  const handleStopTimer = () => {
    setTimerActive(false);
  };

  const handleResetTimer = () => {
    setTimeElapsed({ minutes: 0, seconds: 0 });
    setTimerActive(false);
  };

  const handleResetValidation = () => {
    setIsTimeValidated(false);
  };


  return (
    <div className="ContainerRecord">

      <div className="banner bannerTranzit">
        <h2> {maps} : SPEEDRUN RECORD </h2>
      </div>

      <div className="trophydescription">
        <p> Vous trouverez ci-dessous le top 7 des joueurs les plus rapides à réaliser le speedrun sur <span> {maps} </span> </p>
      </div>


      <div className="timerButton">
        <button className="timerButton2" onClick={() => {handleResetTimer(); handleResetValidation() }}>
          Réinitialiser
      </button>
        {!timerActive ? (
          <button className="timerButton1" onClick={() => {handleStartTimer(); handleResetValidation() }}>
            Démarrer
        </button>
        ) : (
            <button className="timerButton1" onClick={handleStopTimer}>
              Stop
        </button>
          )}
        {timerActive && (
          <div className="timer">
            {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes}:
          {timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
          </div>
        )}
        {!timerActive && (timeElapsed.minutes > 0 || timeElapsed.seconds > 0) && (
          <div className="timer">
            <span>
              {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes} :{' '}
              {timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
            </span>
            <button className="timerButton3" onClick={handleClick}>
              Valider votre temps
            </button>

          </div>
        )}
        {isTimeValidated && <p className="validatedText"> Votre temps est valide</p>}
      </div>


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
