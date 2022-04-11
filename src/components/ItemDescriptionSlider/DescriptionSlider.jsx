import React, { useEffect, useState } from "react"
import sliderImage from "../Slider/sliderImage";
import "../css/Slider.css";
import DescriptionSliderContent from "./DescriptionSliderContent";
import DescriptionDots from "./DescriptionDots";


function DescriptionSlider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    

    return (
        <div className="description-slider-container">
            <DescriptionSliderContent activeIndex={activeIndex}  />
            
            <DescriptionDots
                activeIndex={activeIndex}
            
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default DescriptionSlider;