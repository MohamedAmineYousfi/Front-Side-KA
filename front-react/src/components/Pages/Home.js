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


      </div>
    </>
  );
}

export default Home;
