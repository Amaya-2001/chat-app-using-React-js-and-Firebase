import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import profile from "../images/download.png";
import { auth } from "../Firebase.js";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Data Akamutu Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt=""></img>
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
