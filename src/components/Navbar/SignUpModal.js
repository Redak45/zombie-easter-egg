import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const SignUpModal = () => {

  const { modalState, toggleModals, signUp, handleSignUp } = useContext(UserContext);

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

    // Comparaison valeur de la longeur du mot de passe 
    if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {

      setValidation("6 characters min")
      return;
    }
    else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Pas le même mot de passe")
      return;
    }
    try {

      const email = inputs.current[0].value;
      const password = inputs.current[1].value;
      await handleSignUp(email, password);
  
      setValidation("")
    
      navigate("/account/account-page")
      toggleModals("close")

    } catch (err) {

      if (err.code === "auth/invalid-email") {
        setValidation("Email invalide")
      }
      if (err.code === "auth/email-already-in-use") {
        setValidation("Email déja utilisé")
      }
    }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }


  return (
    <div className={`modalSign ${modalState.signUpModal ? "show" : "hide"}`}>
      <form ref={formRef} className="modalSign-content" onSubmit={handleForm} >
        <span>Créer un compte</span>
        <div className="modalSignEmail">
          <label htmlFor="email">E-mail</label>
          <input ref={addInputs} type="email" id="signupemail" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password" id="signuppassword">Mot de passe</label>
          <input ref={addInputs} type="password" id="new-password" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password"id="confirmPassword">Confirmer le mot de passe</label>
          <input ref={addInputs} type="password" id="confirm-password" />
          <p className="Validation" >{validation}</p>
        </div>

        <button type="submit" className="modalSignButton" onClick={closeModal}>Annuler</button>
        <button type="submit" className="modalSignButton">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUpModal;
