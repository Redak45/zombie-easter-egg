import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const SignInModal = () => {

  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const { handleSignIn } = useContext(UserContext);

  const navigate = useNavigate();
  // Validation pour le mot de passe
  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  const formRef = useRef();

  const handleForm = async (e) => {

    e.preventDefault()
  
    try {
      const email = inputs.current[0].value;
      const password = inputs.current[1].value;
    
      await handleSignIn(email, password);
      
      setValidation("")
      navigate("/account/account-page")
      toggleModals("close")

    } catch{
      setValidation("L'Email et/ou le mot de passe est incorrect")
    }

  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }


  return (
    <div className={`modalSign ${modalState.signInModal ? "show" : "hide"}`}>
      <form ref={formRef} className="modalSign-content" onSubmit={handleForm} >
        <span>Se connecter</span>
        <div className="modalSignEmail">
          <label htmlFor="email">E-mail</label>
          <input ref={addInputs} type="email" id="signinemail" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password" id="signinpassword">Mot des passe</label>

          <input ref={addInputs} type="password" id="current-password" />
          <p className="Validation" >{validation}</p>
        </div>
        <button type="submit" className="modalSignButton" onClick={closeModal}>Annuler</button>
        <button type="submit" className="modalSignButton">Se connecter</button>
      </form>
    </div>
  );
}

export default SignInModal;
