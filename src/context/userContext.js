import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config"

export const UserContext = createContext()


const UserContextProvider = (props) => {

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

  const [timeElapsed, setTimeElapsed] = useState({ minutes: 0, seconds: 0 });


  // Utilisateur qui va se connecter
  const [currentUser, setCurrentUser] = useState();
  // Le temps d'avoir une réponse de Firebase
  const [loadingData, setLoadingData] = useState(true);


  const [modalState, setModalState] = useState({ signUpModal: false, signInModal: false })

  // Permet de changer l'état d'authentification
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Si je suis connecté alors ca renvoi le user sinon rien
      setCurrentUser(currentUser);
      setLoadingData(false);
    });
    return unsubscribe;
  }, []);


  const toggleModals = modal => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true
      })
    }

    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false
      })
    }

    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false
      })
    }
  }


  return (

    <UserContext.Provider value={{ modalState, toggleModals, signUp, signIn, currentUser, loadingData, timeElapsed, setTimeElapsed }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;