import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import { Link } from 'react-router-dom';
import '../../styles/account.css';

const AccountHome = () => {
    
  const { timerData } = useContext(UserContext);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2 className="AccountTitle">Temps de chaque map :</h2>
      <div className="AccountContainer">
        <div className="AccountMap">
          Tranzit : <span>{formatTime(timerData && timerData.tranzit)}</span>
          <Link to="/recordtranzit">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Die rise : <span>{formatTime(timerData && timerData.dierise)}</span>
          <Link to="/recorddierise">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          M O D :<span>{formatTime(timerData && timerData.mobofthedead)}</span>
          <Link to="/recordmobofthedead">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Buried : <span>{formatTime(timerData && timerData.buried)}</span>
          <Link to="/recordburied">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Origins : <span>{formatTime(timerData && timerData.origins)}</span>
          <Link to="/recordorigins">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
