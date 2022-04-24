import React from 'react'
import image from "../../../assates/master-audio-two-way-fashion-speakerbt800-b.jpg"
function FeatruedItems() {
    return (
        <>

            <div className="featuredItems">
                <div className="container-featuredItems  first-container">
                    <div className="Items-style">Featured Items </div>
                    <div className="container-arrow">
                        <span className="container-arrow-style">
                            <i className="fas fa-chevron-left"> </i>
                        </span>
                        <span className="container-arrow-style">
                            <i className="fas fa-chevron-right"> </i>
                        </span>
                    </div>
                </div>
                <div className=" container-featuredItems second-container">
                    {/* start image slider */}

                    <div className="list-of-images">
                        <img src={image} className="fix-width-height" alt="img" />
                        <div className="cardTitle">TOP SALES</div>
                        <div className="cardBody"> Angels malu zip jeans slim black used</div>
                        <div className="price">139.00 DT </div>

                    </div>
                    {/* end image slider */}

                    {/* start image slider */}

                    <div className="list-of-images">
                        <img src={image} className="fix-width-height" alt="img" />
                        <div className="cardTitle">TOP SALES</div>
                        <div className="cardBody"> Angels malu zip jeans slim black used</div>
                        <div className="price">139.00 DT </div>

                    </div>
                    {/* end image slider */}
                    {/* start image slider */}

                    <div className="list-of-images">
                        <img src={image} className="fix-width-height" alt="img" />
                        <div className="cardTitle">TOP SALES</div>
                        <div className="cardBody"> Angels malu zip jeans slim black used</div>
                        <div className="price">139.00 DT </div>

                    </div>
                    {/* end image slider */}
                    {/* start image slider */}

                    <div className="list-of-images">
                        <img src={image} className="fix-width-height" alt="img" />
                        <div className="cardTitle">TOP SALES</div>
                        <div className="cardBody"> Angels malu zip jeans slim black used</div>
                        <div className="price">139.00 DT </div>

                    </div>
                    {/* end image slider */}
                    {/* start image slider */}

                    <div className="list-of-images">
                        <img src={image} className="fix-width-height" alt="img" />
                        <div className="cardTitle">TOP SALES</div>
                        <div className="cardBody"> Angels malu zip jeans slim black used</div>
                        <div className="price">139.00 DT </div>

                    </div>
                    {/* end image slider */}

                </div>

            </div>

        </>
    )
}

export default FeatruedItems
