import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../context/userContext";


const Timer = () => {

  const { timeElapsed, setTimeElapsed } = useContext(UserContext);
  const [timerActive, setTimerActive] = useState(false);
  
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
  }, [timerActive]);

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

      <button className="timerButton2" onClick={handleResetTimer}> Réinitialiser</button>

      {!timerActive ? (
        <button className="timerButton1" onClick={handleStartTimer}> Démarrer</button>
      ) : (
          <button className="timerButton1" onClick={handleStopTimer}> Stop</button>
        )}



      {timerActive && (
        <div className="timer">
          {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes}:{timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
        </div>
      )}

      {!timerActive && (timeElapsed.minutes > 0 || timeElapsed.seconds > 0) && (
        <div className="timer">
          Votre temps est de {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes}:
             {timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
        </div>
      )}

    </div>

  );

};

export default Timer;