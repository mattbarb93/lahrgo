import React from "react";

import "./Section.css";
import {
  useHistory,
  useRouteMatch,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import EastAfrica from "./EastAfrica";

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
        <div className="ui two column centered grid">
          <div className="three column row">
            <div onClick={navigateToEastAfrica} className="column">
              <img src="/images/Bronx Zoo rhinoceros.jpg" />
              <p>TBD: East Africa</p>
            </div>

            {/* <Link path={`${url}/EastAfrica`} className="column">
              <div className="column">
                <img src="/images/Bronx Zoo rhinoceros.jpg" />
                <p>TBD: East Africa</p>
              </div>
            </Link> */}

            <div onClick={navigateTo2017Artists} className="column">
              <img src="/images/Animals Chardonnay.jpg" />
              <p>2017 Artists</p>
            </div>

            <div onClick={navigateTo2011BronxZoo} className="column">
              <img src="/images/Bronx Zoo Chuckwalla.jpg" />
              <p>2011 Bronx Zoo</p>
            </div>
          </div>
          <div className="three column row">
            <div onClick={navigateTo2007BusinessOwners} className="column">
              <img src="/images/Bronx Zoo Lion.jpg" />
              <p>2007 Business Owners</p>
            </div>

            <div onClick={navigateTo2004Portraits} className="column">
              <img src="/images/Animals Luna with her arm up.jpg" />
              <p>2004 Portraits</p>
            </div>
          </div>
        </div>

        <Switch>
          <Route exact path={`${url}/EastAfrica`}>
            <EastAfrica />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Sections;
