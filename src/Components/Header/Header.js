import React from 'react';
import { Link }  from "react-router-dom";
import "./header.css";

function Header(){
    return(
      <header className="Header">
        <nav className="Header-nav">
          <a href="/" className="Header-brand">Comments List</a>
          <ul className="Header-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/Form">Form</Link></li>
            <li><Link to="/Counter">Counter</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;