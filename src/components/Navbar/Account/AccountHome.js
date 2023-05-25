import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/userContext';
import { Link } from 'react-router-dom';
import { collection, doc, getFirestore, getDoc } from 'firebase/firestore';
import '../../styles/account.css';

const AccountHome = () => {
  const { currentUser } = useContext(UserContext);

  const [ mapTimes, setMapTimes ] = useState({});


  useEffect(() => {
    const firestore = getFirestore();
    const userId = currentUser.email; // Vérifie si c'est la propriété correcte pour l'identifiant de l'utilisateur
    const userCollection = collection(firestore, userId);
    const timerDoc = doc(userCollection, 'Timer');
  
    const getTimerData = async () => {
      const timerSnapshot = await getDoc(timerDoc);
  
      if (timerSnapshot.exists()) {
        setMapTimes(timerSnapshot.data());
      }
    };
  
    getTimerData();
  }, [currentUser]);
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} min ${seconds} s`;
  };

  return (
    <div>
      <h2 className="AccountTitle">Temps de chaque map :</h2>
      <div className="AccountContainer">
        <div className="AccountMap">
          Tranzit : <span>{mapTimes['tranzit'] ? formatTime(mapTimes['tranzit']) : '0 s'}</span>
          <Link to="/recordtranzit">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Die rise : <span>{mapTimes['dierise'] ? formatTime(mapTimes['dierise']) : '0 s'}</span>
          <Link to="/recorddierise">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          M O D :<span>{mapTimes['mobofthedead'] ? formatTime(mapTimes['mobofthedead']) : '0 s'}</span>
          <Link to="/recordmobofthedead">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Buried : <span>{mapTimes['buried'] ? formatTime(mapTimes['buried']) : '0 s'}</span>
          <Link to="/recordburied">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
        <div className="AccountMap">
          Origins : <span>{mapTimes['origins'] ? formatTime(mapTimes['origins']) : '0 s'}</span>
          <Link to="/recordorigins">
            <button className="buttonSeeRecord">Voir</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
