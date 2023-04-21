import React from 'react';
import '../../styles/secret.css';
import courant from '../assets/courant.png';
import avogadro from '../assets/avogadro.jpeg';


const MobofthedeadSecret = ({maps}) => {
    
return (

    <div className="ContainerSecret">
    
    <div className="banner bannerTranzit">
      <h2> {maps} : SECRET PRINCIPALE </h2> 
    </div>

    <div className="trophydescription">
      <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> TRANZIT </span>  </p> 
    </div>
    
    <div className="secrettranzit">
    
    <h3>ETAPE 1 : le Courant</h3>
    <p>Pour le secret Maxis, vous devez activer au mons une fois le courant puis le désactiver. Avec cette version du secret tous les joueurs entendent les dialogues de Maxis</p>


    <h3>ETAPE 2 : Turbine</h3>

    
    
    <p>Après avoir rétablir le courant, il faut la couper dans une autre zone grâce a la turbine.</p>
    <p> Aller sous le pylône et placer sa turbine près du grillage. Après que Maxis ait parlé aux joueurs, un autre joueur doit poser sa turbine sous le pylône. </p>
     
    <div className="turbineimage">
    <img src={courant} alt="courant"  width="170"></img>
    
    </div>

    <h3>ETAPE 3 : Avogadro</h3>
    
    <p>Attirer l'Avogadro sous le pylône et le tuer (Quand il sera tué, il s'envolera vers l'obélisque). Il est plus facile de le tuer avec les IEM qu'avec le poing taser et il est insensible aux balles. </p>

    <h3>ETAPE 4 : Lampadaire</h3>

    <div className="avogadroimage">
    <img src={avogadro} alt="courant"  width="170"></img>
    </div>
    
    <p> Il faut que deux joueurs posent leur turbine près d'un lampadaire en même temps. 
    Après cela fait, le succès «La tour de Babel» est déverouillé. </p> 

    </div>


  </div>

);
};

export default MobofthedeadSecret;
