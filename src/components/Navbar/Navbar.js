import React, { useState, useContext } from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';
/*import iconHomeGold from '../Navbar/icons/iconHomeGold.png';
import iconParametersRed from '../Navbar/icons/iconParametersRed.png';*/
import iconHomeRed from '../Navbar/icons/iconHomeRed.png';
import iconHomeGold from '../Navbar/icons/iconHomeGold.png';
import iconAccountRed from '../Navbar/icons/iconAccountRed.png';
import iconAccountGold from '../Navbar/icons/iconAccountGold.png';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


  const [currentPage, setCurrentPage] = useState('/');

  const { toggleModals } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate()

  const handleClick = () => {
    setCurrentPage('/');
  };

  const handleClick2 = () => {
    setCurrentPage('/account/account-page');
  };

  const handleClick3 = () => {
    if (!currentUser) {
      toggleModals('signIn');
    } else {
      navigate("/account/account-page")
    }
  };

  return (

    <Nav>
      <NavMenu>
        <NavLink to='/' >
          <img src={currentPage === '/' ? iconHomeRed : iconHomeGold} alt="iconHome" id="img1" onClick={handleClick}></img>
        </NavLink>
        <NavLink to='/account/account-page'>
          <img src={currentPage === '/account/account-page' ? iconAccountRed : iconAccountGold} alt="iconParametres" id="img2" onClick={() => { handleClick2(); handleClick3(); }} ></img>
        </NavLink>
      </NavMenu>
    </Nav>

  );
};

export default Navbar;
