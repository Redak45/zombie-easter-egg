import React, { useState } from 'react';

import '../../styles/secret.css';

const OriginsBase = ({ maps }) => {

  const [showModal, setShowModal] = useState(false);

  // Fonction qui va changer l'état de l'affichage du sommaire lorsque le bouton est cliqué:

  const toggleSommaire = () => {
    setShowModal(!showModal);
  };
  // Fermer la modal lorsque l'on clique sur une catégorie du menu

  const closeModal = () => {
    setShowModal(false);
  };

  /*  <div className="imageRight">
          <img src={craft} alt="craft" width="170"></img>
        </div>
  */

  return (

    <div className="ContainerSecret">

      <div className="bannerOrigins">
        <h2> {maps} : BASE DE LA MAP </h2>

      </div>

      <div className="trophydescription">
        <p> Vous trouverez ci-dessous les informations de bases à savoir sur la map <span> {maps} </span>  </p>
      </div>

      <div className="secrettranzit">

        <div className="secretbutton">
          <button className="SommaireButton" onClick={toggleSommaire}> Sommaire</button>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleSommaire}>
                &times;
        </span>
              <ul>
                <li><a href="#etape1" onClick={closeModal}>Générateurs</a></li>
                <li><a href="#etape2" onClick={closeModal}>Drone</a></li>
                <li><a href="#etape3" onClick={closeModal}>Bouclier</a></li>
                <li><a href="#etape4" onClick={closeModal}>Robots </a></li>
                <li><a href="#etape5" onClick={closeModal}>Panzer</a></li>
                <li><a href="#etape6" onClick={closeModal}>Tank</a></li>
              </ul>
            </div>
          </div>
        )}

        <h3 id="etape1" className="spaceTop"> Générateurs </h3>

        <p> La carte est divisée en plusieurs parties chacune séparée par du brouillard. Dans l'ordre on a le Dépôt, le Tunnel, le Diner, la Ferme, le Champ, le Labo, la Cabane et la Ville. On a aussi un chemin entre le Diner et la ferme qui passe par une église et qui permet d'accéder à la ville.</p>


        <h3 id="etape2"> Drone</h3>

        <p>Vous pouvez construire plein d'objets dans la carte et chaque objet a besoin de plusieurs pièces. Sur BO2 vous ne pouvez avoir qu'une pièce à la fois sur vous, seul le joueur qui l'a récupérée peut l'utiliser, si vous tombez à terre vous lâchez la pièce et sur TranZit si vous la lâchez sur de la lave la pièce disparaît et réapparaît à un de ses points d'apparition habituels. </p>



        <p> Sur toutes les cartes si une pièce tombe en dehors de la carte elle réapparaît aussi à l'un de ses points d'apparition habituels.</p>

        <h3 id="etape3"> Bouclier </h3>

        <p>Le bus reste à un arrêt 20s si un joueur est dans le véhicule ou sur le toit de ce dernier et 1mn20 dans le cas contraire. Le bus arrive au dépôt 15s après le début de la partie. Il met 1mn20 pour atteindre le Diner, 55s pour arriver à la ferme, 1mn05 jusqu'au labo, 30s pour aller à la ville et enfin 1mn40 pour revenir au Dépôt ce qui fait un temps total de 7mn et 10s pour faire le tour de la carte si vous êtes dans le bus et 11mn10 si aucun joueur n'est dedans de tout le trajet.
      Au plafond vous avez le B23R. </p>

        <p>Vous avez aussi le conducteur du bus qui peut s'énerver quand vous lui tirez trop dessus, après quoi il peut vous virer du bus, bloquer les portes ou zapper un arrêt. Les zombies qui poursuivent le bus courent plus vite que jamais,ce qui donne lieu à des scènes assez comiques si un allié tombe du bus et se fait écraser par les zombies. </p>



        <p>Si un allié tombe à terre dans le bus, un autre joueur qui se trouve aussi dans le bus peut le réanimer et à partir du moment où il commence à le réanimer il peut s'éloigner autant qu'il veut tout en restant dans le bus et il continuera à ranimer. Les bonus qui apparaissent dans le bus ne restent pas à l'intérieur mais le traverse.</p>

        <h3 id="etape4"> Robots </h3>

        <p>Si vous décidez de ne pas prendre le bus, parce que l'attendre 11mn c'est long, vous pouvez aller à pied dans le brouillard mais pendant tout le trajet vous aurez des créatures; les Denizens, qui vous sauteront dessus. Pour vous en débarrasser vous devez frapper tout du long. </p>

        <p>Il leur faut 5 coups de couteau normal, 3 coups de couteau de chasse et 2 coups de poing taser pour les tuer. Elles, vous tuent si elles vous griffent 3 fois de suite sans que vous ne les ayez attaquées.</p>

        <p>Dès que vous allez près d'une zone avec des bâtiments les créatures s'enfuiront.
    Elles sont évidemment très pénibles mais le sont d'autant plus si vous essayez de réanimer un joueur dans une zone où ces créatures vous sautent dessus. </p>

        <h3 id="etape5"> Panzer </h3>


        <p>Si un lampadaire est alimenté et que vous amenez une créature qui vous est montée dessus, elle se réfugie dans le sol et ouvre un portail qui vous amènera aléatoirement vers l'un des autres lampadaires de la carte. Si le courant n'est pas activé vous pouvez utiliser une turbine pour alimenter un lampadaire et ainsi y ouvrir un portail</p>

        <h3 id="etape6"> Tank</h3>


        <p>Dans toute la carte il y a des fissures avec de la lave. Il y a aussi des lacs de lave entre chaque zone et à la ville. Si des zombies passent dessus ils prennent feu et explosent quand vous les tuez ce qui vous fait des dégâts. En passant dessus vous perdez 10 PV chaque seconde. </p>

        <p> Vous pouvez traverser chacun des lacs de lave qui séparent les différentes zones, même sans Mastodonte, mais c'est très juste et il suffit d'un zombie qui vous bloque le chemin pendant 1s ou qu'on vous mette un coup pour mourir. C'est pour ça que la plupart des joueurs utilisent plutôt les portails pour se déplacer. </p>

      </div>
    </div>

  );
};

export default OriginsBase;
