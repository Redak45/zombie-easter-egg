import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/BlackOps2/Home';
import Parameters from './components/Parameters.js';
import MapMenu from './components/BlackOps2/Mapmenu.js'
import Tranzit from './components/BlackOps2/Tranzit/Tranzit.js';
import TranzitTrophy from './components/BlackOps2/Tranzit/TranzitTrophy.js';
import TranzitSecret from './components/BlackOps2/Tranzit/TranzitSecret.js';
import TranzitRecord from './components/BlackOps2/Tranzit/TranzitRecord.js';
import TranzitBase from './components/BlackOps2/Tranzit/TranzitBase';
import Dierise from './components/BlackOps2/Dierise/Dierise.js';
import Mobofthedead from './components/BlackOps2/Mobofthedead/Mobofthedead.js';
import Buried from './components/BlackOps2/Buried/Buried.js';
import Origins from './components/BlackOps2/Origins/Origins.js';
import data from './data/data'



function App() {
 
  const tranzitProps1 = {
    maps: data.tranzit[0].maps,
    link1: "/secretTranzit",
    link2: "/baseTranzit",
    link3: "/trophyTranzit",
    link4: "/recordTranzit",
    banner: data.tranzit[0].url,
  };

  

  return (
   
    <BrowserRouter>
     <Navbar />
        <Routes>
        <Route  exact path="/" element={<Home />}> </Route>
        <Route  exact path="/parameters" element={<Parameters />}> </Route>
        <Route  exact path="/tranzit" element={<MapMenu {...tranzitProps1} />}> </Route>
        <Route  exact path="/dierise" element={<MapMenu maps={data.dierise[0].maps} link1={"/secretTranzit"} link2={"/baseTranzit"} link3={"/trophyTranzit"} link4={"/recordTranzit"} banner={data.dierise[0].url} />}> </Route>
        <Route  exact path="/mobofthedead" element={<MapMenu maps={data.mobofthedead[0].maps} link1={"/secretTranzit"} link2={"/baseTranzit"} link3={"/trophyTranzit"} link4={"/recordTranzit"} banner={data.mobofthedead[0].url} />}> </Route>
        <Route  exact path="/buried" element={<MapMenu maps={data.buried[0].maps} link1={"/secretTranzit"} link2={"/baseTranzit"} link3={"/trophyTranzit"} link4={"/recordTranzit"} banner={data.buried[0].url} />}> </Route>
        <Route  exact path="/origins" element={<MapMenu maps={data.origins[0].maps} link1={"/secretTranzit"} link2={"/baseTranzit"} link3={"/trophyTranzit"} link4={"/recordTranzit"} banner={data.origins[0].url} />}> </Route>
        <Route  exact path="/secretTranzit" element={<TranzitSecret maps={data.tranzit[0].maps} />}> </Route>
        <Route  exact path="/baseTranzit" element={<TranzitBase maps={data.tranzit[0].maps} />}> </Route>
        <Route  exact path="/recordTranzit" element={<TranzitRecord records={data.tranzit[0].record1} />}> </Route>
        <Route  exact path="/trophyTranzit" element={<TranzitTrophy trophies={data.tranzit[0].trophy} />}> </Route>
        <Route  exact path="/recordierise" element={<TranzitRecord records={data.tranzit[0].maps} />}> </Route>

        </Routes>
    </BrowserRouter>
  );
}
  
export default App;