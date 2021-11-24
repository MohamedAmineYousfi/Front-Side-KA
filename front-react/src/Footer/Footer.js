import React from "react";
import KALOGO from '../assates/KALOGO.jpg'


const Footer = () => {
    return (
        <div style={{
            backgroundColor:"black",
    marginTop:1100,
height:250,
fontSize:50,
textDecorationColor:"white",
color:"white",display: "row"}}>
    <div >
    Kamergi Audio
       <img src={KALOGO} style={{width:150,height:150}} alt="logoKA"/></div>
</div>
    );
};
export default Footer;