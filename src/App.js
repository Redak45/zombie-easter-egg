import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/BlackOps2/Home';
import Account from './components/Navbar/Account/Account.js';
import AccountHome from './components/Navbar/Account/AccountHome.js';
import MapMenu from './components/BlackOps2/Mapmenu.js'
import Trophy from './components/BlackOps2/Trophy.js';
import TranzitSecret from './components/BlackOps2/Tranzit/TranzitSecret.js';
import DieriseSecret from './components/BlackOps2/Dierise/DieriseSecret.js';
import MobofthedeadSecret from './components/BlackOps2/Mobofthedead/MobofthedeadSecret.js';
import BuriedSecret from './components/BlackOps2/Buried/BuriedSecret';
import OriginsSecret from './components/BlackOps2/Origins/OriginsSecret';
import TranzitBase from './components/BlackOps2/Tranzit/TranzitBase';
import SignUpModal from './components/Navbar/SignUpModal';
import SignInModal from './components/Navbar/SignInModal';
import Record from './components/BlackOps2/Record.js';
import data from './data/data'


function App() {


  const tranzitProps = {
    maps: data.tranzit[0].maps,
    link1: "/secrettranzit",
    link2: "/basetranzit",
    link3: "/trophytranzit",
    link4: "/recordtranzit",
    banner: data.tranzit[0].url,
  };

  const dieriseProps = {
    maps: data.dierise[0].maps,
    link1: "/secretdierise",
    link2: "/basedierise",
    link3: "/trophydierise",
    link4: "/recorddierise",
    banner: data.dierise[0].url,
  };

  const mobofthedeadProps = {
    maps: data.mobofthedead[0].maps,
    link1: "/secretmobofthedead",
    link2: "/basemobofthedead",
    link3: "/trophymobofthedead",
    link4: "/recordmobofthedead",
    banner: data.mobofthedead[0].url,
  };

  const buriedProps = {
    maps: data.buried[0].maps,
    link1: "/secretburied",
    link2: "/baseburied",
    link3: "/trophyburied",
    link4: "/recordburied",
    banner: data.buried[0].url,
  };

  const originsProps = {
    maps: data.origins[0].maps,
    link1: "/secretorigins",
    link2: "/baseorigins",
    link3: "/trophyorigins",
    link4: "/recordorigins",
    banner: data.origins[0].url,
  };


  return (

    <BrowserRouter>
      <Header />
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route exact path="/" element={<Home />}> </Route>
        <Route exact path="/account" element={<Account />}>
          <Route exact path="/account/account-page" element={<AccountHome />}> </Route>
        </Route>
        <Route exact path="/tranzit" element={<MapMenu {...tranzitProps} />}> </Route>
        <Route exact path="/dierise" element={<MapMenu {...dieriseProps} />}> </Route>
        <Route exact path="/mobofthedead" element={<MapMenu {...mobofthedeadProps} />}> </Route>
        <Route exact path="/buried" element={<MapMenu {...buriedProps} />}> </Route>
        <Route exact path="/origins" element={<MapMenu {...originsProps} />}> </Route>
        <Route exact path="/secrettranzit" element={<TranzitSecret maps={data.tranzit[0].maps} />}> </Route>
        <Route exact path="/secretdierise" element={<DieriseSecret maps={data.dierise[0].maps} />}> </Route>
        <Route exact path="/secretmobofthedead" element={<MobofthedeadSecret maps={data.mobofthedead[0].maps} />}> </Route>
        <Route exact path="/secretburied" element={<BuriedSecret maps={data.buried[0].maps} />}> </Route>
        <Route exact path="/secretorigins" element={<OriginsSecret maps={data.origins[0].maps} />}> </Route>
        <Route exact path="/basetranzit" element={<TranzitBase maps={data.tranzit[0].maps} />}> </Route>
        <Route exact path="/recordtranzit" element={<Record records={data.tranzit[0].record} />}> </Route>
        <Route exact path="/recorddierise" element={<Record records={data.dierise[0].record} />}> </Route>
        <Route exact path="/recordmobofthedead" element={<Record records={data.mobofthedead[0].record} />}> </Route>
        <Route exact path="/recordburied" element={<Record records={data.buried[0].record} />}> </Route>
        <Route exact path="/recordorigins" element={<Record records={data.origins[0].record} />}> </Route>
        <Route exact path="/trophytranzit" element={<Trophy trophies={data.tranzit[0].trophy} />}> </Route>
        <Route exact path="/trophydierise" element={<Trophy trophies={data.dierise[0].trophy} />}> </Route>
        <Route exact path="/trophymobofthedead" element={<Trophy trophies={data.mobofthedead[0].trophy} />}> </Route>
        <Route exact path="/trophyburied" element={<Trophy trophies={data.buried[0].trophy} />}> </Route>
        <Route exact path="/trophyorigins" element={<Trophy trophies={data.origins[0].trophy} />}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;