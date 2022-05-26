import React from "react";
import { LandscapesData } from "./data/LandscapesData";
import "../exhibitions/Gallery.css";
import Gallery from "../exhibitions/Gallery";

const Landscapes = () => {
  return (
    <div className="scroll">
      <h1>Landscapes</h1>
      <Gallery paintings={LandscapesData} />
    </div>
  );
};

export default Landscapes;
