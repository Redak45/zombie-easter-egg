import React from 'react';
import "../styles/home.css";
import { Link } from "react-router-dom";


const Home = () => {
	
return (

	<div className="Container">

	<div className="Card">


	<Link to="/tranzit"> 	<div className="CardList1"> <h2> TRANZIT </h2> </div> </Link>

	<Link to="/dierise"> <div className="CardList2"> <h2> DIE RISE </h2> </div> </Link>

	<Link to="/mobofthedead"> <div className="CardList3"><h2> MOB OF THE DEAD </h2> </div></Link>
  
	<Link to="/buried"> <div className="CardList4"> <h2> BURIED </h2>  </div> </Link>

	<Link to="/origins">  <div className="CardList5"> <h2> ORIGIN </h2>  </div> </Link>


  </div>

  </div>

);
};

export default Home;
