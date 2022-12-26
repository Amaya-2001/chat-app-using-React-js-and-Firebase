import React from "react";
import Add from "../images/add-image.png";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something" />
      <button type="button" className="sendbtn">
        Send
      </button>
      {/* <div className="sendimg">
        <img src={Add} alt=""></img>
      </div>
      <div className="attachimg">
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Add} alt=""></img>
        </label>
      </div> */}
    </div>
  );
}

export default Input;
