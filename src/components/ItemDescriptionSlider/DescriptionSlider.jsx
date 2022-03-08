import React, { useEffect, useState } from "react"
import sliderImage from "../Slider/sliderImage";
import "../css/Slider.css";
import SliderContent from "../Slider/SliderContent";
import DescriptionDots from "./DescriptionDots";

const len = sliderImage.length - 1;

function DescriptionSlider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    

    return (
        <div className="description-slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            
            <DescriptionDots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}

export default DescriptionSlider;