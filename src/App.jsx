import React from "react";

import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
import Keyframes from "./Components/Keyframes.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Keyframes />
      <Pricing />
      {/* <Footer />   */}
    </div>
  );
}

export default App;
