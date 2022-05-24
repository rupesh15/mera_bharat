import React from "react";
import "../styles/style.css";
import { TITLE } from "../constant";
import search from '../svg/search.svg'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const navigation = val => {
    switch (val) {
      case 'select_state': 
      console.log('it is select state');
      navigate('/home')
        break;
        case 'select_place': console.log('it is select_place');
        break;
        case 'select_events': 
        console.log('it is select_events');
        navigate('/events')
        break;
        case 'signin': console.log('it is signin');
        break; 
        default: console.log('selection not found')
    }
  }

  return (
    <div>
      <div className="header_conatiner">
        <div className="head_title">{TITLE}</div>
      </div>
      <nav class="navbar navbar-dark bg-dark nav_header">
        <div className="nav_btn_container">
          <button className="btn btn-primary nav_button" onClick={() => navigation('select_state')}>Select State</button>
          <button className=" btn btn-primary nav_button" onClick={() => navigation('select_place')}>Select Place</button>
          <button className="btn btn-primary nav_button" onClick={() => navigation('select_events')}>Events</button>
          <button className="btn btn-primary nav_button" onClick={() => navigation('signin')}>Sign in</button>
        </div>
        <div className="search_container">
          <input className="search_box"
            placeholder="search"
            defaultValue=""
          />
          <button type="button" class="btn btn-secondary">
            <img src={search} alt="slow internet" />
          </button>
        </div>
      </nav>
    </div>
  );
};
