import React from "react";
import "../styles/Header.css";

const Header = props => {
  return (
  <div className="header-div">
    <div className="header">POKEMEMORY</div>
    <div className="score">Your Score: {props.score}</div>
    <div className="high-score">High Score: {props.high_score}</div>
  </div>
  );
};

export default Header;