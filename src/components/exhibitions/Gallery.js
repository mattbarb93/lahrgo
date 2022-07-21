import React from "react";
import { useState, useEffect } from "react";

const Gallery = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 990);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 990;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const paintings = props.paintings.map((painting, index) => {
    return (
      //
      <div
        className={`${isMobile ? "eight wide column" : "four wide column"}`}
        key={index}
      >
        <a
          href={painting.url}
          target="_blank"
          className="column column-gallery"
        >
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
