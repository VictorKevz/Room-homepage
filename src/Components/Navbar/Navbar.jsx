import React, { useState } from "react";
import iconClose from "../../assets/images/icon-close.svg";
import iconMenu from "../../assets/images/icon-hamburger.svg";
import logo from "../../assets/images/logo.svg";
import "./navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <header className={`navbar-wrapper  ${isOpen ? 'white-bg' : ''}` }>
      <nav className="navbar-container">
        <figure className={`logo-container ${isOpen ? 'hide' : ''}`}>
          <img
            src={logo}
            alt="Room logo"
            className={`logo ${isOpen ? 'hide' : ''}`}
          />
        </figure>
        <ul className={`links-container ${isOpen ? 'open' : ''}`}>
          <li className="nav-link">home</li>
          <li className="nav-link">shop</li>
          <li className="nav-link">about</li>
          <li className="nav-link">contact</li>
        </ul>
        <div className="toggle-container" onClick={toggleMenu}>
          <img
            src={isOpen ? iconClose : iconMenu}
            alt={`${isOpen ? "icon-close" : "icon hamburger menu"}`}
          />
        </div>
      </nav>
      <div className={`mask-cover ${isOpen ? 'show':''}`}>
        
      </div>
    </header>
  );
}

export default Navbar;
