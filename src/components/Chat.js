import React, { useContext } from "react";
import call from "../images/download (1).png";
import videocall from "../images/video-call-icon-vector-illustration-video-chat-icon-vector_654297-124.webp";
import more from "../images/images (1).png";
import Messages from "../components/Messages.js";
import Input from "../components/Input.js";
import { ChatContext } from "../context/ChatContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEllipsisV, FaPhone, FaVideo } from "react-icons/fa";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>

      <div className="chatIcons">

           <FaPhone
            style={{ marginTop: "8px", marginRight: "5px", fontSize: "25px" }}/>
           <FaVideo
             style={{ marginTop: "8px", marginRight: "5px", fontSize: "25px" }}/>
           <FaEllipsisV
           style={{ marginTop: "8px", marginRight: "5px", fontSize: "25px" }}/>
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
