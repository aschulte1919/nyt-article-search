import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';

class Nav extends Component {
  constructor(props) {
      super(props);
  };

  render(){
    return(
      <div style={{"backgroundColor": "purple"}}>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#" className="brand-logo center">SEARCH FOR ANY ARTICLE - NYT</a></li>
              <li><a onClick={()=>window.location.replace("/")} style={{"text-decoration": "none"}}>Home</a></li>
              <li><NavLink to="/saved" style={{"text-decoration": "none"}}>Saved</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
  )}
}

export default Nav;
