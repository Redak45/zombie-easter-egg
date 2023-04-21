import { createContext, useState} from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase-config"

export const UserContext = createContext()


const UserContextProvider = (props) =>  {

    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)
    

  // Utilisateur qui va se connecter
  const [currentUser, setCurrentUser] = useState();
  // Le temps d'avoir une réponse de Firebasd
  const [loadingData, setLoadingData] = useState(true);

  const [modalState, setModalState] = useState({ signUpModal: false, signInModal: false })
  
  const toggleModals = modal => {  
    if(modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true
      })
    }

    if(modal === "signUp") {
      setModalState({
        signUpModal: true,  
        signInModal: false
      })
    }
    
    if(modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false
      }) 
    }
  }


  return (
      
    <UserContext.Provider value={{modalState, toggleModals, signUp, signIn}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;