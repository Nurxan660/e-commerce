import React from "react";

function DescriptionDots({ activeIndex, onclick, sliderImage }) {
    return (
        <div className="description-all-dots">
            {sliderImage.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "desc-dot desc-active-dot" : "desc-dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    );
}

export default DescriptionDots;