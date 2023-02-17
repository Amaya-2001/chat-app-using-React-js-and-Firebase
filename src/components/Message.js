import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import msg from "../images/download.jpg";
import msgs from "../images/photo-1619532839116-af15d051cd3e.jpg";
import { ChatContext } from "../context/ChatContext";
import {FcDocument} from 'react-icons/fc'
const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        ></img>

        <span>just now</span>
      </div>
      <div className="messageContent">
      {
        !message.file &&
        <p>{message.text}</p>
      }
       {
          message.file &&(
            <div>
             <a href={message.file} target="_blank" rel="noreferrer" style={{fontSize: "72px"}} target="_blank"><FcDocument/>

          </a>
<span>{message.fileName}</span>
</div>
          )

        }
      </div>
    </div>
  );
};

export default Message;
