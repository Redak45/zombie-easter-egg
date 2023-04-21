import React, { useState } from 'react';
import '../../styles/secret.css';
import courant from '../assets/courant.png';
import avogadro from '../assets/avogadro.jpeg';



const TranzitSecret = ({maps}) => {


  const [showModal, setShowModal] = useState(false);
  
  // Fonction qui va changer l'état de l'affichage du sommaire lorsque le bouton est cliqué:

  const toggleSommaire = () => {
    setShowModal(!showModal);
  };

   
return (

    <div className="ContainerSecret">
    
    <div className="banner bannerTranzit">
      <h2> {maps} : SECRET PRINCIPALE </h2> 
    </div>

    <div className="trophydescription">
      <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> TRANZIT </span>  </p> 
    </div>
    
    <div className="secrettranzit">

      <button className="SommaireButton" onClick={toggleSommaire}> Voir le Sommaire</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleSommaire}>
              &times;
            </span>
            <ul>
          <li><a href="#etape1">Le Courant</a></li>
          <li><a href="#etape2">La Turbine</a></li>
          <li><a href="#etape3">Avogadro</a></li>
          <li><a href="#etape4">Les Lampadaires</a></li>
        </ul>
          </div>
        </div>
      )}

      <p>Pour ce secret vous avez la version Maxis et Richtofen. Les deux peuvent se faire à 2,3 et 4 joueurs. La version Richtofen est faisable
        en solo mais ce ne sera pas simple. Plus il y'a de joueurs, plus il sera simple. Comme tous les autres secret, il ne peut pas se faire en mode facile.
      </p>


    <h2> Version Maxis</h2>
    
    <h3 id="etape1">ETAPE 1 : le Courant</h3>
    <p>Pour le secret Maxis, vous devez activer au mons une fois le courant puis le désactiver. Avec cette version du secret tous les joueurs entendent les dialogues de Maxis</p>


    <h3 id="etape2">ETAPE 2 : la Turbine</h3>

  
    <p>Après avoir rétablir le courant, il faut la couper dans une autre zone grâce a la turbine.</p>
    <p> Aller sous le pylône et placer sa turbine près du grillage. Après que Maxis ait parlé aux joueurs, un autre joueur doit poser sa turbine sous le pylône. </p>
     
    <div className="turbineimage">
    <img src={courant} alt="courant"  width="170"></img>
    
    </div>

    <h3 id="etape3">ETAPE 3 : Avogadro</h3>
    
    <p>Attirer l'Avogadro sous le pylône et le tuer (Quand il sera tué, il s'envolera vers l'obélisque). Il est plus facile de le tuer avec les IEM qu'avec le poing taser et il est insensible aux balles. </p>

    <h3 id="etape4">ETAPE 4 : Les Lampadaires</h3>

    <div className="avogadroimage">
    <img src={avogadro} alt="courant"  width="170"></img>
    </div>
    
    <p> Il faut que deux joueurs posent leur turbine près d'un lampadaire en même temps. Maxis vous dit quelque chose quand vous validez cette étape.
    Après cela fait, le succès «La tour de Babel» est déverouillé et le secret est validé. </p> 


    <h2> Version Richtofen</h2>
    
    <h3>ETAPE 1 : le Courant</h3>
    <p>Pour le secret version Richtofen, vous devez activer au mons une fois le courant puis le désactiver. Il faut qu'au moins 2 jouers récupèrent des grenades IEM dans la boîte mais c'est mieux si 4 joueurs les possèdent</p>

    </div>

  </div>

);
};

export default TranzitSecret;
