import React from "react";
import "../styles/style.css";
import { TITLE } from "../constant";
import search from '../svg/search.svg'

export const Header = () => {
  return (
    <div>
      <div className="header_conatiner">
        <div className="head_title">{TITLE}</div>
      </div>
      <nav class="navbar navbar-dark bg-dark nav_header">
        <div className="nav_btn_container">
          <button className="btn btn-primary nav_button">Select State</button>
          <button className=" btn btn-primary nav_button">Select Place</button>
          <button className="btn btn-primary nav_button">About</button>
          <button className="btn btn-primary nav_button">Sign in</button>
        </div>
        <div className="search_container">
          <input className="search_box"
            placeholder="search"
            defaultValue=""
          />
          <button type="button" class="btn btn-secondary">
          <img src = {search} alt = "slow internet"/>
          </button>
        </div>
      </nav>
    </div>
  );
};
