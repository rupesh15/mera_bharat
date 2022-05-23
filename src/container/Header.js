import React from "react";
import "../styles/style.css";
import { TITLE } from "../constant";

export const Header = () => {
  return (
    <div>
      <div className="header_conatiner">
        <div className="head_title">{TITLE}</div>
      </div>
      <nav class="navbar navbar-dark bg-dark nav_header">
        <div className="nav_btn_container">
          <button className="btn btn-primary nav_button">button 1</button>
          <button className=" btn btn-primary nav_button">button 2</button>
          <button className="btn btn-primary nav_button">button 3</button>
          <button className="btn btn-primary nav_button">button 4</button>
        </div>
      </nav>
    </div>
  );
};
