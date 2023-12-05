import React, { useState } from 'react'
import { PiArrowFatRightFill } from "react-icons/pi";
import { PiArrowFatLeftFill } from "react-icons/pi";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import style from './slider.module.css'

const imageArray = [img1, img2, img3, img4, img5, img6, img7, img8]

export default function Slider() {
  const [current, setCurrent] = useState(0)

  function handleNext() {
    if (current < imageArray.length - 1) {
      const i = current + 1
      setCurrent(i)
    } else {
      setCurrent(0)
    }
  }
  
  function handlePrew() {
    if (current > 0) {
      const i = current - 1
      setCurrent(i)
    } else {
      setCurrent(imageArray.length - 1)
    }
  }

  return (
    <div className={style.conatiner}>
      <h1 className={style.header}>Slider that works with <span className={style.react}>React.js</span></h1>
      <div className={style.slider}>
        <button onClick={handlePrew}><PiArrowFatLeftFill size={30} color={'white'}/></button>
        <img className={style.sliderImage} src={imageArray[current]} alt={current} />
        <button onClick={handleNext}><PiArrowFatRightFill size={30} color={'white'}/></button>
      </div>
    </div>
  )
}
