import React from "react";
import { Artists2017Data } from "./data/Artists2017Data";
import "./Gallery.css";
import Gallery from "./Gallery";

const Artists2017 = () => {
  return (
    <div className="scroll">
      <h1>2017 Artists</h1>
      <Gallery paintings={Artists2017Data} />
    </div>
  );
};

export default Artists2017;
