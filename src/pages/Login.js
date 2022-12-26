import React from "react";
import "../pages/login-page.css";
import { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <span className="main">Data Akamutu Chat</span>
        <span className="subtitle">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <span className="reg">
          You don't have an account? <Link to={"/register"}>Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
