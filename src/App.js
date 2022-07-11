import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Sections from "./components/exhibitions/Sections";
import Home from "./components/home/Home";
import Header from "./components/Header";
import EastAfrica from "./components/exhibitions/EastAfrica";
import Footer from "./components/Footer";
import Artists2017 from "./components/exhibitions/Artists2017";
import BronxZoo2011 from "./components/exhibitions/BronxZoo2011";
import BusinessOwners2007 from "./components/exhibitions/BusinessOwners2007";
import Portraits2004 from "./components/exhibitions/Portraits2004";
import PaintingsSection from "./components/paintings/paintingsSection";
import Animals from "./components/paintings/Animals";
import Portraits from "./components/paintings/Portraits";
import Landscapes from "./components/paintings/Landscapes";
import Readers from "./components/paintings/Readers";
import StillLifes from "./components/paintings/StillLifes";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="ui container">
          <div>
            {/* <Header /> */}
            <Route path="/" exact component={Home} />
            <Route path="/biography" exact component={Biography} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/exhibitions" exact component={Sections} />
            <Route path="/paintings" exact component={PaintingsSection} />
            <Route
              path="/exhibitions/EastAfrica"
              exact
              component={EastAfrica}
            />
            <Route
              path="/exhibitions/2017Artists"
              exact
              component={Artists2017}
            />
            <Route
              path="/exhibitions/2011BronxZoo"
              exact
              component={BronxZoo2011}
            />
            <Route
              path="/exhibitions/2007BusinessOwners"
              exact
              component={BusinessOwners2007}
            />
            <Route
              path="/exhibitions/2004Portraits"
              exact
              component={Portraits2004}
            />
            <Route path="/pictures" exact component={Sections} />
            <Route path="/paintings/portraits" exact component={Portraits} />
            <Route path="/paintings/Animals" exact component={Animals} />
            <Route path="/paintings/Landscapes" exact component={Landscapes} />
            <Route path="/paintings/Readers" exact component={Readers} />
            <Route path="/paintings/StillLifes" exact component={StillLifes} />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
