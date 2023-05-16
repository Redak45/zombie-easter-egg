import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header.js';
import { BrowserRouter} from 'react-router-dom';
import SignUpModal from './components/Navbar/SignUpModal';
import SignInModal from './components/Navbar/SignInModal';

import RouterComponents from './RouterComponent';


function App() {

  return (

    <BrowserRouter>
      <Header />
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <RouterComponents />
    </BrowserRouter>
  );
}

export default App;