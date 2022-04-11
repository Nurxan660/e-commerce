import React from "react";
import descriptionStore from "../../store/descriptionStore";
import { observer } from "mobx-react-lite";
const  DescriptionSliderContent= observer(({activeIndex })=>{
    return (
        <section>
            {descriptionStore.images.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls} alt="" />
                    
                </div>
            ))}
        </section>
    );
            })

export default DescriptionSliderContent;