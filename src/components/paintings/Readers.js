import React from "react";
import { ReadersData } from "./data/ReadersData";
import "../exhibitions/Gallery.css";
import Gallery from "../exhibitions/Gallery";

const Readers = () => {
  return (
    <div className="scroll">
      <h1>Readers</h1>
      <Gallery paintings={ReadersData} />
    </div>
  );
};

export default Readers;
