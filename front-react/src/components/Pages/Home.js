import React from "react";
import NavBar from "../ReusableComponent/NavBar/navBar";
import Caroussel from "../ReusableComponent/Caroussel/Caroussel";
import Category from "../ReusableComponent/Category/Category";
import SideBar from "../ReusableComponent/SideBar/sideBar";
import Discount from "../ReusableComponent/Discount/Discount";
import FeatruedItems from "../ReusableComponent/featuredItems/FeatruedItems";
import MostPopular from "../ReusableComponent/featuredItems/MostPopular";
import ExpolreMore from "../ReusableComponent/Discount/expolreMore";
import Footer from "../ReusableComponent/Footer/Footer";
import image from "../../../src/style/cart.ico"
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
      <ExpolreMore/>
      <Footer/>  
    </>
  );
}

export default Home;
