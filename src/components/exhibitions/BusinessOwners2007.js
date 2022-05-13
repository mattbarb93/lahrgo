import React from "react";
import { BusinessOwners2007Data } from "./data/BusinessOwners2007Data";
import "./SubSection.css";
import Gallery from "./Gallery";

const BusinessOwners2007 = () => {
  return (
    <div>
      <h1>
        Portraits of Huntington Businesses: An Artists Tribute - March 2007
      </h1>
      <Gallery paintings={BusinessOwners2007Data} />
    </div>
  );
};

export default BusinessOwners2007;
