import { createContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config"
import { doc, updateDoc, getDoc, setDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";



export const UserContext = createContext()


const UserContextProvider = (props) => {

  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)

  const [timeElapsed, setTimeElapsed] = useState({ minutes: 0, seconds: 0 });
  const [timeElapsedTranzit, setTimeElapsedTranzit] = useState({ minutes: 0, seconds: 0 });
  const [timeElapsedDieRise, setTimeElapsedDieRise] = useState({ minutes: 0, seconds: 0 });
  const [timeElapsedMod, setTimeElapsedMod] = useState({ minutes: 0, seconds: 0 });
  const [timeElapsedBuried, setTimeElapsedBuried] = useState({ minutes: 0, seconds: 0 });
  const [timeElapsedOrigins, setTimeElapsedOrigins] = useState({ minutes: 0, seconds: 0 });
  const [timerData, setTimerData] = useState({});

  useEffect(() => {
    const fetchTimerData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userId = user.email;
        const userCollection = collection(db, userId);
        const timerDoc = doc(userCollection, 'Timer');
        const timerSnapshot = await getDoc(timerDoc);
        if (timerSnapshot.exists()) {
          setTimerData(timerSnapshot.data());
         
        }
      }
    };

    fetchTimerData();
  }, []);

  


  const [mapTimes, setMapTimes] = useState({
    tranzit: { minutes: 0, seconds: 0 },
    dierise: { minutes: 0, seconds: 0 },
    mobofthedead: { minutes: 0, seconds: 0 },
    buried: { minutes: 0, seconds: 0 },
    origins: { minutes: 0, seconds: 0 }
  });
  
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

  const handleValidation = async (mapName, timeElapsed) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.email;
  
        // Conversion du temps de l'application (minutes et secondes) en secondes
        const totalSeconds = timeElapsed.minutes * 60 + timeElapsed.seconds;
  
        // Met à jour la map correspondante dans la collection de l'utilisateur
        const userCollection = collection(db, userId);
        const timerDoc = doc(userCollection, "Timer");
  
        // Récupère les valeurs actuelles du document "Timer"
        const timerSnapshot = await getDoc(timerDoc);
        const currentTimerData = timerSnapshot.data();
  
        // Met à jour la map correspondante dans le document "Timer"
        const updatedTimerData = {
          ...currentTimerData,
          [mapName]: totalSeconds
        };
  
        await setDoc(timerDoc, updatedTimerData);
  
  
        console.log("Temps validé avec succès pour la map", mapName);
      } else {
        // L'utilisateur n'est pas connecté ou auth.currentUser est null/indéfini
        console.log("Utilisateur non connecté");
      }
    } catch (error) {
      console.error("Erreur lors de la validation du temps :", error);
    }
  };
  
  
  

  const handleSignIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // Utiliser l'adresse e-mail comme identifiant de l'utilisateur
      const userId = user.email;

      // Créer un document avec l'userId dans la collection "users"
      await setDoc(doc(db, "users", userId), {
        // Ajouter d'autres champs si nécessaire
      });

      console.log("Utilisateur connecté avec succès !");
    } catch (error) {
      console.error("Erreur lors de la connexion de l'utilisateur :", error);
  }
}

const handleSignUp = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // Utiliser l'adresse e-mail comme identifiant de l'utilisateur
    const userId = user.email;

    // Créer un document "Timer" dans la collection correspondant à l'userId
    await setDoc(doc(db, userId, "Timer"), {
      tranzit:0,
      dierise:0,  
      mobofthedead:0,
      buried:0,
      origins:0,
    });

    console.log("Utilisateur connecté avec succès !");
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);
  }

};
  

  return (

    <UserContext.Provider value={{ modalState, toggleModals, signUp, signIn, currentUser, loadingData, timeElapsed, setTimeElapsed, handleValidation, mapTimes, setMapTimes, handleSignIn, handleSignUp
     }}>

      {!loadingData && props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;