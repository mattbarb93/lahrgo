import "./ImageGrid.css";
import React, { useRef } from "react";
import ImageCard from "./Image";
// import Image from "./Image";

const ImageGrid = (props) => {
  //Using
  const images = props.images.map((image, index) => {
    return <ImageCard key={index} image={image} />;
  });

  return <div className="image-grid">{images}</div>;
};

export default ImageGrid;
