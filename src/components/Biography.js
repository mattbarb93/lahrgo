import React from "react";
import "./Biography.css";

const Biography = () => {
  return (
    <div className="biography-content">
      <h1>About the Artist</h1>
      <div className="biography-section">
        <img src="../../images/Bronx Zoo rhinoceros.jpg" alt="rhino"></img>
        <h3>
          Lisa Ahronee Golub was raised in Rome, Italy and Geneva, Switzerland.
          She came to the U.S. to attend Wellesley College, and later settled in
          Huntington, Long Island. She has studied art and painted throughout
          her life. Lisa started showing her work in 2002 in Huntington, in both
          juried and solo exhibits. She primarily paints portraits of adults,
          children, and animals. She also enjoys capturing landscapes of special
          places she has visited. Lisa’s preferred mediums are soft pastels, oil
          paints, gouache and oil pastels. Her work is characterized by her
          strong use of color and composition.
          <br></br>
          <br></br>
          Lisa does both commissioned and non-commissioned work.
        </h3>
      </div>
    </div>
  );
};

export default Biography;
