import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const SignUpModal = () => {

  const { modalState, toggleModals, signUp } = useContext(UserContext);

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
        await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
  
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
          <input ref={addInputs} type="email" id="email" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password">Mot de passe</label>
          <input ref={addInputs} type="password" id="password" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password">Confirmer le mot de passe</label>
          <input ref={addInputs} type="password" id="passwordconfirm" />
          <p className="Validation" >{validation}</p>
        </div>

        <button type="submit" className="modalSignButton" onClick={closeModal}>Annuler</button>
        <button type="submit" className="modalSignButton">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUpModal;
