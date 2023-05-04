import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

const AccountHome = () => {
    
  const { timeElapsed } = useContext(UserContext);

  return (
    <div>
      <h2>Account Home</h2>
      <h2>
        Temps Tranzit:  {(
        <div className="Accountimer">
          {timeElapsed.minutes < 10 ? `0${timeElapsed.minutes}` : timeElapsed.minutes}:{timeElapsed.seconds < 10 ? `0${timeElapsed.seconds}` : timeElapsed.seconds}
        </div>
      )}
      </h2>
    </div>
  );
};

export default AccountHome;
