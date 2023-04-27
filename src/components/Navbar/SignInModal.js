import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const SignUpModal = () => {

  const { modalState, toggleModals, signIn } = useContext(UserContext);

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
        await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef.current.reset();
      setValidation("")
      // console.log(cred);
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
          <input ref={addInputs} type="email" id="email" />
        </div>
        <div className="modalSignPsw">
          <label htmlFor="password">Mot des passe</label>

          <input ref={addInputs} type="password" id="password" />
          <p className="Validation" >{validation}</p>
        </div>
        <button type="submit" className="modalSignButton" onClick={closeModal}>Annuler</button>
        <button type="submit" className="modalSignButton">Se connecter</button>
      </form>
    </div>
  );
}

export default SignUpModal;
