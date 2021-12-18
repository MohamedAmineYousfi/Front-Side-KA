import React, { useState } from 'react'
import images from "../../assates/casque-audio-anti-bruit-musique.jpg";
function Caroussel() {
  const [index1, setIndex1] = useState(true)
  const [index2, setIndex2] = useState(false)
  const [index3, setIndex3] = useState(false)
  const [index4, setIndex4] = useState(false)
  const changeImage = (index) => {
    if (index === 1) {
      setIndex1(true)
      setIndex2(false)
      setIndex3(false)
      setIndex4(false)
      return;
    } else if (index === 2) {
      setIndex1(false)
      setIndex2(true)
      setIndex3(false)
      setIndex4(false)
      return;
    }
    else if (index === 3) {
      setIndex1(false)
      setIndex2(false)
      setIndex3(true)
      setIndex4(false)
      return;
    }
    else if (index === 4) {
      setIndex1(false)
      setIndex2(false)
      setIndex3(false)
      setIndex4(true)
      return;
    }
    return;
  }
  return (
    <div className="landing">
      <div className="nested">
        <div className="text">
          <div className="title">
            <div className="sale">
              1er Fournisseur de materiel Sono  <br />
              en TUNISIE
            </div>
            <div className="button">
              SHOP NOW
            </div>
          </div>
          <div className="spans">
            <span onClick={() => changeImage(1)} className={index1 ? "state" : null}></span>
            <span onClick={() => changeImage(2)} className={index2 ? "state" : null}></span>
            <span onClick={() => changeImage(3)} className={index3 ? "state" : null}></span>
            <span onClick={() => changeImage(4)} className={index4 ? "state" : null}></span>
          </div>
        </div>
        <div className="caroussel">
          <div className="images">
            <img src={images} alt="img" />
          </div>
          <div className="arrow">
            <span>
              <i className="fas fa-chevron-left"></i>
            </span>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Caroussel
