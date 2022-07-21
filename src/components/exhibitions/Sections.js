import React from "react";

import "./Section.css";
import {
  useHistory,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";

const Sections = () => {
  const history = useHistory();
  const navigateToEastAfrica = () => history.push(`${url}/EastAfrica`);
  const navigateTo2017Artists = () => history.push(`${url}/2017Artists`);
  const navigateTo2011BronxZoo = () => history.push(`${url}/2011BronxZoo`);
  const navigateTo2007BusinessOwners = () =>
    history.push(`${url}/2007BusinessOwners`);
  const navigateTo2004Portraits = () => history.push(`${url}/2004Portraits`);

  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="section-header">
        <h1>Exhibitions</h1>
      </div>

      <Router>
        <div className="ui five row centered grid">
          <div className="row mobileOption">
            <p>1</p>
          </div>
          <div className="row centered mobileOption">
            <p>2</p>
          </div>
          <div className="row mobileOption">
            <p>3</p>
          </div>
          <div className="row mobileOption">
            <p>4</p>
          </div>
          <div className="row mobileOption">
            <p>5</p>
          </div>
        </div>

        {/* <div className="ui two column centered grid">
          <div className="three column row">
            <div onClick={navigateToEastAfrica} className="column">
              <img src="/images/East Africa Elephant Youth.jpg" />
              <p>TBD: East Africa</p>
            </div>

            <div onClick={navigateTo2017Artists} className="column">
              <img src="/images/Artists Alli Abbot vocalist.jpg" />
              <p>2017 Artists</p>
            </div>

            <div onClick={navigateTo2011BronxZoo} className="column">
              <img src="/images/Bronx Zoo Chuckwalla.jpg" />
              <p>2011 Bronx Zoo</p>
            </div>
          </div>
          <div className="three column row">
            <div onClick={navigateTo2007BusinessOwners} className="column">
              <img src="/images/Hunt Bus Kura Barn, Hitoshi.JPG" />
              <p>2007 Business Owners</p>
            </div>

            <div onClick={navigateTo2004Portraits} className="column">
              <img src="/images/Lahrgo Portraits Caroline reading Cezanne.JPG" />
              <p>2004 Portraits</p>
            </div>
          </div>
        </div> */}
      </Router>
    </div>
  );
};

export default Sections;
