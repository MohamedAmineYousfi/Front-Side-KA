import React from "react";
import NavBar from "../NavBar/navBar";
import Caroussel from "../Caroussel/Caroussel";
import Category from "../Category/Category";
import SideBar from "../SideBar/sideBar";
import image from "../../assates/103102735_298006384923121_4821662942372246899_n.jpg"
function Home() {
  return (
    <>
      <NavBar />
      <Caroussel />
      <Category />
      <SideBar/>
     <div className="discount">
      <div className="smallContainer">1</div>
      <div className="smallContainer ">
        <img src={image} className="fit-container" alt="img"/>
      </div>
     </div>
    </>
  );
}

export default Home;
