import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
import Keyframes from "./Components/Keyframes.jsx";
import FAQ from "./Components/FAQ.jsx";
import Registration from "./Components/Registration";

// import KeyframesSlides from "./Components/KeyframeSlides.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Route path="/keyframes" exact component={Keyframes}></Route>

      <Route path="/faq" exact component={FAQ}></Route>

      <Route path="/footer" exact component={Footer}></Route>

      <Route path="/registration" exact component={Registration}></Route> */}

      <Menu />
      <Keyframes />
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
