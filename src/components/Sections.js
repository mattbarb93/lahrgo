import React from "react";
import "./Biography.css";
import "./Section.css";

const Sections = () => {
  return (
    <div>
      <div className="section-header">
        <h1>Exhibitions</h1>
      </div>

      <div className="ui two column centered grid">
        <div className="three column row">
          <div className="column">
            <img src="/images/Bronx Zoo rhinoceros.jpg" />
            <p>TBD: East Africa</p>
          </div>

          <div className="column">
            <img src="/images/Animals Chardonnay.jpg" />
            <p>2017 Artists</p>
          </div>

          <div className="column">
            <img src="/images/Bronx Zoo Chuckwalla.jpg" />
            <p>2011 Bronx Zoo</p>
          </div>
        </div>
        <div className="three column row">
          <div className="column">
            <img src="/images/Bronx Zoo Lion.jpg" />
            <p>2007 Business Owners</p>
          </div>
          <div className="column">
            <img src="/images/Animals Luna with her arm up.jpg" />
            <p>2004 Portraits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
