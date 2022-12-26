import React from "react";
import msg from "../images/download.jpg";
import msgs from "../images/photo-1619532839116-af15d051cd3e.jpg";

const Message = ({ message }) => {
  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={msg}></img>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={msgs} alt=""></img>
      </div>
    </div>
  );
};

export default Message;
