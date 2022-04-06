import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Home = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default Home;
