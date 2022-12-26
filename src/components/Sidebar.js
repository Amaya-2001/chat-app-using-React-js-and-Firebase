import React from "react";
import Navbar from "../components/Navbar.js";
import Search from "../components/Search.js";
import Chats from "../components/Chats.js";
function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar></Navbar>
      <Search></Search>
      <Chats></Chats>
    </div>
  );
}

export default Sidebar;
