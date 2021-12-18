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
        <div>1</div>
        <div>2</div>
      </div>
    </>
  );
}

export default Home;
