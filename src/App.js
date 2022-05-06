import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Sections from "./components/exhibitions/Sections";
import Home from "./components/home/Home";
import Header from "./components/Header";
import EastAfrica from "./components/exhibitions/EastAfrica";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/biography" exact component={Biography} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/exhibitions" exact component={Sections} />
          <Route path="/exhibitions/EastAfrica" exact component={EastAfrica} />
          <Route path="/pictures" exact component={Sections} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
