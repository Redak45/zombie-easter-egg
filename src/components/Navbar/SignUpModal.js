import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";


const SignUpModal = () => {
 
  const { modalState, toggleModals, signUp } = useContext(UserContext);


  // Validation pour le mot de passe
  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  

  const handleForm = async (e) => {
    
    e.preventDefault()
    console.log(inputs)


    // Comparaison valeur de la longeur du mot de passe 
    if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {

      setValidation("6 characters min")
      return;
    }
    

  } 
  
  
  return (
    <div className={`modalSignUp ${modalState.signUpModal ? "show" : "hide"}`}> 
      <form className="modalSignUp-content" onSubmit={handleForm} >
        <span>Sign Up</span>
        <div className="modalSignUpEmail">
          <label htmlFor="email">E-mail</label>
          <input ref={addInputs} type="email" id="email"/>
        </div>
        <div className="modalSignUpPsw">
          <label htmlFor="password">Mot de passe</label>
          <input ref={addInputs} type="password" id="password"/>
          <p className="Validation" >{validation}</p>
        </div>
        <button type="submit" className="modalSignUpButton" onClick={() => toggleModals("close")}>Annuler</button>
        <button type="submit" className="modalSignUpButton">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUpModal;
