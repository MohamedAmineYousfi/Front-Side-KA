import React from 'react'
import image2 from "../../assates/pack-sonorisation-2200w-enceintes-caisson-pieds-usb-bluetooth-bm-sonic-bms1512.jpg"
import image3 from "../../assates/pack-sonorisation-audio-club-15-sono-dj-bass-reflex-enceintes-trapezoidal-a-3-voies-15-38cm-1400w-amplificateur-1000w.jpg"
import image4 from "../../assates/images.jpg"
function Category() {
    return (
        <>
            <div className="Category">
                <div>SONO</div>
                <div> DJYING</div>
                <div>HEADPHONE</div>
                <div> Table</div>
                <div>AUDIOONE</div>
                <div>AUDIOONE</div>
            </div>
            <div className="imagesGallery">
                <div className="first">
                    <div className="firstImage">
                        <img src={image3} alt="img" />
                    </div>
                    <div className="offres">
                        <div>
                            <h1>
                                CHOOSE YOUR
                                <br /> LOOK
                            </h1>
                            <h4>See our clothing collections</h4>
                        </div>

                        <div>SEE OFFRES</div>
                    </div>

                    <div className="offres bgCl">
                        <div>
                            <h1>
                                CHOOSE YOUR
                                <br /> LOOK
                            </h1>
                            <h4>See our clothing collections</h4>
                        </div>

                        <div>SEE OFFRES</div>
                    </div>

                    <div className="secondImage">
                        <img src={image4} alt="img" />
                    </div>
                </div>
                <div className="second">
                    <img src={image2} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Category
