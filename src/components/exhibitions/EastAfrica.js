import React from "react";
import "./Gallery.css";
import Gallery from "./Gallery";
import { EastAfricaData } from "./data/EastAfricaData";

const EastAfrica = () => {
  return (
    <div className="scroll">
      <h1>EAST AFRICA</h1>
      <p>Click on the image to enlarge it</p>
      <Gallery paintings={EastAfricaData} />
    </div>
  );
};

export default EastAfrica;

{
  /* <div class="ui grid">
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Elephant Youth.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Rwandan Vegetables.jpg"
            />
            <h3>Rwandan Vegetables</h3>
            <h5>Gouache</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Four Water Buffaloes.jpg"
            />
            <h3>Water Buffalos</h3>
            <h5>Oil</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Elephant Youth.jpg"
            />
            <h3>Elephant Youth</h3>
            <h5>Oil</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Here Come the Elephants.jpg"
            />
            <h3>Here Come The Elephants</h3>
            <h5>Oil</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Elephants Trooping by the Baobab Tree.jpg"
            />
            <h3>Elephants Trooping by the Baobab Treet</h3>
            <h5>Gouache</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img className="ui image" src="../images/East Africa Warthog.jpg" />
            <h3>Warthog</h3>
            <h5>Pastel</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Mama Gorilla.jpg"
            />
            <h3>Mama Gorilla</h3>
            <h5>Oil</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Silverback.jpg"
            />
            <h3>Silverback</h3>
            <h5>Oil</h5>
          </a>
        </div>
        <div className="four wide column column-gallery">
          <a
            href="http://localhost:3000/images/East Africa Four Water Buffaloes.jpg"
            className="four wide column column-gallery"
          >
            <img
              className="ui image"
              src="../images/East Africa Sleepy Baby Gorilla.jpg"
            />
            <h3>Sleepy Baby Gorilla</h3>
            <h5>Gouache</h5>
          </a>
        </div>
      </div> */
}
