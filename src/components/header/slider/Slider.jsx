import React, { useState } from 'react';

import SlideImg1 from '../../../assets/images/Slider_img.jpeg';
import SlideImg2 from '../../../assets/images/Slider_img2.jpeg';
import SlideImg3 from '../../../assets/images/Slider_img3.jpeg';
import Arrow from '../../../assets/images/arrow.svg'

const Slider = () => {
    // const [activeSlider, setActiveSlider] = useState(0);
    const [slidesArr, setSlidesArr] = useState([SlideImg2,SlideImg1,SlideImg3])
    const leftArrowPressHandler = () =>{
        const arr  = [...slidesArr];
        arr.unshift(arr.pop())
        setSlidesArr(arr)
    }
    const rightArrowPressHandler = () =>{
        const arr = [...slidesArr];
        arr.push(arr.shift())
        setSlidesArr(arr)
    }
    return (
        <div className="slider_container">
            <div className="slides_list">
                 {slidesArr.map((slide, index) => (
                    <div className={index === 1 ? "slide active" : "slide"} key={Math.random()}>
                        <img src={slide} alt="Slide img Pizza" />
                    </div>
                    ))}
            </div>
            <div className="slider_arrows">
                <input className="arrow-left" type="image" src={Arrow} alt="Photo Arrow" onClick={leftArrowPressHandler} />
                <input className="arrow-right" type="image" src={Arrow} alt="Photo Arrow" onClick={rightArrowPressHandler}/>
            </div>
            <div className="slider-dots"></div>
        </div>
    )
}

export default Slider
