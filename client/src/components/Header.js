import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted segment custom-header">
      <div className="ui inverted secondary pointing menu">
        <a href="*" className="active item">
          Home
        </a>
        <a href="*" className="item">
          Messages
        </a>
        <a href="*" className="item">
          Friends
        </a>
      </div>
    </div>
  );
};

export default Header;
