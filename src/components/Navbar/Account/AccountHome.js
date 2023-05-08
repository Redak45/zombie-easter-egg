import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import { Link } from "react-router-dom";
import '../../styles/account.css';

const AccountHome = () => {

  const { mapTimes } = useContext(UserContext);



  return (
    <div>
      <h2 className="AccountTitle">Temps de chaque map :</h2>
      <div className="AccountContainer">
        <div className="AccountMap">
          Tranzit : 
          <span>{`${mapTimes.tranzit.minutes}:${mapTimes.tranzit.seconds}`}</span>
          <Link to={"/recordtranzit"}><button className="buttonSeeRecord">Voir</button></Link>
        </div>
        <div className="AccountMap">
          Die rise : 
          <span>{`${mapTimes.dierise.minutes}:${mapTimes.dierise.seconds}`}</span>
          <Link to={"/recorddierise"}><button className="buttonSeeRecord">Voir</button></Link>
        </div>
        <div className="AccountMap">
          M O D : 
          <span>{`${mapTimes.mobofthedead.minutes}:${mapTimes.mobofthedead.seconds}`}</span>
          <Link to={"/recordmobofthedead"}><button className="buttonSeeRecord">Voir</button></Link>
        </div>
        <div className="AccountMap">
          Buried : 
          <span>{`${mapTimes.buried.minutes}:${mapTimes.buried.seconds}`}</span>
          <Link to={"/recordburied"}><button className="buttonSeeRecord">Voir</button></Link>
        </div>
        <div className="AccountMap">
          Origins : 
          <span>{`${mapTimes.origins.minutes}:${mapTimes.origins.seconds}`}</span>
          <Link to={"/recordorigins"}><button className="buttonSeeRecord">Voir</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
