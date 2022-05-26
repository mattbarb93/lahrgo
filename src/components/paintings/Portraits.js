import React from "react";
import { PortraitsData } from "./data/PortraitsData";
import "../exhibitions/Gallery.css";
import Gallery from "../exhibitions/Gallery";

const Portraits = () => {
  return (
    <div className="scroll">
      <h1>Portraits</h1>
      <Gallery paintings={PortraitsData} />
    </div>
  );
};

export default Portraits;
