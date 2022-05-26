import React from "react";
import { BronxZoo2011Data } from "./data/BronxZoo2011Data";
import "./Gallery.css";
import Gallery from "./Gallery";

const BronxZoo2011 = () => {
  return (
    <div className="scroll">
      <h1>A Visit to the Bronx Zoo - October 2011</h1>
      <Gallery paintings={BronxZoo2011Data} />
    </div>
  );
};

export default BronxZoo2011;
