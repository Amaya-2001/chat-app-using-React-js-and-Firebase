import React, { useContext } from "react";
import call from "../images/download (1).png";
import videocall from "../images/video-call-icon-vector-illustration-video-chat-icon-vector_654297-124.webp";
import more from "../images/more-options-icon.webp";
import Messages from "../components/Messages.js";
import Input from "../components/Input.js";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={call} alt=""></img>
          <img src={videocall} alt=""></img>
          <img src={more} alt=""></img>
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  );
};

export default Chat;
