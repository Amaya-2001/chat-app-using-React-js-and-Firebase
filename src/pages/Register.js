import React, { useState } from "react";
import Add from "../images/add-image.png";
import "../pages/register-page.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          // error handling is done here
          setError(true);
        },
        () => {
          // if all is well this will return a downloadable URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="brand">Data Akamutu Chat</span>
        <span className="title">Register</span>
        <form className="form-inline" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />

          <input type="email" placeholder="E-mail" />

          <input type="password" placeholder="Password" />

          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt=""></img>
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign Up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <span className="psw">
          You do have an account? <Link to={"/login"}>Login</Link>
        </span>
      </div>
    </div>
  );
};
export default Register;
