import React, { useState } from "react";
import image from "../../../assates/KALOGO.jpg";
function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <div className="container">
        <a href="#home">
          <img src={image} alt="logo" />
        </a>
        <i
          className="fas fa-bars toggle-menu"
          onClick={() => setToggleMenu(!toggleMenu)}
        ></i>
        {toggleMenu ? (
          <ul className="ul">
            <li>
              <a href="#a">HOME</a>
            </li>
            <li>
              <a href="#a">SHOP</a>
            </li>
            <li>
              <a href="#a">CONTACT US</a>
            </li>
            <li>
              <a href="#a">
                <div >
                  <i className="fas fa-search"></i>
                  <input className="btn" placeholder="SEARCH" />
                </div>
              </a>
            </li>
            <li>
              <a href="#a">SIGN IN</a>
            </li>
          </ul>
        ) : null}
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#serbice">SHOP</a>
            </li>
            <li>
              <a href="#potfilio">SALE</a>
            </li>
            <li>
              <a href="#about">CONTACT US</a>
            </li>
          </ul>
          <div className="form">
            <i className="fas fa-search"></i>
          </div>
          <input className="btn" placeholder="SEARCH" />
        </nav>

        <nav className="nav2">
          <ul>
            <li>
              <a className="active" href="#home">
                SIGN IN
              </a>
            </li>
          </ul>

          <i className="fas fa-shopping-cart shop"></i>
          <ul className="margin">
            <li>
              Shopping card <br />
              0,00DT
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
