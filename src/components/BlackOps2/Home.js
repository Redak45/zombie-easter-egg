import React from 'react';
import "../styles/home.css";
import { Link } from "react-router-dom";


const Home = () => {
return (

	<div className="Container">
	<h1> ZOMBIE EE </h1>	

	<div className="Card">

	<div className="CardList1">
	<Link to="/tranzit"> <h2> TRANZIT </h2> </Link>
  </div>

	<div className="CardList2">
	<Link to="/dierise"> 	<h2> DIE RISE </h2> </Link>
  </div>

	<div className="CardList3">
	<Link to="/mobofthedead"> <h2> MOB OF THE DEAD </h2></Link>
  </div>

	<div className="CardList4">
	<Link to="/buried"> <h2> BURIED </h2> </Link>
  </div>

	<div className="CardList5">
	<Link to="/origins"> <h2> ORIGIN </h2> </Link>

  </div>

  </div>

  </div>

);
};

export default Home;
