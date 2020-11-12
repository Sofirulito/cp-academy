import React from 'react';
import "./header.css";

function Header(){
    return(
      <header className="Header">
        <nav className="Header-nav">
          <a href="/" className="Header-brand">Comments List</a>
          </nav>
      </header>
    )
}

export default Header;