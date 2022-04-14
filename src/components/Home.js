import React from "react";
import ImageGrid from "./ImageGrid";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Home = () => {
  return (
    <div className="ui container">
      <div className="background">
        <ImageGrid images={SliderData} />
      </div>
      <div className="content">
        <h1>LISA AHRONEE GOLUB</h1>
      </div>
    </div>
  );
};

export default Home;
