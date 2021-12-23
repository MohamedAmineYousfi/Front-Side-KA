import React from 'react'
import image2 from "../../../assates/pack-sonorisation-2200w-enceintes-caisson-pieds-usb-bluetooth-bm-sonic-bms1512.jpg";
import image3 from "../../../assates/pack-sonorisation-audio-club-15-sono-dj-bass-reflex-enceintes-trapezoidal-a-3-voies-15-38cm-1400w-amplificateur-1000w.jpg";
import image4 from "../../../assates/images.jpg";
function SideBar() {
    return (
       <>
        <div className="sideBar">
        <div className="checkbox">
          <div>
            <span className="span">Shop Some Wear:</span>
            <div className="filter">
              <input type="checkbox" /> <span>BEST SELLERS</span>
              <br />
              <input type="checkbox" /> <span>NEW ARIVALS</span>
              <br />
              <input type="checkbox" /> <span>TOP WOMEN</span>
              <br />
              <input type="checkbox" /> <span>COLLECTION: SUMMER</span>
              <br />
              <input type="checkbox" /> <span>COLLECTION: SPRING</span>
              <br />
              <input type="checkbox" /> <span>TRENDING</span>
            </div>
          </div>
        </div>

        <div className="listofImages">
          <div className="blockOfImages">
            {/** start images */} 
            <div>
              <div>
                <img className="hegWid" src={image2} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
            
              <div>
                <img className="hegWid" src={image4} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image3} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image4} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image2} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image3} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image4} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
               {/** start images */} 
               <div>
              <div>
                <img className="hegWid" src={image2} alt="img" />
                <span className="cardTitle">TOP WOMEN</span>
                <div className="cardBody">
                  Angels malu zip jeans slim black
                  <div className="price">139,00 EUR</div>
                </div>
              </div>
            </div>
            {/** end images */} 
          </div>

          <div className="loadMore">
            <span>LOAD MORE</span>
          </div>
        </div>
      </div>
       </>
    )
}

export default SideBar
