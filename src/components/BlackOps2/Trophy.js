import React, { useState } from 'react';
import '../styles/trophy.css';
import iconTrophy from '../icons/trophy.png';



const TranzitTrophy = ({trophies}) => {
  
  // Stocke le type de trophée sélectionné 
  const [filter, setFilter] = useState(null);
  // Stocker le type de filtre actif
  const [activeFilter, setActiveFilter] = useState(null);
 
  // Filtre les trophées en fonction du type sélectionné. 
  const filteredTrophies = filter ? trophies.filter(trophy => trophy.type === filter) : trophies;

  // F onction qui met à jour l'état filter avec le type sélectionné.
  const handleFilterClick = (type) => {
    setFilter(type);
    setActiveFilter(type);
  };
  
return (

    <div className="ContainerTrophy">
    
    <div className="banner bannerTranzit">
      <h2> TRANZIT : TROPHEES</h2> 
    </div>

    <div className="trophydescription">
      <p> Vous trouverez ci-dessous l’intégralité des trophées de <span> TRANZIT </span> classé par types de trophées </p> 
    </div>

    <div className="filterbuttons">
        <button className={`buttonAll ${activeFilter === null ? 'active' : ''}`} onClick={() => handleFilterClick(null)}>Tous</button>
        <button className={`buttonBronze ${activeFilter === 'bronze' ? 'active' : ''}`} onClick={() => handleFilterClick('bronze')}>Bronze</button>
        <button className={`buttonSilver ${activeFilter === 'argent' ? 'active' : ''}`} onClick={() => handleFilterClick('argent')}>Argent</button>
        <button className={`buttonGold ${activeFilter === 'or' ? 'active' : ''}`} onClick={() => handleFilterClick('or')}>Or</button>
      </div>


    {filteredTrophies.map((trophy) => (
        <div className="trophy">
          <img src={iconTrophy} alt="trophy" id="trophy"></img>
          <div className="trophytext"> 
          <h2 className="trophyname">{trophy.name}</h2>
          <p className="trophycondition">{trophy.condition}</p>
          <p className="trophytype">Types : {trophy.type}</p>
          </div>
        </div>
      ))}

  </div>

);
};

export default TranzitTrophy;
