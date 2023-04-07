import React, { useState } from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';
/*import iconHomeGold from '../Navbar/icons/iconHomeGold.png';
import iconParametersRed from '../Navbar/icons/iconParametersRed.png';*/
import iconHomeRed from '../Navbar/icons/iconHomeRed.png';
import iconHomeGold from '../Navbar/icons/iconHomeGold.png';
import iconParametersRed from '../Navbar/icons/iconParametersRed.png';
import iconParametersGold from '../Navbar/icons/iconParametersGold.png';
import './Navbar.css';

const Navbar = () => {

const [icon1, setIcon1] = useState(iconHomeRed);
const [icon2, setIcon2] = useState(iconParametersGold);

  const handleClick = () => {
    if (icon1 === iconHomeRed) {
    	setIcon1(iconHomeGold);
      if (icon2 === iconParametersGold) {
    	setIcon2(iconParametersRed);
      }
    } else {
	  setIcon1(iconHomeRed);
	  if(icon2 === iconParametersRed) {
        setIcon2(iconParametersGold);
      }
    }
  };

  const handleClick2 = () => {
    if (icon2 === iconParametersRed) {
    	setIcon2(iconParametersGold);
      if (icon1 === iconHomeGold) {
    	setIcon1(iconHomeRed);
      }
    } else {
	  setIcon2(iconParametersRed);
	  if(icon1 === iconHomeRed) {
        setIcon1(iconHomeGold);
      }
    }
  };
  
	return (
	
	<Nav>
		<NavMenu>
		<NavLink to='/' >
		<img src={icon1} alt="iconHome" id="img1" onClick={handleClick}></img>
		</NavLink>
		<NavLink to='/parameters'>
		<img src={icon2} alt="iconParametres" id="img2" onClick={handleClick2}></img>
		</NavLink>
		</NavMenu>	
	</Nav>
	
	);
};

export default Navbar;
