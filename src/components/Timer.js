import React, { useState, useEffect } from 'react';


const Timer = () => {

    const [timeElapsed, setTimeElapsed] = useState({ minutes: 0, seconds: 0 });
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
        {!timerActive ? (
            <button className="timerButton1" onClick={handleStartTimer}> Chronometrer</button>
        ) : (
            <button className="timerButton1" onClick={handleStopTimer}> Stop</button>
        )}
        <button className="timerButton2" onClick={handleResetTimer}> Réinitialiser</button>
        

        {timerActive && (
            <div className="timer">
             {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes}:{timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
            </div>
        )}

        {!timerActive && timeElapsed > 0 && (
            <div className="timer">
            Temps total : {timeElapsed}s
            </div>
        )}       
            
        </div>
      
      ); 

};

export default Timer;