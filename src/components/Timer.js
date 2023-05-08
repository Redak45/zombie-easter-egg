import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/userContext";

const Timer = () => {
  const { timeElapsed, setTimeElapsed, mapTimes, setMapTimes  } = useContext(UserContext);
  const [timerActive, setTimerActive] = useState(false);
  const { timeElapsedTranzit, setTimeElapsedTranzit } = useContext(UserContext);
  const { timeElapsedDieRise, setTimeElapsedDieRise } = useContext(UserContext);
  const { timeElapsedMod, setTimeElapsedMod } = useContext(UserContext);
  const { timeElapsedBuried, setTimeElapsedBuried } = useContext(UserContext);
  const { timeElapsedOrigins, setTimeElapsedOrigins } = useContext(UserContext);


  const handleValidation = () => {
  setMapTimes(prevMapTimes => ({
    ...prevMapTimes,
    tranzit: timeElapsedTranzit,
    dieRise: timeElapsedDieRise,
    mod: timeElapsedMod,
    buried: timeElapsedBuried,
    origins: timeElapsedOrigins,
  }));
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

  return (
    <div className="timerButton">
      <button className="timerButton2" onClick={handleResetTimer}>
        Réinitialiser
      </button>
      {!timerActive ? (
        <button className="timerButton1" onClick={handleStartTimer}>
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
         <span> {' '} 
          {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes} :{' '}
          {timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
          </span>
          <button className="timerButton3" onClick={() => handleValidation(timeElapsed)}>
            Valider votre temps
          </button>
        </div>
      
      )}
    
    </div>
  );
};

export default Timer;
