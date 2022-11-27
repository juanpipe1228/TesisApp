import React from "react";
import { useEffect, useState } from "react";
import "./Styles.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img
            src="https://www.usbbog.edu.co/wp-content/uploads/2021/07/logo-footer.png"
            alt="usb"
          ></img>
          <a href="/" className="navbar-logo">
            Microphone test
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="/info" className="nav-links">
                Información
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
