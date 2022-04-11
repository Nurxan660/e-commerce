import React from "react";
import descriptionStore from "../../store/descriptionStore";
import { observer } from "mobx-react-lite";
const DescriptionDots=observer(({onclick,activeIndex})=>{
    return (
        <div className="description-all-dots">
            {descriptionStore.images.map((slide, index) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "desc-dot desc-active-dot" : "desc-dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    
            );
        })
export default DescriptionDots;