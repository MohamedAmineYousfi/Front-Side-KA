import React from "react";
import NavBar from "../NavBar/navBar";
import Caroussel from "../Caroussel/Caroussel";
import Category from "../Category/Category";
function Home() {
  return (
    <>
      <NavBar />
      <Caroussel />
      <Category />
      <div className="sideBar">
        <div className="checkbox">
          <div>    
                  <span className="span">
            Shop Some Wear: 

          </span>
          <div className="filter">
            
          <input type="checkbox"/> <span>BEST SELLERS</span><br/>
          <input type="checkbox"/> <span>NEW ARIVALS</span><br/>
          <input type="checkbox"/> <span>TOP WOMEN</span><br/>
          <input type="checkbox"/> <span>COLLECTION: SUMMER</span><br/>
          <input type="checkbox"/> <span>COLLECTION: SPRING</span><br/>
          <input type="checkbox"/> <span>TRENDING</span>
          </div>
          </div>

          </div>
        <div className="listofImages">2</div>
      </div>
    </>
  );
}

export default Home;
