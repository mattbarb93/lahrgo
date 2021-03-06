import React from "react";
import { Portraits2004Data } from "./data/Portraits2004Data";
import "./Gallery.css";
import Gallery from "./Gallery";

const Portraits2004 = () => {
  return (
    <div className="scroll">
      <h1>Portraits by Lahrgo - July 2004</h1>
      <p>Click on the image to enlarge it</p>
      <Gallery paintings={Portraits2004Data} />
    </div>
  );
};

export default Portraits2004;
