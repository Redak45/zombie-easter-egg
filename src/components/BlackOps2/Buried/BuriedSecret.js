import React, { useState } from 'react';
import '../../styles/secret.css';


const BuriedSecret = ({ maps }) => {

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

      <div className="bannerBuried">
        <h2> {maps} : SECRET PRINCIPALE </h2>
      </div>

      <div className="trophydescription">
        <p> Vous trouverez ci-dessous l’intégralité du secret principale de la map <span> {maps}</span>  </p>
      </div>

      <div className="secrettranzit">

        <div className="secretbutton">
          <button className="SommaireButton" onClick={toggleSommaire}> Sommaire</button>
          <a href="https://www.youtube.com/watch?v=8QXmSl9zhrA&ab_channel=Kenshin9977"> <button className="VideoeButton">   Tuto en video</button> </a>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleSommaire}>
                &times;
            </span>
              <ul>
                <li><a href="#etape1" onClick={closeModal}> Les Orbes</a></li>
                <li><a href="#etape2" onClick={closeModal}> La Guillotine </a></li>
                <li><a href="#etape3" onClick={closeModal}> La Lanterne</a></li>
                <li><a href="#etape4" onClick={closeModal}> Déchiffrer le code</a></li>
                <li><a href="#etape5" onClick={closeModal}> Retour dans le futur</a></li>
                <li><a href="#etape6" onClick={closeModal}> Les Cibles</a></li>
              </ul>
            </div>
          </div>
        )}

        <h3 id="etape1">ETAPE 1 : Les Orbes</h3>
        <p>Utilisez le Paralyseur / Petrificateur sur les 4 orbes jusqu’à ce qu’elles deviennent blanches et qu’un son retentisse. Ces orbes se trouvent :</p>
        <p>Dans la ruelle entre le saloon et la confiserie.</p>
        <p>A gauche de l’église, derrière des rochers.</p>
        <p>A gauche du trou dans le manoir du côté du labyrinthe, dans des plantes.</p>
        <p>Dans un tunnel, en direction du tribunal en partant de l’atout Réanimation Rapide, dans un cul-de-sac.</p>


        <h3 id="etape2">ETAPE 2 : La Guillotine </h3>


        <p>Vous devrez construire la ‘guillotine’ qui se trouve à côté du saloon, au fond d’une ruelle, avec :</p>
        <p>–  Un cristal, qui se trouve dans un tunnel, à droite en partant de la salle où l’on tombe au début.</p>
        <p>–  Un cristal, qui se trouve dans un tunnel, à droite en partant de la salle où l’on tombe au début.</p>
        <p>–  Une bobine de fil, qui se trouve à côté d’une cheminée, juste avant le tunnel qui mène à la banque.</p>
        <p>–  Une antenne, qui se trouve dans la grange, à droite juste avant le tunnel.</p>



        <h3 id="etape3">ETAPE 3 : La Lanterne</h3>

        <p>Un joueur devra toucher la lanterne bleue qui vole autour de certains bâtiments ( du tribunal à l’église, ou du tribunal à la ‘prison’) avec une grenade chargée.
        Si la grenade est bien lancée, la lanterne devrait tomber. Un joueur devra la prendre. </p>

        <h3 id="etape4">ETAPE 4 : Déchiffrer le code</h3>

        <p> Une fois l’étape de la lanterne achevée, un code devrait apparaître sur le même mur.
        Il s’agit d’un code ‘Tic-tac-toc’, qui est assez simple à comprendre, mais plutôt long à utiliser. Heureusement, il n’y a besoin de traduire que la première lettre de chaque ligne.
        En effet, 5 phrases différentes peuvent apparaître, mais elles commencent toutes par une lettre différente. </p>

        <p>Le code que vous voyez sur le mur représente chacune de ces 9 cases avec un point à l’intérieur. Ce point désigne la place de la lettre voulue dans chaque case.</p>

        <h3 id="etape5">ETAPE 4 : Retour dans le futur</h3>

        <p>Pour cette étape, un joueur devra placer une bombe à retardement sur le banc de la guillotine, puis tous les joueurs devront se trouver autour de la guillotine. Le joueur qui a placé la bombe à retardement devra l’activer. </p>

        <p>Les joueurs se retrouveront ensuite dans le futur, à la vague ∞, où le jeu est noir et blanc et les zombies sont invincibles. Ils devront chercher un levier sur les 4 corps de Misty, Samuel, Russman et Marlton, qui peuvent se trouver aléatoirement :</p>

        <p>– Devant le saloon.
            / Derrière la grange, où se trouvent les composants de la table de navigation,
            / A l’entrée de la maison où se trouve la cellule du géant.
            / A gauche de l’entrée du magasin ‘Gunsmith’.
            / Devant l’emplacement de la première boîte magique.
            / A gauche de l’église, derrière les rochers, où se trouve un cristal de l’étape 1.
            / Vers la potence, en face de la confiserie, vers un panneau avec une flèche au sol.
            / Vers le plan qui se situe dans l’église.
            / Dans la confiserie, à droite en entrant du côté du ‘tribunal’.</p>

        <h3 id="etape6">ETAPE 4 : Les Cibles</h3>

        <p>Il s’agit de la dernière étape de ce secret. Les 4 joueurs devront tirer sur les ciblent</p>

        <p>Il y aura environ un vingtaine de cibles à détruire par emplacement. Les joueurs devront détruire toutes les cibles, sinon ils devront recommencer l’étape 8.
          Une fois toutes les cibles détruites, les joueurs recevront le succès (75G) / trophée d’argent « Jeux de mine » ainsi que tous les atouts présents sur la carte, qu’ils conserveront (même s’ils tombent ou s’ils meurent), jusqu’à la fin de la partie.</p>


      </div>

    </div>

  );
};


export default BuriedSecret;
