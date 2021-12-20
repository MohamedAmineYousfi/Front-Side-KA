import React from "react";
import NavBar from "../NavBar/navBar";
import Caroussel from "../Caroussel/Caroussel";
import Category from "../Category/Category";
import SideBar from "../SideBar/sideBar";
import Discount from "../Discount/Discount";
import FeatruedItems from "../featuredItems/FeatruedItems";
import MostPopular from "../featuredItems/MostPopular";
function Home() {
  return (
    <>
      <NavBar />
      <Caroussel />
      <Category />
      <SideBar />
      <Discount />
     <FeatruedItems/>
      <MostPopular/>
    </>
  );
}

export default Home;
