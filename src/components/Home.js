import "./Home.css";
import React from "react";
import ImageGrid from "./ImageGrid";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { useHistory } from "react-router-dom";
import Sections from "./Sections";

const Home = () => {
  const history = useHistory();
  const navigateToPaintings = () => history.push("/pictures");
  const navigateToExhibitions = () => history.push("/exhibitions");
  return (
    <div className="ui container">
      <div className="background">
        <ImageGrid images={SliderData} />
      </div>
      <div className="content">
        <h1>LISA AHRONEE GOLUB</h1>
        <div className="home-buttons">
          <button
            onClick={navigateToPaintings}
            class="ui huge inverted orange button"
          >
            Paintings
          </button>
          <button
            onClick={navigateToExhibitions}
            class="ui huge inverted red button"
          >
            Exhibitions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
