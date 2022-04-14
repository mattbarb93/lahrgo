import "./ImageGrid.css";
import React from "react";
// import Image from "./Image";

const ImageGrid = (props) => {
  console.log(props);
  //Using
  const images = props.images.map((image, index) => {
    return <img src={image.image} alt="image" className="" key={index} />;
  });
  return <div className="image-grid">{images}</div>;
};

export default ImageGrid;
