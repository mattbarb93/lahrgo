import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Sections from "./components/Sections";
import Home from "./components/Home";
import Header from "./components/Header";

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
          <Route path="/pictures" exact component={Sections} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
