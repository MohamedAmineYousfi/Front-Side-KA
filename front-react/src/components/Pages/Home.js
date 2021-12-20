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
      <SideBar />
      <div className="discount">
        <div className="smallContainer secondSmallContainer">
          <div className="nestedContainer HTilte">shoping without limits.</div>
          <div className="nestedContainer afterLine">
            You can choose the best option for you, and it does not
            matter whether you are in Prague or San Francisco. We
            will deliver your purchase!
            </div>
          <div className="nestedContainer shopNow">
            <span className="shopBtn">shop now</span>
          </div>

        </div>
        <div className="smallContainer secondSmallContainerForImage">
          <img src={image} className="fit-container" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Home;
