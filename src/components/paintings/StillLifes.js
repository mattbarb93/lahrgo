import React from "react";
import { StillLifesData } from "./data/StillLifesData";
import "../exhibitions/Gallery.css";
import Gallery from "../exhibitions/Gallery";

const StillLifes = () => {
  return (
    <div className="scroll">
      <h1>StillLifes</h1>
      <Gallery paintings={StillLifesData} />
    </div>
  );
};

export default StillLifes;
