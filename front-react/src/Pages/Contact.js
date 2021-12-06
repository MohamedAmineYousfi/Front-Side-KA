import React from 'react'
import pic from '../assates/ballfleKA1.jpg';

function Contact() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <div style={{marginLeft:10}}>
           <h1 >kamergi Audio</h1> </div>
           <div>
           <h2 >"KA" est une société qui fabrique les haut-parleurs ,aussi vente tous qui est matériel de sonorisation et instrument musical en Gros et détail.</h2>
          </div> 
          <img src={pic} style={{marginLeft:600,width:1000,height:500}} alt="BaffleKA"/>
        </div>
    );
};

export default Contact;
