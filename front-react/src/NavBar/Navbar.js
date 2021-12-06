import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";
import "bootstrap-icons/font/bootstrap-icons.css";
import KALOGO from '../assates/KALOGO.jpg'


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
             <img src={KALOGO} style={{width:150,height:150}} alt="logoKA"/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activestyle="true">
                    Home
                </NavLink>
                <NavLink to="/about" activestyle="true">
                   Nos Produits
                </NavLink>
                <NavLink to="/contact" activestyle="true">
                    Contact
                </NavLink>
                <NavLink to="" activestyle="true">
                Search <input className="input"></input>
                </NavLink>
              
                <NavBtn>
                    <NavBtnLink to="/sign-up">Panier 
                    <i className="bi bi-bucket-fill"></i></NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;