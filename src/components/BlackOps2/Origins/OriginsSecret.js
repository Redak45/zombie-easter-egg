import React, { useState } from 'react';
import '../../styles/secret.css';


const OriginsSecret = ({maps}) => {
    
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
    
    <div className="bannerOrigins">
      <h2> {maps} : SECRET PRINCIPALE </h2> 
    </div>

    <div className="trophydescription">
      <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> {maps}</span>  </p> 
    </div>
    
    <div className="secrettranzit">
      
      <div className="secretbutton">
        <button className="SommaireButton" onClick={toggleSommaire}> Sommaire</button>
        <a href="https://www.youtube.com/watch?v=Su7R26kjXrU&ab_channel=Kenshin9977"> <button className="VideoeButton">   Tuto en video</button> </a>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleSommaire}>
              &times;
            </span>
            <ul>
          <li><a href="#etape1" onClick={closeModal}> Les bâtons élémentaires</a></li>
          <li><a href="#etape2" onClick={closeModal}> Obtention des bâtons ultimes </a></li>
          <li><a href="#etape3" onClick={closeModal}> Bâtons ultimes et robots géants</a></li>
          <li><a href="#etape4" onClick={closeModal}> Le poing spécial </a></li>
          <li><a href="#etape5" onClick={closeModal}> Carnage à Agartha</a></li>
    
        </ul>
          </div>
        </div>
      )}


    
    <h3 id="etape1">ETAPE 1 : Les bâtons élémentaires</h3>
    <p>Vous devez, pour cette première étape, activer les six générateurs. Une fois cela fait, construisez les quatres bâtons élémentaires. Pour y parvenir, suivez nos guides: / Bâton de vent / Bâton de foudre. / Bâton de feu / Bâton de glace.</p>


    <h3 id="etape2">ETAPE 2 : Obtention des bâtons ultimes.</h3>

  
    <p>Améliorez ensuites vos bâtons élémentaires pour en faire des bâtons ultimes, bien plus puissants et nécessaires à la réalisation du secret. Pour cette étape également, vous pouvez suivre nos guides: </p>

    <p> - Bâton Ultime de vent: Furie de Borée. </p>
    <p> - Bâton Ultime de foudre: Morsure de Kimat. </p>
    <p> - Bâton Ultime de feu: Sang de Kagutsuchi. </p>
    <p> - Bâton Ultime de glace: Flèche d'Ull. </p>


    <p> endez-vous dans le passage secret sous le Sacré Punch: quatre sphères colorées aux couleurs des bâtons ont fait leur apparition sous les quatre "anneaux" colorés. Servez-vous des leviers dispersés dans la salle pour mettre les anneaux et les sphères de couleur identique à proximité les uns des autres. </p> 
      
    <p> Tirez ensuite sur les sphères colorées avec le bâton correspondant à chacune des couleurs (bâton de foudre sur la sphère violette, bâton de glace sur la sphère bleue, bâton de feu sur la sphère rouge et bâton de vent sur la sphère jaune). </p>
     

    <h3 id="etape3">ETAPE 3 : Bâtons ultimes et robots géants.</h3>
    
    <p>Pour cette troisième étape, votre objectif est de placer vos bâtons ultimes dans les têtes de chacun des robots géants qui piétinent la map. </p>

    <p> - Le bâton de glace doit être placé dans la tête du robot passant à proximité de l'église. </p>
    <p> - Le bâton de vent, quant à lui, doit être placé dans la tête du robot du milieu. </p>
    <p> - Le bâton de foudre va dans la tête du robot passant à proximité de l'atout Tour de Passe-Passe. </p>
    <p> - Le bâton de feu ne doit pas être placé dans un robot mais dans le passage secret sous le Sacré Punch (un nouveau socle devrait être apparu). </p>

    <h3 id="etape4">ETAPE 4 : Le poing spécial</h3>

    
    <p> Il vous faut remplir les quatre coffres dispersés sur la map avec des âmes de zombies que vous tuerez à proximité des coffres. Ces derniers se trouvent près des empreintes des robots géants, à savoir: </p> 

    <p> - Derrière l'atout Mastodonte. </p>
    <p> - Au pied de la butte du Sacré Punch du côté du Mastodonte. </p>
    <p> - À côté du générateur 5. </p>
    <p> - Devant l'église. </p>

    <h3 id="etape5">ETAPE 5 : Le poing spécial</h3>

    
    <p>Retournez dans la dimension parallèle Agartha afin d'y déposer vos quatre bâtons ultimes sur leurs socles respectifs. Tuez ensuite environ une soixantaine de zombies, toujours à Agartha. Vous recevrez dès lors le succès "Petite fille perdue". </p> 

    <p>Déployez ensuite votre drone de Maxis dans la dimension parallèle et appuyez sur X (carré pour PS3) dans la lumière bleue au centre de la salle. Il ne vous reste plus qu'à apprécier la cinématique finale venant clôturer la map, et par la même occasion le mode Zombies. Bon visionnage!</p>

    </div>

  </div>

);
};

export default OriginsSecret;
