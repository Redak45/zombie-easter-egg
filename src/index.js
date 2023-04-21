import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // Enveloppe l'application entière avec le contexte utilisateur créé. Toutes les parties de l'application ont accès à UserContext et peuvent utiliser les données : modalState, toggleModals, signUp, currentUser et signIn.
  <React.StrictMode>
    <UserContextProvider > 
      <App />
    </UserContextProvider>
  </React.StrictMode>
);


