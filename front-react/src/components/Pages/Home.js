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
     <div className="discount">
      <div>1</div>
      <div>2</div>
     </div>
    </>
  );
}

export default Home;
