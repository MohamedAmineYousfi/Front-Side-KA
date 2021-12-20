import React from "react";
import NavBar from "../NavBar/navBar";
import Caroussel from "../Caroussel/Caroussel";
import Category from "../Category/Category";
import SideBar from "../SideBar/sideBar";
import Discount from "../Discount/Discount";
function Home() {
  return (
    <>
      <NavBar />
      <Caroussel />
      <Category />
      <SideBar />
      <Discount/>
      <div className="featuredItems">
        <div className="container-featuredItems  first-container">
          <div className="Items-style">
          Featured Items
          </div>
          <div className="container-arrow">   
            <span className="container-arrow-style">
              <i className="fas fa-chevron-left"></i>
            </span>
            <span className="container-arrow-style">
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        
        </div>
        <div className=" container-featuredItems second-container">2</div>
      </div>
    </>
  );
}

export default Home;
