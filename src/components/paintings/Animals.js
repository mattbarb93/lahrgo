import React from "react";
import { AnimalsData } from "./data/AnimalsData";
import "../exhibitions/Gallery.css";
import Gallery from "../exhibitions/Gallery";

const Animals = () => {
  return (
    <div className="scroll">
      <h1>Animals</h1>
      <Gallery paintings={AnimalsData} />
    </div>
  );
};

export default Animals;
