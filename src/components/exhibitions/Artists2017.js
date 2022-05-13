import React from "react";
import { Artists2017Data } from "./data/Artists2017Data";
import "./SubSection.css";
import Gallery from "./Gallery";

const Artists2017 = () => {
  return (
    <div>
      <h1>2017 Artists</h1>
      <Gallery paintings={Artists2017Data} />
    </div>
  );
};

export default Artists2017;
