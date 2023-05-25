import React, { useState } from 'react';
import '../../styles/secret.css';


const DieriseSecret = ({ maps }) => {

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

      <div className="bannerDierise">
        <h2> {maps} : SECRET PRINCIPALE </h2>
      </div>

      <div className="trophydescription">
        <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> {maps} </span>  </p>
      </div>

      <div className="secrettranzit">

        <div className="secretbutton">
          <button className="SommaireButton" onClick={toggleSommaire}> Sommaire</button>
          <a href="https://www.youtube.com/watch?v=YWLDNT8w9Dw&ab_channel=Kenshin9977"> <button className="VideoeButton">   Tuto en video</button> </a>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleSommaire}>
                &times;
            </span>
              <ul>
                <li><a href="#etape1" onClick={closeModal}>Début</a></li>
                <li><a href="#etape2" onClick={closeModal}>Table à Navcard </a></li>
                <li><a href="#etape3" onClick={closeModal}>Ascenseurs</a></li>
                <li><a href="#etape4" onClick={closeModal}>Plaques</a></li>
                <li><a href="#etape5" onClick={closeModal}>Dragons</a></li>
                <li><a href="#etape6" onClick={closeModal}>Propulseur</a></li>
                <li><a href="#etape7" onClick={closeModal}>Mah-Jong</a></li>
              </ul>
            </div>
          </div>
        )}


        <h3 id="etape1">Début</h3>
        <p>Le secret de Die Rise ne peut se faire qu'à 4 joueurs. Si la tour est déjà allumée et qu'elle est bleue vous ne pouvez pas faire le secret de la version Richtofen, uniquement la version Maxis. Si elle est allumée en Orange c'est l'inverse. Ça se produit si la partie a été commencée avec au moins une personne qui a fait une version du secret, la personne concernée le sait en allant dans les menus et en regardant si le logo de la carte est entouré par une lumière bleue ou orange.</p>

        <p>Si vous voulez faire le secret de la version Maxis par exemple, il suffit que la personne de votre groupe qui a fait la version Richtofen rejoigne la partie après qu'elle ait commencé.
        Si jamais un joueur est déconnecté avant la fin de la partie, même s'il rejoint avant la fin du secret, ça ne changera pas la couleur de sa tour.</p> 


        <h3 id="etape2">ETAPE 1 : Table à Navcard </h3>


        <p> Vous pouvez récupérer une NavCard à côté du SVU mais elle n'est pas nécessaire au secret et vous ne pouvez l'insérer que dans la table à NavCard de Buried. La carte est conservée dans votre inventaire d'une partie à une autre tant que vous ne la posez pas ou que vous ne prenez pas une autre navcard. La carte à insérer dans la table de Die Rise se trouve sur TranZit.</p>


        <h3 id="etape3">ETAPE 2 : L'Ascenseurs</h3>

        <p>Il y en a un sur chacun des deux ascenseurs accessibles depuis la table de craft du propulseur, un sur l'ascenseur près de la MP5 et un sur l'ascenseur de gauche accessible depuis le courant. </p>

        <p>Faites juste attention à ne pas vous faire écraser en étant sur l'ascenseur, ne restez pas sur les ascenseurs si les autres joueurs ne peuvent pas monter sur le leur et ça devrait se faire sans problème.
        Quand les 4 joueurs sont chacun sur un symbole, ces derniers devraient s'illuminer.</p>

        <h3 id="etape4">ETAPE 3 : Plaques</h3>

        <p> Vous devez allez sur les 4 plaques sur le toit. L'ordre dans lequel il faut marcher sur les plaques change à chaque partie, pour trouver le bon ordre il faut monter sur une plaque et voir si elle s'illumine ou non. Si elle s'illumine c'est que c'est le bon ordre pour cette plaque, sinon toutes celles qui s'étaient allumées s'éteignent. Si vous l'avez correctement fait, tous les symboles restent allumés </p>

         <h3 id="etape5">ETAPE 4 : Le Dragon</h3>
        
        <p> Prenez un fusil de précision, si vous n'en n'avez pas d'équipé vous pouvez prendre le SVU au centre commercial, et tirez sur les boules qui se trouvent dans la gueule des deux dragons sur le toit où se trouve la tour.  </p>

        <p> En tirant dessus les boules se téléportent aux statues qui se trouvent à la première salle et à partir de là vous décidez de faire le secret version Maxis ou version Richtofen.</p>

         <h3 id="etape4">ETAPE 5 : Les Propulseurs</h3>
        
        <p> Il faut ensuite placer un propulseur sur chacun des symboles avec un zombie dessus.
        Il y en a un en face de la M14, un de chaque côté des escaliers qui mène au toit du bâtiment de la tour et un dernier à côté des Semtex près de la tour. Il faut donc que chaque joueur place son propulseur sur un symbole et il faut les placer de sorte à ce qu'ils soient orientés vers la tour.  </p>

        <p> Il faut propulser 16 zombies en tout avec les propulseurs après quoi la tour s'allume. Il faut que les 4 propulseurs soient placés en même temps sur les symboles pour que l'étape fonctionne et que les zombies propulsés comptent. </p>

        <h3 id="etape6">ETAPE 6 : Mah-Jong</h3>
        
        <p>Pour la dernière étape du secret il faut frapper chaque pilier de la tour avec le poing taser dans un ordre précis.
        Le poing taser se trouve dans la cage d'ascenseur qui se trouve dans le bâtiment à l'envers.  </p>
        
        <p>L'ordre dans lequel frapper les piliers est aléatoire et dépend de votre partie. Pour connaître l'ordre il faut trouver 8 pièces de mah-jong. 4 sont numérotées de 1 à 4 avec le 1 qui est un peu spécial. 4 autres pièces correspondent au 4 points cardinaux écrits en chinois et je vous met la traduction avec cette image.</p>

        <p> Après ça vous frappez dans le bon ordre chaque coin de la tour, il devrait y avoir un son pour valider l'étape, les coins de la tour s'éteindront et le centre de la tour sera traversée par un faisceau lumineux bleu. Si vous frappez les coins de la tour dans le mauvais ordre vous devrez passer la manche pour pouvoir réessayer. </p>

      </div>

    </div>

  );
};


export default DieriseSecret;
