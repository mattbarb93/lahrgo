import React from "react";

const Gallery = (props) => {
  const paintings = props.paintings.map((painting, index) => {
    return (
      <div className="four wide column" key={index}>
        <a href={painting.url} className="column column-gallery">
          <img className="ui image" src={painting.image} />
          <h3>{painting.name}</h3>
          <h5>{painting.type}</h5>
        </a>
      </div>
    );
  });
  return <div className="ui grid">{paintings}</div>;
};

export default Gallery;
