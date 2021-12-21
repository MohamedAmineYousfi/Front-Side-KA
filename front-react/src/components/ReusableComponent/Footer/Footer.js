import React from "react";
import kamergiLogo from "../../../assates/KALOGO.jpg"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container first-footer-container">
          <div className="first-footer-container-small">
            <i class="fas fa-check icon-color"></i>
            <div>Duties and Taxes Guaranteed</div>
          </div>

          <div className="first-footer-container-small">
            <i class="fas fa-check icon-color"></i>
            <div>Free Express Shipping</div>
          </div>
          <div className="first-footer-container-small">
            <i class="fas fa-check icon-color"></i>
            <div>Customer Love</div>
          </div>
          <div className="first-footer-container-small">
            <i class="fas fa-check icon-color"></i>
            <div>Easy Returns</div>
          </div>
          <div className="first-footer-container-small">
            <i class="fas fa-check icon-color"></i>
            <div>Secure Payment</div>
          </div>
        </div>

        <div className="footer-container second-footer-container">

          <div className="second-footer-container-small ">

            <div className="footer-title"><img className="logo-footer-width" src={kamergiLogo} alt="img" /></div>
          </div>
          <div className="second-footer-container-small ">
            <div className="footer-title">features</div>
            <div className="footer-text-color" >men</div>
            <div className="footer-text-color" >Women</div>
            <div className="footer-text-color" >boys</div>
            <div className="footer-text-color" >girls</div>
            <div className="footer-text-color" >new arrivals</div>
            <div className="footer-text-color" >shoes</div>
            <div className="footer-text-color" >cothes</div>
            <div className="footer-text-color" >accessories</div>

          </div>
          <div className="second-footer-container-small ">
            <div className="footer-title">Menu</div>
            <div className="footer-text-color" >About us</div>
            <div className="footer-text-color" >contact us</div>
            <div className="footer-text-color" >my account</div>
            <div className="footer-text-color" >orders history</div>
            <div className="footer-text-color" >MY WISHLIST</div>
            <div className="footer-text-color" >BLOG</div>
            <div className="footer-text-color" >LOGIN</div>


          </div>
          <div className="second-footer-container-small ">
            <div className="footer-title">  contact us</div>
            <div className="footer-text-color1" ><div className="small-title-footer">Address:</div>  123 STREET NAME, CITY, ENGLAND</div>
            <div className="footer-text-color1" ><div className="small-title-footer">Phone:</div>(123) 456-7890</div>
            <div className="footer-text-color1" ><div className="small-title-footer">email:</div>MAIL@EXAMPLE.COM</div>
            <div className="footer-text-color1" ><div className="small-title-footer">working days/hours</div>MON - SUN / 9:00AM - 8:00PM</div>



          </div>
          <div className="second-footer-container-small ">

            <div className="footer-title">follow us</div>

            <div className="footer-text-color " ><i class="fab fa-facebook-square footer-logo"></i> <span className="footer-flex"> FACEBOOK</span>   </div>
            <div className="footer-text-color " ><i class="fab fa-twitter-square footer-logo"></i> <span className="footer-flex">TWITTER</span> </div>
            <div className="footer-text-color " ><i class="fab fa-instagram-square footer-logo"></i> <span className="footer-flex">INSTAGRAM</span> </div>



          </div>
          <div className="second-footer-container-small ">

            <div className="footer-title">join us</div>
            <div className="footer-text-color2">Subscribe to our newsletters</div>
            <input type="email" placeholder="Email Address" className="footer-email" />
            <div className="footer-Subscribe">Subscribe!</div>
          </div>

        </div>
        <div className="footer-container third-footer-container">
          <div className="third-footer-container-text">
            &copy; 2019. Crisp theme Developed by Belvg
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
