import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config"
import '../components/styles/header.css';
import logo from '../components/icons/logo.png';

const Header = () => {

  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate()
  const { currentUser } = useContext(UserContext);

  const logOut = async () => {

    try {
      await signOut(auth)
      navigate("/")

    } catch {
      alert("Pour certaines raisons, nous ne pouvons pas nous déconnecter, veuillez vérifier votre connexion internet et réessayer.")
    }
  }

  // Si l'utilisateur n'est pas connecté, les boutons "Inscription" et "Connexion" sont affichés mais pas le déconnecté. et inversement...
  return (
    <div className="Header">
      <Link to="/">
      <img src={logo} width='150' alt="logo"/>
      </Link>

      <div className="ButtonHeader">
        {!currentUser && (
          <>
            <button className="BouttonConnexion" onClick={() => toggleModals('signUp')}>
              Inscription
            </button>
            <button className="BouttonConnexion" onClick={() => toggleModals('signIn')}>
              Connexion
            </button>
          </>
        )}
        
        {currentUser && (
          <button className="BouttonDeconnexion" onClick={logOut}>
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
