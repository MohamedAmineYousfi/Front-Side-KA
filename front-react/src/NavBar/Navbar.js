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
import Button from 'react-bootstrap/Button';
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
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                <NavLink to="" activeStyle>
                Search<input></input>
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Panier
                    <i class="fas fa-shopping-cart"></i></NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;