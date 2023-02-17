import React, { useContext, useState } from "react";
import Add from "../images/add-image.png";
import atch from "../images/png-transparent-attachment-illustration-computer-icons-email-attachment-scalable-graphics-free-email-attachment-miscellaneous-text-logo-thumbnail.png";

import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { async } from "@firebase/util";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../Firebase";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FaPaperclip} from 'react-icons/fa';

const Input = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSendBtn = (e) =>{
     e.code === "Enter" && handleSend();
  }
  const handleSend = async () => {
    if (file) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text: '',
                fileName:file.name,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                file: downloadURL,

              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });


    setFile(null);
    setText("")
  };
  const handleFileUpload = (e) =>{
    console.log("file upload")
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="write a message..."
        onKeyDown={handleSendBtn}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
         <label className="file-input-label">
      <input type="file" className="file-input" onChange={handleFileUpload} />
      <FaPaperclip className="file-input-icon" />
    </label>
      <div className="send">

      <button onClick={handleSend}>Send</button>
      </div>

    </div>
  );
};

export default Input;
