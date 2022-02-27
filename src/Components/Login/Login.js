import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../State/action/action";
import "./Login.css";

function LoginModal() {

  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const user = useSelector(state => state.loginUser);
  const dispatch = useDispatch();

  const emailHandler = (e) => {
    e.preventDefault();
    let currText = e.target.value;
    if(currText.includes('@')) {
      setEmailValidation('');
      dispatch(loginAction({email: e.target.value}))
    }
    else {
      setEmailValidation('Email Is not valid')
    }
  }

  const passwordHandler = (e) => {
    e.preventDefault();
    let currText = e.target.value;
    if(currText.length > 6) {
      setPasswordValidation('');
      dispatch(loginAction({password: e.target.value}))
    }
    else {
      setPasswordValidation("Password length should be greater than 6")
    }
  }

  const signupHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login-modal">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Email or Phone number" id="email" onChange={emailHandler}/>
      {emailValidation.length > 0 ? <label>{emailValidation}</label> : null}
      <input type="password" placeholder="Password" onChange={passwordHandler}/>
      {passwordValidation.length > 0 ? <label>{passwordValidation}</label> : null}
      <button onClick={signupHandler}>Sign Up</button>
    </div>
  );
}

function Login() {
  return (
    <div className="bg">
      <img
        src="http://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg"
        alt="image"
      />
      {ReactDOM.createPortal(<LoginModal />, document.getElementById("login"))}
    </div>
  );
}

export default Login;
