import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import '../components/styles/header.css';

const Header = () => {
  const { toggleModals } = useContext(UserContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1> ZOMBIE EE </h1>
      </Link>

      <div className="ButtonHeader">
        <button className="BouttonConnexion" onClick={() => toggleModals("signUp")}>
          Sign Up
        </button>
        <button className="BouttonConnexion" onClick={() => toggleModals("signIn")}>
          Sign In
        </button>
        <button className="BouttonDeconnexion">Log Out</button>
      </div>
    </div>
  );
};

export default Header;
