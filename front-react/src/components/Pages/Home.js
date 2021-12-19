import React from "react";
import NavBar from "../NavBar/navBar";
import Caroussel from "../Caroussel/Caroussel";
import Category from "../Category/Category";
import SideBar from "../SideBar/sideBar";
function Home() {
  return (
    <>
      <NavBar />
      <Caroussel />
      <Category />
      <SideBar/>
     
    </>
  );
}

export default Home;
