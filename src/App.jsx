import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Pricing from "./Components/Pricing.jsx";
import Menu from "./Components/Menu.jsx";
import Keyframes from "./Components/Keyframes.jsx";
import Faq from "./Components/FAQ.jsx";

// import KeyframesSlides from "./Components/KeyframeSlides.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Keyframes />
        <Pricing />
        <Faq />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
