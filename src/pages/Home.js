import React from "react";
import Sidebar from "../components/Sidebar.js";
import Chat from "../components/Chat.js";
import "../components/homewindow.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default Home;
