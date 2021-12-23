import React from "react";
import image from "../../../assates/P328.589__G_300.jpg";
function ExpolreMore() {
  return (
    <>
      <div className="translate-discount">
        <div className="discount">
          <div className="smallContainer secondSmallContainerForImage">
            <img src={image} className="fit-container" alt="img" />
          </div>
          {/*    */}
          <div className="smallContainer secondSmallContainer">
            <div className="nestedContainer HTilte">
              EXPLORE THE BEST OF YOU.
            </div>
            <div className="nestedContainer afterLine">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco.
            </div>
            <div className="nestedContainer shopNow">
              <span className="shopBtn">shop now</span>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </>
  );
}

export default ExpolreMore;
