import React from 'react';
import '../styles/menu.css';
import question from '../icons/question.png';
import arrow from '../icons/arrow.png';
import build from '../icons/build.png';
import timer from '../icons/timer.png';
import trophy from '../icons/trophy.png';
import { Link } from "react-router-dom";
import data from '../../data/data';
import Tranzit from './assets/Tranzit.png';

const MapMenu = ({maps, link1, link2, link3, link4, banner}) => {


return (
        
    <div className="ContainerMap">
  	<h1>  ZOMBIE EE</h1>

    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <h2> {maps} </h2> 
   </div>

    <div className="Menu">
    <img src={question} alt="question" id="question" width="12"></img>
    <Link to={link1}>  <h2> Secret Principale</h2> </Link> 
    <img src={arrow} alt="arrow" id="arrow" width="12"></img>
    </div>
   
    <div className="Menu">
    <img src={build} alt="build" id="build" width="17"></img>
    <Link to={link2}> <h2> Base de la map </h2> </Link>
    <img src={arrow} alt="arrow" id="arrow" width="12"></img>
    </div>

    <div className="Menu">
    <img src={trophy} alt="trophy" id="trophy" width="17"></img>
    <Link to={link3}>  <h2> Trophées </h2> </Link>
    <img src={arrow} alt="arrow" id="arrow" width="12"></img>
    </div>

    <div className="Menu">
    <img src={timer} alt="timer" id="timer" width="17"></img>
    <Link to={link4}>  <h2> Record Speedrun </h2></Link> 
    <img src={arrow} alt="arrow" id="arrow" width="12"></img>
    </div>

  </div>

);
};


export default MapMenu;
