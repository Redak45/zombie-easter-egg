import React, { useState } from 'react';
import '../../styles/secret.css';

const MobofthedeadSecret = ({maps}) => {
    
  const [showModal, setShowModal] = useState(false);
  
  // Fonction qui va changer l'état de l'affichage du sommaire lorsque le bouton est cliqué:

  const toggleSommaire = () => {
    setShowModal(!showModal);
  };
  // Fermer la modal lorsque l'on clique sur une catégorie du menu

  const closeModal = () => {
    setShowModal(false);
  };

  /*
   <div className="imageRight">
     <img src={courant} alt="courant"  width="170"></img>
    </div>
  */
   
return (

    <div className="ContainerSecret">
    
    <div className="bannerMobofthedead">
      <h2> {maps} : SECRET PRINCIPALE </h2> 
    </div>

    <div className="trophydescription">
      <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> {maps}</span>  </p> 
    </div>
    
    <div className="secrettranzit">
      
      <div className="secretbutton">
        <button className="SommaireButton" onClick={toggleSommaire}> Sommaire</button>
        <a href="https://www.youtube.com/watch?v=2yZkA6Qt1_w&ab_channel=Kenshin9977"> <button className="VideoeButton">   Tuto en video</button> </a>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleSommaire}>
              &times;
            </span>
            <ul>
              <li id="ModalMaxis"> Version Maxis</li>
          <li><a href="#etape1" onClick={closeModal}>Le Courant "Maxis"</a></li>
          <li><a href="#etape2" onClick={closeModal}>La Turbine </a></li>
          <li><a href="#etape3" onClick={closeModal}>L'Avogadro</a></li>
          <li><a href="#etape4" onClick={closeModal}>Les Lampadaires "Maxis"</a></li>
          <li  id="ModalRichtofen"> Version Richtofen</li>
          <li><a href="#etape5" onClick={closeModal}>Le Courant "Richtofen"</a></li>
          <li><a href="#etape6" onClick={closeModal}>La Jetgun</a></li>
          <li><a href="#etape7" onClick={closeModal}>Les Explosifs</a></li>
          <li><a href="#etape8" onClick={closeModal}>Les Lampadaires "Richtofen"</a></li>
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
     

    <h3 id="etape3">ETAPE 3 : Avogadro</h3>
    
    <p>Maxis vous dit "Pas assez de puissance, il faut plus d'énergie" et "Oui il nous faut plus d'énergie, de préférence de l'énergie portable ou encore mieux vivante". Il faut vraiment attendre que Maxis ait fini son dialogue avant de passer à l'étape suivante. Il répétera son dialogue à chaque fois qu'une turbine est retirée puis reposée. Maintenant il faut qu'un Avogadro apparaisse dans la zone. Pour ça vous devez être dans les champs et passer la manche quand il y a un orage au-dessus de vous pendant que vous êtes dans la zone de la Tour. Vous devez maintenant attirer l'Avogadro sous le pylône et le blesser avec une grenade IEM. </p>

    <h3 id="etape4">ETAPE 4 : Les Lampadaires</h3>

    
    <p> En anglais Maxis vous dit quelque chose quand vous validez cette étape mais il ne vous dit rien en français. Donc pour savoir si ça a marché, activez un lampadaire en y mettant une turbine. Si Maxis vous parle de cercle circonscrit c'est que vous avez raté l'étape de l'Avogadro et vous devez réessayer. Normalement Maxis vous dit "Excellent vous avez activé deux vertex du scalène". Il ne vous reste plus qu'à activer un 2ème lampadaire avec une 2ème turbine, Maxis vous dit alors "Le système trichotome est enfin achevé" et vous aurez validé le secret </p> 


    <h2 className="RichtofenVersion"> Version Richtofen</h2>
    
    <h3 id="etape5" className="RichtofenVersion" >ETAPE 1 : le Courant</h3>

    <p>Pour le secret version Richtofen, vous devez activer au mons une fois le courant puis le désactiver. Il faut qu'au moins 2 jouers récupèrent des grenades IEM dans la boîte mais c'est mieux si 4 joueurs les possèdent</p>

    <h3 id="etape6" className="RichtofenVersion">ETAPE 2 : le Jetgun</h3>

    
    <p> Vous devez commencer par utiliser le Jetgun au champ sous le pylône électrique. À noter que la table n'a pas à être construite et pas besoin de se coller à l'endroit où elle se construit, ça fonctionne n'importe où sous la Tour. Vous devez utiliser le Jetgun jusqu'à ce qu'il explose, vous avez alors un dialogue de Richtofen qui vous dit "Maintenant il nous faut du 115 et la seule chose de 115 c'est la chair". </p>


    <h3 id="etape7" className="RichtofenVersion">ETAPE 3 : les Explosifs</h3>
    
    <p> Toujours sous le pylône vous devez tuer 25 zombies en utilisant des explosifs. Là
    Richtofen vous dit "Wunderschön mais on dirait que l'obélisque absorbe trop d'énergie". </p>

    <h3 id="etape8" className="RichtofenVersion">ETAPE 4 : les Lampadaires</h3>
    
    <p> Maintenant vous avez plus qu'à mettre une grenade IEM sur 4 lampadaires n'importe lesquels, avec un délai de 5s entre le premier lampadaire désactivé et le dernier. Il est possible de le faire à 2 si chaque joueur ouvre un portail au niveau d'un lampadaire, lance
    TIEM, prend le portail et lance une autre IEM sur le lampadaire où il apparaît. </p> 
    
    <p> C'est faisable mais si vous prenez en compte le fait que vous avez 5s pour faire ça, qu'il faut qu'en se téléportant les deux joueurs ne tombent pas sur un lampadaire qui a déjà été désactivé et qu'ils ne ratent aucune IEM ce n'est pas évident et ça reste plus simple à 3 ou à 4. </p> 

 
    <p>  En Solo c'est encore pire, il faut déjà ouvrir le portail de tous les lampadaires de la carte.
    Ensuite il faut être au lampadaire qui se situe entre le champ et le courant et tuer des zombies à côté jusqu'à ce qu'il y ait un munitions max.</p> 
    
    <p> Là, il faut lancer une IEM sur le lampadaire qui se trouve entre la Cabane du chasseur et la ville en la lançant au loin, en lancer une 2ème sur le lampadaire auquel on est, récupérer le munitions max pour récupérer les IEM, aller dans le portail, lancer une IEM, aller à nouveau dans le portail et encore une fois lancer une IEM. Vous devez lancer les 4 lEM en moins de 5s de manière à éteindre les 4 lampadaires en moins de 5s sans quoi ça ne marche pas. </p>

    </div>

  </div>

);
};


export default MobofthedeadSecret;
