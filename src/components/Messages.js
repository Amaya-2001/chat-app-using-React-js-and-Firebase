import { onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Message from "../components/Message.js";
import { ChatContext } from "../context/ChatContext";
import { db } from "../Firebase";
import { doc } from "firebase/firestore";

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data());
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {/* {messages.map((m) => (
        <Message meassage={m} />
      ))} */}
    </div>
  );
}

export default Messages;
