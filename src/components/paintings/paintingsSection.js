import React from "react";

import "../exhibitions/Section.css";
import {
  useHistory,
  useRouteMatch,
  BrowserRouter as Router,
} from "react-router-dom";

const PaintingsSection = () => {
  const history = useHistory();
  const navigateToPortraits = () => history.push(`${url}/Portraits`);
  const navigateToAnimals = () => history.push(`${url}/Animals`);
  const navigateToLandscapes = () => history.push(`${url}/Landscapes`);
  const navigateToReaders = () => history.push(`${url}/Readers`);
  const navigateToStillLifes = () => history.push(`${url}/StillLifes`);

  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="section-header">
        <h1>Paintings</h1>
      </div>

      <Router>
        <div className="ui two column centered grid">
          <div className="three column row">
            <div onClick={navigateToPortraits} className="column">
              <img src="/images/Humans Caroline & Luna.jpg" />
              <p>Portraits</p>
            </div>

            <div onClick={navigateToAnimals} className="column">
              <img src="/images/Animals Luna with her arm up.jpg" />
              <p>Animals</p>
            </div>

            <div onClick={navigateToLandscapes} className="column">
              <img src="/images/Landscapes St Paul de Mausole.JPG" />
              <p>Landscapes</p>
            </div>
          </div>
          <div className="three column row">
            <div onClick={navigateToReaders} className="column">
              <img src="/images/Readers at Heckscher museum.jpg" />
              <p>Readers</p>
            </div>

            <div onClick={navigateToStillLifes} className="column">
              <img src="/images/Still Life Sunflower Bouquet.jpg" />
              <p>Still Lifes</p>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default PaintingsSection;
