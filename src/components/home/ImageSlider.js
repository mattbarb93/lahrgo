import "./ImageSlider.css";
import React, { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <i class="angle left icon left-arrow" onClick={prevSlide}></i>
      <i class="angle right icon right-arrow" onClick={nextSlide}></i>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="slider image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
